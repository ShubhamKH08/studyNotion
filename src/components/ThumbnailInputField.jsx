import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { MdCloudUpload } from "react-icons/md";

const ThumbnailInputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  onClick,
  errorMessage,
  showError,
  name,
  showIcon,
  required,
  disabled,
  defaultvalue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        onChange({ target: { name, value: event.target.result } });
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 relative cursor-pointer z-10" onClick={onClick}>
      <label
        // htmlFor={name}
        htmlFor={label}
        className="block text-sm font-normal text-slate-200 opacity-95"
      >
        {label} {required && <span className="text-red-500">*</span>}
        {/* </label> */}
        <div className="relative">
          <div
            className="relative flex items-center justify-between"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="absolute px-28 mt-44 text-gray-300 hidden md:block">
              <h3 className="text-center leading-6">
                <div className="flex justify-center">
                  <MdCloudUpload className="size-16 text-yellow-400" />
                </div>
                Drag and drop an image, or{" "}
                <span className="text-yellow-400">Browse</span>
                <br />
                Max 6MB each (12MB for videos)
              </h3>
              <div className="absolute py-20 mx-auto">
                <ul className="text-center gap-16 mb-4 flex list-disc text-gray-300 text-sm">
                  <li>Aspect ratio 16:9</li>
                  <li>Recommended size 1024x576</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div
              type={type}
              id={label}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              name={name}
              disabled={disabled}
              defaultValue={defaultvalue}
              required={required}
              accept="image/*"
              // className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              className="m-auto px-[26%] w-full mt-1 py-40  border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-2 h-10 bg-gray-900 cursor-pointer "
            />
          </div>
        </div>
        {/* </div> */}
        {showIcon && (
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </span>
        )}
        {showError && (
          <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
        )}
      </label>
    </div>
  );
};

export default ThumbnailInputField;
