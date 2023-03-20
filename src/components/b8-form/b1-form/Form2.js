import React, { useState } from "react";
import useHandleChange from "../../../hooks/useHandleChange";

const Form2 = () => {
  const {values, handleChange} = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log(values);
  const handleInputChange = (e) => {
    // console.log(e.target.type);
    // const type = e.target.type;
    // setValues({
    //   ...values,
    //   [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    // });
    // if (type === "checked") {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // } else {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   });
    // }
  };
  // const { values, handleChange } = useHandleChange({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  const [nameError, setNameError] = useState({ fullnameErr: "", emailErr: "" });
  const handleSubmitForm = (e) => {
    e.preventDefault(); //k load lại trang
    // console.log({[e.target.name]:e.target.value});
    if (values.fullname === "" && values.email === "") {
      setNameError({
        fullnameErr: "your fullname is empty",
        emailErr: "your fullname is empty",
      });
    } else if (values.fullname === "") {
      setNameError({
        fullnameErr: "your fullname is empty",
        ...nameError
      });
    } else if (values.email === "") {
      setNameError({
        fullnameErr: "your fullname is empty",
        ...nameError
      });
    } else {
     setNameError({
       fullnameErr: "",
       emailErr: "",
     });
    }
    console.log("err2 :",nameError);
  };

  return (
    <div className="p-5">
      <form className=" flex gap-x-3" autoComplete="off">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="w-full max-w-[300px] p-5 border border-solid
             border-gray-200  rounded-lg "
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {!values.fullname && <p>{nameError.fullnameErr}</p>}
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="email"
            id="email"
            className="w-full max-w-[300px] p-5 border border-solid
             border-gray-200  rounded-lg "
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          {!values.email && <p>{nameError.emailErr}</p>}
        </div>

        <input type="checkbox" name="hobby" id="" onChange={handleChange} />
        <button
          type="submit"
          className=" p-3 text-white bg-blue-500 rounded-lg"
          onClick={handleSubmitForm}
        >
          submit
        </button>
      </form>
      {/* <textarea name="message" id=""className='w-full max-w-[300px] p-5 border border-solid border-gray-200 rounded-lg'
            placeholder='enter your message' onChange={handleTextareaChange}>
                   
            </textarea>
            {message}
            <select name="country" id="" onChange={handleSelectChange}>
                <option value="vietnam">VN</option>
                <option value="usa">USA</option>
                <option value="japan">JP</option>
            </select>
            {country} */}
    </div>
  );
};

export default Form2;
