import React from "react";
import { Input } from "reactstrap";

const InputComponent = ({ label, name, type, ...rest }) => {
  return (
    <>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <Input
        className="form-control my-3 bg-light"
        name={name}
        type={type || "text"}
        placeholder={label}
        {...rest}
      />
    </>
  );
};

export default InputComponent;
