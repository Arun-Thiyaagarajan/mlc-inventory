
const FormInput = ({ label, name, defaultChecked, inputRef, required }) => {
  return (
    <div className="form-control w-max">
      <label className="label justify-start gap-3 cursor-pointer">
        <span className="label-text font-semibold capitalize">{label}</span>
        <input
          ref={inputRef}
          type='checkbox'
          name={name}
          defaultChecked={defaultChecked}
          className='toggle'
          required={required}
          />
      </label>
    </div>
  );
}
export default FormInput;