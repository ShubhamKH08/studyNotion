
const DropdownInputField = ({ label, options, value, onChange, errorMessage, showError, name, required, disabled, defaultvalue, h }) => {
  const height = h || 46;

  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-normal text-slate-200 opacity-95">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={label}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          defaultValue={defaultvalue}
          required={required}
          style={{ height: `${height}px` }}
          className="pl-4 w-full mt-1 block border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-100 sm:text-sm border-b-2 bg-gray-900"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {showError && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default DropdownInputField;
