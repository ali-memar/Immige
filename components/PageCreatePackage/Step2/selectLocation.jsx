import React, { useState } from "react";
import { Input, Select } from "antd";
const SelectLocation = () => {
  const [isAddBefore, setIsAddBefore] = useState(true);

  const { Option } = Select;

  const handleAddBefore = (value) => {
    if (value != "City") {
      setIsAddBefore(true);
    } else {
      setIsAddBefore(false);
    }
  };

  const selectBefore = (
    <Select
      defaultValue="Postcode/Zipcode"
      className="select-before"
      onChange={handleAddBefore}
    >
      <Option value="Postcode/Zipcode">Postcode/Zipcode</Option>
      <Option value="City">City</Option>
    </Select>
  );

  const selectAfter = (
    <Select
      defaultValue="Select radius of availablity in miles"
      className="select-after"
    >
      <Option value="2 miles">2 miles</Option>
      <Option value="5 miles">5 miles</Option>
      <Option value="10 miles">10 miles</Option>
      <Option value="15 miles">15 miles</Option>
      <Option value="25 miles">25 miles</Option>
      <Option value="50 miles">50 miles</Option>
      <Option value="75 miles">75 miles</Option>
      <Option value="100 miles">100 miles</Option>
      <Option value="+100 miles">+100 miles</Option>
    </Select>
  );
  return (
    <Input
      addonBefore={selectBefore}
      addonAfter={isAddBefore ? selectAfter : null}
      placeholder="Enter Your Location"
    />
  );
};

export default SelectLocation;
