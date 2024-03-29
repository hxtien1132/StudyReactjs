import React, { Children } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: [],
        term: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.array().min(1).of(Yup.string().required()).required(),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
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
            term: false,
          });
          actions.setSubmitting(false); //false click dk:true click k được
        }, 5000); //s sau ms click lại được
      }}
    >
      {(formik) => {
        {
          /* console.log(formik); */
        }
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="First name"
              name="firstName"
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
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-red-400"
                disabled={formik.isSubmitting} //thời gian ms clicj lại được
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ ...props })=>{
    const [field,meta] =useField(props)
    // console.log(useField);
    console.log(field);
    return (
        <div  className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <input type="text" className="p-4 rounded-md border border-gray-100" 
            {...field} //==  // name="LastName"
                                //  value={formik.values.LastName }//prototype :dùng hiển thị lên input được
                                 // onChange={formik.handleChange}// thay đổi giá trị
                                 // onBlur={formik.handleBlur}
            {...props} />
            {
                meta.touched && meta.error ?(
            <div className="text-sm text-red-500">{meta.error}</div>
                ) : null
            }
        </div>
    )

}
const MyTextArea = ({ ...props })=>{
    const [field,meta] =useField(props)
   
    return (
        <div  className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <textarea type="text" className="p-4 rounded-md border border-gray-100 h-[150px] resize-none" 
            {...field}
            {...props} />
            {
                meta.touched && meta.error ?(
            <div className="text-sm text-red-500">{meta.error}</div>
                ) : null
            }
        </div>
    )

}

const MySelectBox = ({ ...props })=>{
    const [field,meta] =useField(props)
   
    return (
        <div  className="flex flex-col gap-2 mb-5">
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select type="text" className="p-4 rounded-md border border-gray-100" 
            {...field}
            {...props} />
            {
                meta.touched && meta.error ?(
            <div className="text-sm text-red-500">{meta.error}</div>
                ) : null
            }
        </div>
    )

}

const MyCheckBox = ({children, ...props })=>{ //note:children phải ghi đúng
    const [field,meta] =useField(props)
   
    return (
        <div  className="flex flex-col gap-2 mb-5">
           <label className="flex items-center gap-2">
           <input type="checkbox" 
            {...field}
            {...props} />
            {children}
           </label>
            {
                meta.touched && meta.error ?(
            <div className="text-sm text-red-500">{meta.error}</div>
                ) : null
            }
        </div>
    )

}

export default SignUpFormFinal;
