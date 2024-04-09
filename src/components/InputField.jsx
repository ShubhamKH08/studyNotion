
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const InputField = ({ label, type, placeholder, value, onChange, errorMessage, showError, name, showIcon, required, disabled, defaultvalue }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-normal text-slate-200 opacity-95 relative after:absolute after:content-['*'] after:text-red-600 after:indent-1 after:scale-125">
        {label} {required  }</label>
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          defaultValue={defaultvalue}
          required={required}
          className="pl-4 w-full mt-1 block border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-[2px] h-10 bg-grayPopUp text-grayText font-bold"
        />
        {showIcon && (
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </span>
        )}
      </div>
      {showError && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
