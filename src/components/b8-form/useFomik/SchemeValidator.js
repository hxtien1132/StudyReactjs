import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SchemeValidator = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      LastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Must be more 3 charater")
        .max(20, "Must be 20 character or less") // quá 20 kí tự
        .required("required"), //err k nhập vào
      LastName: Yup.string()
        .min(3, "Must be more 3 charater")
        .max(10, "Must be 10 character or less") // quá 10 kí tự
        .required("required"), //err k nhập vào
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      setTimeout(() => {
        actions.resetForm({
          firstName: "",
          lastName: "",
        });
        actions.setSubmitting(false); //false click dk:true click k được
        actions.setStatus(false);
        status();
      }, 5000); //s sau ms click lại được
      function status() {
        actions.setStatus(true);
      }
    },
  });
  // console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
        //   id="firstName"
          // name="firstName"
          placeholder="Enter your firstname"
          className="p-4 rounded-md border border-gray-400"
          //  value={formik.values.firstName }//prototype :dùng hiển thị lên input được
          // onChange={formik.handleChange}// thay đổi giá trị
          // onBlur={formik.handleBlur} //kiểm tra đã click vào input đó chx xong dùng touched để check
          {...formik.getFieldProps("firstName")}    
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="LastName">Lastname</label>
        <input
          type="text"
          id="LastName"
          placeholder="Enter your Lastname"
          className="p-4 rounded-md border border-gray-400"
          // name="LastName"
          //  value={formik.values.LastName }//prototype :dùng hiển thị lên input được
          // onChange={formik.handleChange}// thay đổi giá trị
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("LastName")} // đại diện tất các trường cmt trên luôn
        />
        {formik.touched.LastName && formik.errors.LastName ? (
          <div className="text-sm text-red-500">{formik.errors.LastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg disabled:opacity-50"
          disabled={formik.isSubmitting}
        >
          Submit
        </button>
        {/* {formik.status && <p>hxtien</p>} */}
      </div>
    </form>
  );
};

export default SchemeValidator;
