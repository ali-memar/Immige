import { Form, Input } from "antd";
const PackageAmount = (props) => {
  return (
    <Form.Item name={["package", "deposit amount"]} label="Deposit amount">
      <Input disabled placeholder={props.placeAmount} addonBefore="$" />
    </Form.Item>
  );
};

export default PackageAmount;
