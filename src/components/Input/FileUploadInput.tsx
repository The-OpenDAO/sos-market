/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';
import * as ipfsService from 'services/Polkamarkets/ipfs';

import Text from '../Text';
import InputErrorMessage from './InputErrorMessage';

type FileUploadButtonProps = {
  name: string;
  loading: boolean;
  children: ReactNode;
};

function FileUploadButton({
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

type FileUploadInputProps = {
  label?: string;
  name: string;
  notUploadedActionLabel: string;
  uploadedActionLabel: string;
  description?: string;
};

function FileUploadInput({
  label,
  name,
  notUploadedActionLabel,
  uploadedActionLabel,
  ...props
}: FileUploadInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const { setFieldValue, setFieldError } = useFormikContext<ThumbnailContext>();
  const [field, meta] = useField(name);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreviewURL, setImagePreviewURL] = useState<undefined | string>(
    undefined
  );

  const isValidFile = fileType =>
    ['image/png', 'image/jpg', 'image/jpeg'].includes(fileType);

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;

    setIsUploading(true);

    if (files && isValidFile(files[0].type)) {
      const response = await ipfsService.addFile(files[0]);

      if (response.status !== 200) {
        // TODO: display error toast
        return;
      }

      // TODO: upload hash to smart contract
      const { hash } = response.data;

      setImagePreviewURL(URL.createObjectURL(files[0]));

      setFieldValue('image', {
        file: files[0],
        hash,
        isUploaded: true
      });

      setIsUploading(false);
    } else {
      setImagePreviewURL(undefined);

      setFieldError(
        'image',
        'Format not supported. Please upload in jpg or png format'
      );

      setIsUploading(false);
    }
  }

  useEffect(() => {
    if (!field.value.file) {
      setFieldValue('image', {
        file: undefined,
        hash: '',
        isUploaded: false
      });
    }
  }, [field.value.file, setFieldValue]);

  const uploadActionLabel = field.value.isUploaded
    ? uploadedActionLabel
    : notUploadedActionLabel;

  return (
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
        onChange={handleFileUpload}
        hidden
      />
      <div className="pm-c-file-upload-input__actions">
        {imagePreviewURL ? (
          <img
            className="pm-c-market__body-image"
            alt="Thumbnail"
            src={imagePreviewURL}
            width={66}
            height={66}
          />
        ) : null}
        <FileUploadButton name={name} loading={isUploading}>
          {uploadActionLabel}
        </FileUploadButton>
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
      {meta.error && typeof meta.error === 'string' ? (
        <InputErrorMessage message={meta.error} />
      ) : null}
    </div>
  );
}
FileUploadInput.displayName = 'FileUploadInput';

export default FileUploadInput;
