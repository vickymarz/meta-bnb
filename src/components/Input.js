import React from 'react';

const Input = ({
  type,
  name,
  onChange,
  placeholder,
  value,
  innerRef,
}) => (
  <>
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      ref={innerRef}
    />
  </>
);

export default Input;
