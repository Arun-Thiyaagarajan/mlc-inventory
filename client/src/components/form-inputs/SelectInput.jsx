import { Select } from 'antd';
import { ChevronDown } from 'lucide-react';

const SelectInput = ({ label, name, optionsArray, selectChange, selectedValue, defaultValue, placeholder, showSearch, sortable=true }) => {
  
  return (
    <div className="form-group w-full">
      <div className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </div>

      <div className="h-11 border border-slate-300 rounded-lg flex items-center">
        <Select
          // allowClear
          showSearch={showSearch || false}
          placeholder={placeholder}
          defaultValue={defaultValue}
          variant="borderless"
          onChange={selectChange}
          suffixIcon={<ChevronDown />}
          className="w-full"
          optionFilterProp="searchLabel"
          filterSort={sortable && ((optionA, optionB) =>
            (optionA.searchLabel ?? '').toLowerCase().localeCompare((optionB.searchLabel ?? '').toLowerCase())
          )}
          options={optionsArray.map(({ value, label, icon: Icon }) => ({
            value,
            searchLabel: label,
            label: (
              <span className="flex items-center gap-2 label-text capitalize">
                { Icon && <Icon size={16} /> }
                {label}
              </span>
            ),
          }))}
        />
        {/* Hidden input to capture the select value for form submission */}
        <input
          type="hidden"
          name={name}
          value={selectedValue}
        />
      </div>
    </div>
  )
};

export default SelectInput;