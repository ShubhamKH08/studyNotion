
import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const InputField = ({ label, type, placeholder, value, onChange, errorMessage, showError, name, showIcon, required, disabled, defaultvalue }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-normal text-slate-200 opacity-95">
        {label} {required && <span className="text-red-500">*</span>}</label>
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
          className="pl-4 w-full mt-1 block border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-2 h-10 bg-gray-900"
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
