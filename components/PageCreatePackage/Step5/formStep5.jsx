import { Form, Input } from "antd";
const { TextArea } = Input;

const FormStep5 = () => {
  return (
    <>
      <Form.Item
        name={["step5", "requirements"]}
        label="Your requirements"
        tooltip="Specify any requirements or conditions you have before you can start work."
      >
        <TextArea showCount rows={7} maxLength={2000} />
      </Form.Item>
    </>
  );
};
export default FormStep5;
