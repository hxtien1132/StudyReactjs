import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function handleOnChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleSubmit(e) {
      e.preventDefault();
      if (!onSubmit) return;
      const formvalue = {
          title: value
      };
      onSubmit(formvalue) //trả về cho hàm cha
      setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        style={{ border: "1px solid black" }}
        onChange={handleOnChange}
      />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

export default TodoForm;
