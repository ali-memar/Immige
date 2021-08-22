import { Form, Input, Button, Space } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
const PackageAddProvide = () => {
  return (
    <Form.List name="include">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, fieldKey, ...restField }) => (
            <Space
              key={key}
              style={{ display: "flex", marginBottom: 8 }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, "provide package"]}
                fieldKey={[fieldKey, "providePackage"]}
                hasFeedback
                rules={[{ required: true, message: "This field not empty" }]}
              >
                <Input placeholder="Enter what your package include" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add more
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default PackageAddProvide;
