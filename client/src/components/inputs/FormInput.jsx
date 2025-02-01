
const FormInput = ({ label, name, type, defaultValue, size, inputRef, required }) => {
  return (
    <label className="form-control h-20 w-full">
      <div className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </div>
      <input
        ref={inputRef}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        required={required}
      />
    </label>
  );
}
export default FormInput;