import { Form, Select } from "antd";
const { Option } = Select;
const PackageDeposit = (props) => {
  return (
    <Form.Item
      name={["package", "deposit required"]}
      label="Deposit required?"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Select
        placeholder={props.placeDeposit}
        disabled={props.disableDeposit}
        onChange={props.handleDeposit}
      >
        <Option value="0">0%</Option>
        <Option value="10">10%</Option>
        <Option value="25">25%</Option>
        <Option value="50">50%</Option>
        <Option value="75">75%</Option>
        <Option value="100">100%(Full Upfront Payment)</Option>
      </Select>
    </Form.Item>
  );
};

export default PackageDeposit;
