import React from "react";
import { useForm, Controller, useController } from "react-hook-form";

export const UseController = () => {
  const {
    handleSubmit,
    control,
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
      firstname: "",
      email: "",
      check: false,
      password: "",
    },
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="m-3">
        <Controller
          control={control} // phải truyền control
          name="firstName"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              className="border"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              placeholder="enter your firsename"
            />
          )}
        />
      </div>
      <div className="m-3">
        <Controller
          control={control} // phải truyền control
          name="check"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              type="checkbox"
              className="border"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              placeholder="enter your firsename"
            />
          )}
        />
      </div>
      <div className="m-3">
        <MyInput
          name="email"
          control={control}
          placeholder="enter your mail"
          id="email"
        ></MyInput>
      </div>
      <div className="m-3">
        <MyInput2
          name="password"
          control={control}
          placeholder="enter your password"
          id="password"
        ></MyInput2>
      </div>
      <div>
        <button
          type="submit"
          className="w-36 p-4 bg-blue-600 text-white font-semibold rounded-lg"
          style={isSubmitting ? { backgroundColor: "red", color: "green" } : {}}
          disabled={isSubmitting} //thời gian ms clicj lại được
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// có 2 cách sử dụng để custom component
//c1:controler
const MyInput = ({ control, ...props }) => {
  // console.log(useField);
  return (
    <Controller
      className="flex flex-col gap-2 mb-5"
      name={props.name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <input
          className="border"
          onChange={onChange}
          onBlur={onBlur}
          selected={value}
          // {...field}
          {...props}
        />
      )}
    ></Controller>
  );
};
//c2:Usecontroler

const MyInput2 = ({ control, ...props }) => {
  // console.log(useField);
  const { field } = useController({ control, name: props.name });
  return <input className="border" {...field} {...props} />;
};
