import { InputNumber } from "antd";

const AntNumInput = ({ label, name, valueChange, value, placeholder, precision, prefix, suffix, addonBefore }) => {
  return (
    <div className="form-group w-full">
      <div className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </div>

      <div className="h-11 border border-slate-300 rounded-lg flex items-center">
        <InputNumber
          variant="borderless"
          changeOnWheel
          min={0}
          addonBefore={addonBefore || ''}
          placeholder={placeholder || ''}
          prefix={prefix || ''}
          suffix={suffix || ''}
          precision={precision || 0}
          value={value ?? 0}
          onChange={valueChange}
          className="w-full label-text" />
        {/* Hidden input to capture the select value for form submission */}
        <input
          type="hidden"
          name={name}
          value={value ?? 0}
        />
      </div>
    </div>
  );
}
export default AntNumInput;