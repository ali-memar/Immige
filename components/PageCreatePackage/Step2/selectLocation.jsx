import React, { useState } from "react";
import { Input, Select, Form } from "antd";
const SelectLocation = () => {
  const [status, setStatus] = useState({
    isSelect: true,
    select: false,
    input: false,
  });
  const [isAddBefore, setIsAddBefore] = useState(true);

  const { Option } = Select;

  const onChange = (e) => {
    if (e.target.value != "") {
      setStatus((prevState) => ({ ...prevState, input: true }));
    } else {
      setStatus((prevState) => ({ ...prevState, input: false }));
    }
  };
  const handleAddBefore = (value) => {
    if (value != "City") {
      setIsAddBefore(true);
      setStatus((prevState) => ({ ...prevState, isSelect: true }));
    } else {
      setIsAddBefore(false);
      setStatus((prevState) => ({ ...prevState, isSelect: false }));
    }
  };
  const onChangeSelect = () => {
    setStatus((prevState) => ({ ...prevState, select: true }));
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
      onChange={onChangeSelect}
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
    <Form.Item
      hasFeedback
      validateStatus={
        (!status.isSelect && status.input) ||
        (status.isSelect && status.select && status.input)
          ? "success"
          : "error"
      }
      // help="Should be combination of numbers & alphabets"
      rules={[{ required: true, message: "Missing Location" }]}
    >
      <Input
        addonBefore={selectBefore}
        addonAfter={isAddBefore ? selectAfter : null}
        placeholder="Enter Your Location"
        // value={value}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default SelectLocation;
