/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactNode, useRef, useState } from 'react';

import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';
import * as ipfsService from 'services/Sosmarkets/ipfs';

import ImageCropper from 'components/ImageCropper';

import Text from '../Text';
import InputErrorMessage from './InputErrorMessage';

type FileUploadButtonProps = {
  name: string;
  loading: boolean;
  children: ReactNode;
};

function ImageUploadButton({
  name,
  loading = false,
  children
}: FileUploadButtonProps & React.LabelHTMLAttributes<HTMLLabelElement>) {
  const ref = useRef<HTMLLabelElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  React.useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  return (
    <label
      ref={ref}
      htmlFor={name}
      className={classNames({
        'pm-c-button-normal--primary': true,
        'pm-c-button--sm': true,
        caption: true,
        semibold: true
      })}
      style={
        loading
          ? {
              width: `${width}px`,
              height: `${height}px`
            }
          : {}
      }
    >
      {loading ? <span className="spinner" /> : children}
    </label>
  );
}

type ThumbnailContext = {
  image: {
    hash: string;
    file: any;
    isUploaded: boolean;
  };
};

type ImageUploadInputProps = {
  label?: string;
  name: string;
  notUploadedActionLabel: string;
  uploadedActionLabel: string;
  description?: string;
};

function ImageUploadInput({
  label,
  name,
  notUploadedActionLabel,
  uploadedActionLabel,
  ...props
}: ImageUploadInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const { setFieldValue, setFieldTouched } =
    useFormikContext<ThumbnailContext>();
  const [field, meta] = useField(name);
  const [isUploading, setIsUploading] = useState(false);
  const [isCroppingImage, setIsCroppingImage] = useState(false);
  const [croppedImagePreviewURL, setCropperImagePreviewURL] = useState<
    undefined | string
  >(undefined);
  const [invalidImageError, setInvalidImageError] = useState<
    undefined | string
  >(undefined);

  const isValidImage = imageType =>
    ['image/png', 'image/jpg', 'image/jpeg'].includes(imageType);

  function clearImage() {
    setCropperImagePreviewURL(undefined);

    setFieldValue(name, {
      file: undefined,
      hash: '',
      isUploaded: false
    });
  }

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;

    setInvalidImageError(undefined);

    if (files && files[0]) {
      if (isValidImage(files[0].type)) {
        setInvalidImageError(undefined);

        setFieldValue(name, {
          file: files[0],
          hash: '',
          isUploaded: false
        });

        setIsCroppingImage(true);
      } else {
        clearImage();

        setFieldTouched(name, true);
        setInvalidImageError(
          'Format not supported. Please upload in jpg or png format'
        );
      }
    } else {
      clearImage();
    }
  }

  async function handleCroppedImage(croppedImage: File) {
    setFieldValue(name, {
      file: croppedImage,
      hash: '',
      isUploaded: true
    });

    setCropperImagePreviewURL(URL.createObjectURL(croppedImage));
    setIsCroppingImage(false);

    setIsUploading(true);
    const response = await ipfsService.addFile(croppedImage);
    setIsUploading(false);

    if (response.status !== 200) {
      // TODO: display error toast
      return;
    }

    // TODO: upload hash to smart contract
    const { hash } = response.data;

    setFieldValue(name, {
      file: croppedImage,
      hash,
      isUploaded: true
    });
  }

  function handleCancelCropImage() {
    clearImage();
    setIsCroppingImage(false);
  }

  const uploadActionLabel = field.value.isUploaded
    ? uploadedActionLabel
    : notUploadedActionLabel;

  return (
    <>
      <ImageCropper
        visible={isCroppingImage}
        image={field.value.file}
        onCrop={handleCroppedImage}
        onCancel={handleCancelCropImage}
      />
      <div className="pm-c-input__group">
        {label ? (
          <label htmlFor={name} className="pm-c-input__label--default">
            {label}
          </label>
        ) : null}

        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          id={name}
          {...props}
          onChange={handleImageUpload}
          hidden
        />
        <div className="pm-c-file-upload-input__actions">
          {croppedImagePreviewURL ? (
            <img
              className="pm-c-market__body-image"
              alt="Thumbnail"
              src={croppedImagePreviewURL}
              width={66}
              height={66}
            />
          ) : null}
          <ImageUploadButton name={name} loading={isUploading}>
            {uploadActionLabel}
          </ImageUploadButton>
          {field.value.isUploaded ? (
            <Text
              as="span"
              scale="caption"
              fontWeight="medium"
              className="pm-c-file-upload-input__status"
            >
              {field.value.file.name}
            </Text>
          ) : (
            <Text
              as="span"
              scale="caption"
              fontWeight="medium"
              className="pm-c-file-upload-input__status"
            >
              No file chosen
            </Text>
          )}
        </div>
        {!isUploading && meta.touched && (meta.error || invalidImageError) ? (
          <InputErrorMessage
            message={invalidImageError || (meta.error as any).hash}
          />
        ) : null}
      </div>
    </>
  );
}

export default ImageUploadInput;
