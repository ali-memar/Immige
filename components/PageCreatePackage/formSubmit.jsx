import { Form, Button } from "antd";

const FormSubmit = (props) => {
  const layout = props.layout;
  return (
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  );
};

export default FormSubmit;
