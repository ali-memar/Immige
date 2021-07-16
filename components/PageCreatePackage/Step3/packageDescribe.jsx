import { Form, Input } from "antd";
const PackageDescribe = () => {
  const { TextArea } = Input;
  return (
    <Form.Item name="Describe" label="Describe your package">
      <TextArea rows={4} maxLength="2000" showCount />
    </Form.Item>
  );
};

export default PackageDescribe;
