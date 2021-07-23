import { Form, Switch, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const PackageCheckLocation = (props) => {
  return (
    <Form.Item name={["package", "swich location"]} label="Location">
      <>
        <span style={{ marginRight: "10px" }}>
          Is this package location-specific?
        </span>
        <Tooltip title="Your package will be available to customers globally, unless you specify locations here.">
          <QuestionCircleOutlined />
        </Tooltip>
        <Switch
          style={{ marginLeft: "10px" }}
          checkedChildren="yes"
          unCheckedChildren="no"
          onChange={props.onChangeCheckLoacation}
        />
      </>
    </Form.Item>
  );
};

export default PackageCheckLocation;
