import { useField } from 'formik';
import React from 'react';

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextArea;