import { Form, InputNumber } from "antd";
const PackagePrice = (props) => {
  return (
    <Form.Item
      name={["package", "price"]}
      label="Package price"
      validateFirst
      rules={[
        {
          required: true,
          type: "number",
          min: 100,
          // max: 99,
        },
      ]}
    >
      <InputNumber
        placeholder="Enter your package price (Example: 10.00)"
        min={0}
        onChange={props.handlePrice}
        // addonBefore="$"
      />
    </Form.Item>
  );
};

export default PackagePrice;
