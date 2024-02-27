const InputField = (label, type, placeholder, value, onChange, errorMessage, showError) => {
  return (
    <div>
      <label htmlFor={label} className="text-primaryWhite mt-3 mb-2">{label}</label>
      <input
        id={label}
        className={`p-4 rounded-xl text-lg indent-4 text-primaryWhite placeholder:text-gray-400 placeholder:font-bold border-b-2 border-gray-200 ${errorMessage && showError ? 'duration-75 text-red-200 border-red-200':''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 

      />
      {errorMessage && showError && <p className='text-red-200 my-1 pl-3'>{errorMessage}</p>}
    </div>  
  )
};

export default InputField;
