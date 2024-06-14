import React from 'react';
import Select from 'react-select';

const FilterComponent = ({ uniqueCustomerIds, customerIdFilter, setCustomerIdFilter, searchTerm, setSearchTerm }) => (
  <div className="flex justify-between items-center mb-4">
    <Select
      isMulti
      options={uniqueCustomerIds}
      className="w-1/2"
      classNamePrefix="select"
      value={customerIdFilter}
      onChange={setCustomerIdFilter}
      placeholder="Select Customer ID(s)"
    />
    <input
      type="text"
      placeholder="Search"
      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      disabled={customerIdFilter.length === 0}
    />
  </div>
);

export default FilterComponent;
