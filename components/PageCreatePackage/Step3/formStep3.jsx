import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Space, Tooltip } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be more than ${min}",
  },
};
const FormStep3 = () => {
  const { TextArea } = Input;
  const tooltiopLabelInclude = (
    <Tooltip
      placement="top"
      title="Please add all the items and services you will deliver to your client."
      arrowPointAtCenter
    >
      <QuestionOutlined />
    </Tooltip>
  );
  return (
    <>
      <Form
        name="whats include"
        // onFinish={onFinish}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          // {...restField}
          name={["provide package"]}
          // fieldKey={[fieldKey, "providePackage"]}
          label={`What are you providing in this package? ${tooltiopLabelInclude}`}
          rules={[{ required: true, message: "This field not empty" }]}
        >
          <Input placeholder="Enter what your package include" />
        </Form.Item>
        <Form.List
          name="include"
          label={`What are you providing in this package? ${tooltiopLabelInclude}`}
        >
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
                    rules={[
                      { required: true, message: "This field not empty" },
                    ]}
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
        <Form.Item name="Describe" label="Describe your package">
          <TextArea rows={4} maxLength="2000" showCount />
        </Form.Item>

        <p>{`Do you offer optional add-ons? ${tooltiopLabelInclude}`}</p>
        <Form.List
          name="optional"
          label={`Do you offer optional add-ons? ${tooltiopLabelInclude}`}
        >
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
                    name={[name, "optional add"]}
                    fieldKey={[fieldKey, "optionalAdd"]}
                    rules={[
                      { required: true, message: "This field not empty" },
                    ]}
                  >
                    <Input placeholder="Enter your package add-on title" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "optional add amount"]}
                    fieldKey={[fieldKey, "optionalAddAmount"]}
                    rules={[
                      { required: true, message: "This field not empty" },
                    ]}
                  >
                    <Input placeholder="Enter add-on amount" />
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

        {/* <Form.Item 
        // wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
      </Form>
    </>
  );
};

export default FormStep3;
