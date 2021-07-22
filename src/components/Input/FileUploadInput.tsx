/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';

import Text from '../Text';

type ThumbnailContext = {
  thumbnail: {
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
    const { setFieldValue } = useFormikContext<ThumbnailContext>();
    const [field] = useField(name);

    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
      const { files } = event.currentTarget;

      if (files) {
        setFieldValue('thumbnail', {
          file: files[0],
          isUploaded: true
        });
      }
    }

    useEffect(() => {
      if (!field.value.file) {
        setFieldValue('thumbnail', {
          file: undefined,
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
      </div>
    );
  }
);

FileUploadInput.displayName = 'FileUploadInput';

export default FileUploadInput;
