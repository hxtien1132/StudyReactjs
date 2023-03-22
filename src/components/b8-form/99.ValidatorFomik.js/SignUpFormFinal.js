import React, { Children } from "react";
import { Formik, Form, Field, ErrorMessage, useField, useFormik } from "formik";
import * as Yup from "yup";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import MySelectBox from "./MySelectBox";
import MyCheckBox from "./MyCheckBox";
import { array } from "prop-types";

const SignUpFormFinal = () => {

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        favorites: [false, false, false, false, false],
        term: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        // favorites: Yup.array().oneOf([true],"Requied),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      // touched={(value) => {
        
      // }}
      onSubmit={(values, actions) => {
        console.log(values);
        // console.log(actions);
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            favorites: [false, false, false, false, false],
            term: false,
          });
          actions.setSubmitting(false); //false click dk:true click k được
        }, 5000); //s sau ms click lại được
      }}
    >
      {(formik) => {
        
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            // autoComplete="off"
          >
            <MyInput
              label="First name"
              name="firstName" //phải có name ms kích hoạt dk các event kia.
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>
            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>
            <MyInput
              label="Email address"
              name="email"
              placeholder="Enter your email address"
              id="email"
            ></MyInput>
            <MyTextArea
              label="Introduce Yourself"
              name="intro"
              placeholder="Enter intro yourself"
              id="intro"
            ></MyTextArea>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">My favorites</label>
              <div className="">
                <input
                  type="checkbox"
                  className="mr-2"
                  name="favorites[0]"
                  id=""
                  {...formik.getFieldProps("favorites[0]")}
                />
                read book
                <input
                  type="checkbox"
                  className="mx-2"
                  name="favorites[1]"
                  id=""
                  {...formik.getFieldProps("favorites[1]")}
                />
                travel
                <input
                  type="checkbox"
                  className="mx-2"
                  name="favorites[2]"
                  id=""
                  {...formik.getFieldProps("favorites[2]")}
                />
                music
                <input
                  type="checkbox"
                  className="mx-2"
                  name="favorites[3]"
                  id=""
                  {...formik.getFieldProps("favorites[3]")}
                />
                food
                <input
                  type="checkbox"
                  className="mx-2"
                  name="favorites[4]"
                  id=""
                  {...formik.getFieldProps("favorites[4]")}
                />
                def
              </div>
            </div>
            {formik.touched.favorites && formik.errors.favorites ? (
              <div className="text-sm text-red-500">
                {formik.errors.favorites}
              </div>
            ) : null}
            <MySelectBox name="job" label="select your job">
              <option value="frontend">frontend</option>
              <option value="backend">backtend</option>
              <option value="fullstack">fullstack</option>
            </MySelectBox>

            <MyCheckBox name="terms">
              <p>I accept the term and conditions</p>
            </MyCheckBox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg "
                style={formik.isSubmitting ? {background:"red" } : {} }
                disabled={formik.isSubmitting} //thời gian ms clicj lại được
              >
                {formik.isSubmitting ? "Loading...":'submit'}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

// const MyInput = ({ ...props }) => {
//   const [field, meta,hepper] = useField(props);
//   // console.log(useField);
//   console.log("field",field);
//   console.log("meta", meta);
//   console.log("hepper",hepper);
//   return (
//     <div className="flex flex-col gap-2 mb-5">
//       <label htmlFor={props.id || props.name}>{props.label}</label>
//       <input
//         type="text"
//         className="p-4 rounded-md border border-gray-100"
//         {...field} //==  // name="LastName"
//         //  value={formik.values.LastName }//prototype :dùng hiển thị lên input được
//         // onChange={formik.handleChange}// thay đổi giá trị
//         // onBlur={formik.handleBlur}
//         {...props}
//       />
//       {meta.touched && meta.error ? (
//         <div className="text-sm text-red-500">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };
// const MyTextArea = ({ ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div className="flex flex-col gap-2 mb-5">
//       <label htmlFor={props.id || props.name}>{props.label}</label>
//       <textarea
//         type="text"
//         className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
//         {...field}
//         {...props}
//       />
//       {meta.touched && meta.error ? (
//         <div className="text-sm text-red-500">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// const MySelectBox = ({ ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div className="flex flex-col gap-2 mb-5">
//       <label htmlFor={props.id || props.name}>{props.label}</label>
//       <select
//         type="text"
//         className="p-4 rounded-md border border-gray-100"
//         {...field}
//         {...props}
//       />
//       {meta.touched && meta.error ? (
//         <div className="text-sm text-red-500">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// const MyCheckBox = ({ children, ...props }) => {
//   //note:children phải ghi đúng
//   const [field, meta] = useField(props);

//   return (
//     <div className="flex flex-col gap-2 mb-5">
//       <label className="flex items-center gap-2">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="text-sm text-red-500">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

export default SignUpFormFinal;
