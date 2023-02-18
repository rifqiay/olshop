import React from "react";

const Input = ({
  type,
  id,
  className,
  placeholder,
  onChange,
  name,
  values,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={values}
      />
    </>
  );
};

export default Input;
