import { Select } from 'antd';
import { ChevronDown } from 'lucide-react';

const SelectInput = ({ label, optionsArray, selectChange}) => (
  <div className="form-group w-full">
    <div className="label">
      <span className="label-text font-semibold capitalize">{label}</span>
    </div>

    <div className="h-11 border border-slate-300 rounded-lg flex items-center">
      <Select
        placeholder="Select the category"
        defaultValue="tiles"
        variant="borderless"
        onChange={selectChange}
        suffixIcon={<ChevronDown />}
        className="w-full"
        options={optionsArray.map(({ value, label, icon: Icon }) => ({
          value,
          label: (
            <span className="flex items-center gap-2 label-text">
              <Icon size={16} /> {label}
            </span>
          ),
        }))}
      />
    </div>
  </div>
);

export default SelectInput;