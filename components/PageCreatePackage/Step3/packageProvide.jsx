import { Form, Input } from "antd";
const PackageProvide = () => {
  return (
    <Form.Item
      // {...restField}
      name="Provide package"
      // fieldKey={[fieldKey, "providePackage"]}
      rules={[{ required: true, message: "This field not empty" }]}
      label="What are you providing in this package?"
      tooltip="Please add all the items and services you will deliver to your client."
    >
      <Input placeholder="Enter what your package include" />
    </Form.Item>
  );
};

export default PackageProvide;
