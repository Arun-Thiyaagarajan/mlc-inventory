import { Input } from "antd";

const AntInput = ({ label, name, valueChange, value, placeholder, prefix, suffix, addonBefore }) => {
  
  const handleChange = (e) => {
    valueChange(e.target.value);
  };

  return (
    <div className="form-group w-full">
      <div className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </div>

      <div className="h-11 border border-slate-300 rounded-lg flex items-center">
        <Input
          variant="borderless"
          addonBefore={addonBefore || ''}
          placeholder={placeholder || ''}
          prefix={prefix || ''}
          suffix={suffix || ''}
          value={value}
          onChange={handleChange}
          className="w-full label-text" />
        {/* Hidden input to capture the select value for form submission */}
        <input
          type="hidden"
          name={name}
          value={value}
        />
      </div>
    </div>
  );
}
export default AntInput;