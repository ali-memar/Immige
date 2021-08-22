import { Form, Input } from "antd";
const PackageTitile = () => {
  return (
    <Form.Item
      name={["package", "title"]}
      label="Package title"
      hasFeedback
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder="Enter your package title" />
    </Form.Item>
  );
};

export default PackageTitile;
