

const Button = ({ type, text, onClick, className }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`rounded-md bg-yellowBg text-black p-2 hover:opacity-90 hover:scale-105 text-center font-bold transition-transform duration-300 ease-in-out transform-gpu w-full h-12 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
