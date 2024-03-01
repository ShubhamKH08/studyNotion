
import React from "react";

const Button = ({ type, text, onClick }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="rounded-md bg-yellow-400 hover:opacity-90 text-gray-900 text-center text-sm font-medium transition-transform duration-300 ease-in-out transform-gpu w-full h-12"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
