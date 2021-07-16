import { Form, Button, Space, DatePicker } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
const AddDates = (props) => {
  return (
    <>
      <Form.Item style={{ display: props.displayDates }}>
        <Form.Item
          // {...restField}
          name={["package", ""]}
          // fieldKey={[fieldKey, "first"]}
          rules={[{ required: true, message: "Missing Location" }]}
        >
          <RangePicker />
        </Form.Item>
        <Form.List name="Dates">
          {(fields, { add, remove }) => (
            <div>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "Date"]}
                    fieldKey={[fieldKey, "Date"]}
                    rules={[{ required: true, message: "Missing Date" }]}
                  >
                    <RangePicker />
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
                  Add New Dates
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default AddDates;
