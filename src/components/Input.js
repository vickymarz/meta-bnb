import React from 'react';

const Input = ({
  type,
  name,
  onChange,
  placeholder,
  value,
  innerRef,
  className,
}) => (
  <>
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      ref={innerRef}
      className={className}
    />
  </>
);

export default Input;
