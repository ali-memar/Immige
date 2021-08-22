import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import MyInputNumber from "components/inputNumber/inputNumber";

const PackageOfferOptional = () => {
  return (
    <Form.Item
      name=""
      label="Do you offer optional add-ons?"
      tooltip="You can offer your optional add-ons here and price them individually allowing clients to customise their package."
    >
      <Form.List name="optional">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                id="wrapperOfferOprional"
                key={key}
                style={{ display: "flex", marginBottom: 8, width: "100%" }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "optional add"]}
                  fieldKey={[fieldKey, "optionalAdd"]}
                  hasFeedback
                  rules={[{ required: true, message: "This field not empty" }]}
                  style={{ width: "100%" }}
                >
                  <Input placeholder="Enter your package add-on title" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, "optional add amount"]}
                  fieldKey={[fieldKey, "optionalAddAmount"]}
                  hasFeedback
                  rules={[{ required: false, message: "This field not empty" }]}
                >
                  <MyInputNumber placeholder="Enter add-on amount" />
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
    </Form.Item>
  );
};

export default PackageOfferOptional;
