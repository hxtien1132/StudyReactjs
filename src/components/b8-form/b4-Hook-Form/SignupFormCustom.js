import React, { Children } from "react";
import * as Yup from "yup";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
  lastName: Yup.string()
    .required("Please enter your last name")
    .max(10, "Must be 10 characters or less"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  intro: Yup.string().required("Please enter your intro"),
  job: Yup.string().required("Please enter your job"),
  term: Yup.boolean().oneOf([true], "Please check the terms and conditions"),
});
const SignUpFormFinal = () => {
  const {
    register, //custom k cần dùng register
    control, //dùng custom , control để dky form
    handleSubmit,
    formState: {
      errors,
      isValid,
      dirtyFields,
      isDirty,
      isSubmitting,
      touchedFields,
      submitCount,
    },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      intro: "",
      job: "",
      term: false,
    },
    resolver: yupResolver(schemaValidation),
  });
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 5000);
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <MyInput
        label="First name"
        placeholder="Enter your first name"
        id="firstName"
        name="firstName"
        control={control}
      ></MyInput>
      {errors.firstName && (
        <p className="text-sm text-red-500">{errors.firstName.message}</p>
      )}
      <MyInput
        label="Last name"
        placeholder="Enter your last name"
        id="lastName"
        name="lastName"
        control={control}
      ></MyInput>
      {errors.lastName && (
        <p className="text-sm text-red-500">{errors.lastName.message}</p>
      )}
      <MyInput
        label="Email address"
        placeholder="Enter your email address"
        id="email"
        name="email"
        control={control}
      ></MyInput>
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
      <MyTextArea
        label="Introduce Yourself"
        name="intro"
        placeholder="Enter intro yourself"
        id="intro"
        control={control}
      ></MyTextArea>
      {errors.intro && (
        <p className="text-sm text-red-500">{errors.intro.message}</p>
      )}
      <MySelectBox name="job" label="select your job" control={control}>
        <option value="frontend">frontend</option>
        <option value="backend">backtend</option>
        <option value="fullstack">fullstack</option>
      </MySelectBox>
      {errors.job && (
        <p className="text-sm text-red-500">{errors.job.message}</p>
      )}
      <MyCheckBox name="term" control={control}>
        <p>I accept the term and conditions</p>
      </MyCheckBox>
      {errors.term ? (
        <p className="text-sm text-red-500">{errors.term.message}</p>
      ) : null}
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-red-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const MyInput = ({ control, ...props }) => {
  // console.log(useField);
  const { field } = useController({ control, name: props.name });

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
    </div>
  );
};
const MyTextArea = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name });

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <textarea
        type="text"
        className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
        {...props}
        {...field}
      />
    </div>
  );
};

const MySelectBox = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name });

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select
        type="text"
        className="p-4 rounded-md border border-gray-100"
        {...props}
        {...field}
      />
    </div>
  );
};

const MyCheckBox = ({ control, children, ...props }) => {
  const { field } = useController({ control, name: props.name });

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>
    </div>
  );
};

export default SignUpFormFinal;
