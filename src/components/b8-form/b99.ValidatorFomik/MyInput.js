import { useField } from 'formik';
import React from 'react';

const MyInput = ({ ...props }) => {
  const [field, meta, hepper] = useField(props);
  // console.log(useField);
  console.log("field", field);
  console.log("meta", meta);
  console.log("hepper", hepper);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...field} //==  // name="LastName"
        //  value={formik.values.LastName }//prototype :dùng hiển thị lên input được
        // onChange={formik.handleChange}// thay đổi giá trị
        // onBlur={formik.handleBlur}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyInput;