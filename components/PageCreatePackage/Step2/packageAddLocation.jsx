import { Form, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SelectLocation from "./selectLocation";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};
const PackageAddLocation = (props) => {
  return (
    <>
      <Form.Item style={{ display: props.displayLocation }}>
        <Form.List name="Location">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space
                    className="add-location"
                    key={key}
                    style={{ display: "flex", width: "100%", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "location"]}
                      fieldKey={[fieldKey, "location"]}
                      rules={[{ required: true, message: "Missing Location" }]}
                      wrapperCol={{ ...layout.wrapperCol, offset: 0 }}
                      style={{ width: "100%" }}
                    >
                      <SelectLocation />
                    </Form.Item>

                    <MinusCircleOutlined
                      onClick={() => {
                        remove(name);
                      }}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add a new location
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default PackageAddLocation;
