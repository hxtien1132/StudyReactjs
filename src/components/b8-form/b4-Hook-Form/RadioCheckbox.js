import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// const validationSchema = Yup.object({checked: Yup.array().min(1, 'Select atleast one option of your interest') });
// in FormIk use initialValues like below: <Formik initialValues={{checked: []}} />

const validationSchema = yup.object().shape({
  favorite: yup
    .array()
    .min(1, "choose more one ")
    .of(yup.string().required())
    .required("requied"),
  sex: yup
    .string()
    .required("Please select your gender")
    .oneOf(["male", "female"], "You can only select male or female"),
});
export const MyForm = () => {
  const {
    register,
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
    defaultValues: { sex: "male", favorite: [] },
    resolver: yupResolver(validationSchema),
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
    <div className="container mt-3" style={{ maxWidth: 500 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mt-3" style={{ maxWidth: 500 }}>
          <div className="mb-3">
            <div>
              <label>Sex</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                name="sex"
                type="radio"
                value="male"
                className="custom-control-input"
                id="male"
                {...register("sex")}
              />
              <label className="custom-control-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="mb-3 custom-control custom-radio custom-control-inline">
              <input
                name="sex"
                type="radio"
                value="female"
                className="custom-control-input"
                id="female"
                {...register("sex")}
              />
              <label className="custom-control-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          {errors.sex && (
            <div className="text-red-500 text-sm">{errors.sex.message}</div>
          )}
          <div className="mb-3">
            <div>
              <label>Favorite seasons</label>
            </div>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input
                name="favorite"
                type="checkbox"
                value="winter"
                {...register("favorite")}
                className="custom-control-input"
                id="winter"
              />
              <label className="custom-control-label" htmlFor="winter">
                Winter
              </label>
            </div>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input
                name="favorite"
                type="checkbox"
                value="spring"
                className="custom-control-input"
                id="spring"
                {...register("favorite")}
              />
              <label className="custom-control-label" htmlFor="spring">
                Spring
              </label>
            </div>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input
                name="favorite"
                type="checkbox"
                value="summer"
                className="custom-control-input"
                id="summer"
                {...register("favorite")}
              />
              <label className="custom-control-label" htmlFor="summer">
                Summer
              </label>
            </div>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input
                component="input"
                type="checkbox"
                value="autumn"
                className="custom-control-input"
                id="autumn"
                {...register("favorite")}
              />
              <label className="custom-control-label" htmlFor="autumn">
                Autumn
              </label>
            </div>
          </div>
          {errors.favorite && (
            <div className="text-red-500 text-sm">
              {errors.favorite.message}
            </div>
          )}
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyForm />, rootElement);
