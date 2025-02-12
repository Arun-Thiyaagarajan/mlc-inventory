import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import axios from 'axios';

const SearchBar = ({ apiEndpoint, placeholder, onSelect }) => {
  const [options, setOptions] = useState([]);

  // Function to fetch search results from API
  const handleSearch = async (value) => {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const response = await axios.get(`${apiEndpoint}?query=${value}`);
      const data = response.data; // Assuming API returns an array

      // Format options for AutoComplete
      const formattedOptions = data.map((item) => ({
        value: item.name, // Change according to API response structure
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.name}</span>
            <span>{item.count} results</span> {/* Optional extra info */}
          </div>
        ),
      }));

      setOptions(formattedOptions);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <AutoComplete
        popupMatchSelectWidth={'100%'}
        className='w-full md:w-1/3'
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder={placeholder} enterButton />
      </AutoComplete>
    </div>
  );
};

export default SearchBar;