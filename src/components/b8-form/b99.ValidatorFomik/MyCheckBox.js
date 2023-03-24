import { useField } from 'formik';
import React from 'react';

const MyCheckBox = ({ children, ...props }) => {
  //note:children phải ghi đúng
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox"  {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyCheckBox;