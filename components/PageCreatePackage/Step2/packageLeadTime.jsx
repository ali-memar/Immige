import { Form, Select } from "antd";
const { Option } = Select;
const PackageLeadTime = () => {
  return (
    <Form.Item
      name={["package", "lead time"]}
      label="Lead time"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Select  id="success" placeholder="How long will it take?">
        <Option value="1 hour">1 hour</Option>
        <Option value="2 hours">2 hours</Option>
        <Option value="6 hours">6 hours</Option>
        <Option value="12 hours">12 hours</Option>
        <Option value="1 day">1 day</Option>
        <Option value="3 days">3 days</Option>
        <Option value="5 days">5 days</Option>
        <Option value="1 week">1 week</Option>
        <Option value="1+ weeks">1+ weeks</Option>
      </Select>
    </Form.Item>
  );
};

export default PackageLeadTime;
