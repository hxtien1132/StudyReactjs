import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
// using react-hook-form

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
      isDirty,
      dirtyFields,
      touchedFields,
    },
    watch,
    reset,
    setFocus,
    resetField,
    setValue,
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
    resolver: yupResolver(schemaValidation),
    mode: "onChange", // sử dụng để isValid trả về được true(isValid nó mặc định trả về false)
  });
  // console.log("SignUpFormHook ~ resetField",resetField);
  // console.log("SignUpFormHook ~ touchedfield", touchedFields); // trả về các filed đã chạm vào
  // console.log("SignUpFormHook ~ isDirty", isDirty); // trả về true nếu có ít nhất 1 trường đã nhập
  // console.log("SignUpFormHook ~ dirtyFields", dirtyFields);// trả về các field đã nhập
  // console.log("SignUpFormHook ~ isSubmitting", isSubmitting); // đang submit
  // console.log("SignUpFormHook ~ errors", errors);
  // console.log("SignUpFormHook ~ isValid", isValid);// nó luôn luôn trả về false
                                                     // (chỉ khi các trường kia đúng hết cho dù các field kia k validate)
  const watchShowAge = watch("showAge", false);// giúp kết hợp trạng thái trong lidate
  // console.log("SignUpFormHook ~ watchShowAge", watchShowAge);
  const onSubmit = async (values) => {
    // console.log("onSubmit ~ values", values);
    // if (isValid) {
    // console.log("send data to backend");
    // after successfuly submitted
    // then reset form
    // resetField()
    //   reset({
    //     firstName: "evondev",
    //     lastName: "tuan",
    //     email: "tuan@gmail.com",
    //   });
    // }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
          reset({
            firstName:"alo123",
            lastName: "tuan",
            email: "tuan@gmail.com",
          });
      }, 5000);
    });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("firstName", "evondev", {});
    setValue("lastName", "tuan");
    setValue("email", "tuan@gmail.com");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          // {...register("firstName")}
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 characters or less
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName", {required: true, minLength: 3 })}
        />
        {/* {touchedFields.lastName &&
          errors?.lastName?.type === "required" && (
            <p className="text-red-500 text-sm">ruquied</p>
          )}
        {errors?.firstName?.type === "minLength" && (
          <p className="text-red-500 text-sm"> Must be 3 characters or less</p>
        )} */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        /> */}
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>

        <div className="flex flex-row gap-2 mb-5 justify-between items-center">
          <label htmlFor="">Checkbox</label>
          <div>
            <input {...register("checkbox")} type="checkbox" value="A" />
            <label htmlFor="">A</label>
          </div>
          <div>
            <input {...register("checkbox")} type="checkbox" value="B" />
            <label htmlFor="">B</label>
          </div>
          <div>
            <input {...register("checkbox")} type="checkbox" value="C" />
            <label htmlFor="">C</label>
          </div>
        </div>
        <div className="flex flex-row gap-2 mb-5 justify-between items-center">
          <label htmlFor="">Radio</label>
          <div>
            <input {...register("radio")} type="radio" value="A" />
            <label htmlFor="">A</label>
          </div>
          <div>
            <input {...register("radio")} type="radio" value="B" />
            <label htmlFor="">B</label>
          </div>
          <div>
            <input {...register("radio")} type="radio" value="C" />
            <label htmlFor="">C</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input
            type="number"
            name=""
            id=""
            placeholder="Please enter your age"
            {...register("Age")}
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <div>
        <button
          className="p-3 bg-green-400 text-white"
          onClick={handleSetDemoData}
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 rounded-md border border-gray-100"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  // console.log("MyInput ~ field", field);
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpForm;
