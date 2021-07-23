import { Form, Switch } from "antd";
const PackageCheckDate = (props) => {
  return (
    <Form.Item name={("package", "swich date")} label="Dates">
      <>
        <span style={{ marginRight: "10px" }}>
          Would you like to restrict available dates?
        </span>
        <Switch
          checkedChildren="yes"
          unCheckedChildren="no"
          onChange={props.onChangeCheckDates}
        />
      </>
    </Form.Item>
  );
};

export default PackageCheckDate;
