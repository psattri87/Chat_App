import React from "react";

function Input({
  label = "",
  name = "",
  myRef,
  type = "text",
  className = "",
  inputClassName = "",
  isRequired = true,
  placeholder = "",
  value = "",
  onChange = () => {},
  handleKeyDown = () => {},
}) {
  return (
    <div className={`block text-sm text-gray-800 font-medium ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        ref={myRef}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName}`}
        placeholder={placeholder}
        required={isRequired}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
