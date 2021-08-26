/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';
import * as ipfsService from 'services/Polkamarkets/ipfs';

import Text from '../Text';
import InputErrorMessage from './InputErrorMessage';

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

const FileUploadInput = React.forwardRef<
  HTMLInputElement,
  FileUploadInputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { label, name, notUploadedActionLabel, uploadedActionLabel, ...props },
    ref
  ) => {
    const { setFieldValue, setFieldError } =
      useFormikContext<ThumbnailContext>();
    const [field, meta] = useField(name);

    const isValidFile = fileType =>
      ['image/png', 'image/jpg', 'image/jpeg'].includes(fileType);

    async function handleFileUpload(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      const { files } = event.currentTarget;

      if (files && isValidFile(files[0].type)) {
        const response = await ipfsService.addFile(files[0]);

        if (response.status !== 200) {
          // TODO: display error toast
          return;
        }

        // TODO: upload hash to smart contract
        const { hash } = response.data;

        setFieldValue('image', {
          file: files[0],
          hash,
          isUploaded: true
        });
      } else {
        setFieldError(
          'image',
          'Format not supported. Please upload in jpg or png format'
        );
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

    return (
      <div className="pm-c-input__group">
        {label ? (
          <label htmlFor={name} className="pm-c-input__label--default">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          id={name}
          {...props}
          onChange={handleFileUpload}
          hidden
        />
        <div className="pm-c-file-upload-input__actions">
          <label
            htmlFor={name}
            className={classNames({
              'pm-c-button-normal--primary': true,
              'pm-c-button--sm': true,
              caption: true,
              semibold: true
            })}
          >
            {field.value.isUploaded
              ? uploadedActionLabel
              : notUploadedActionLabel}
          </label>
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
);

FileUploadInput.displayName = 'FileUploadInput';

export default FileUploadInput;
