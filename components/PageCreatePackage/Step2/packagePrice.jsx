import { Form, Input, Tooltip } from "antd";
const PackagePrice = (props) => {
  const valueTooltip = props.valuePrice;
  const title = valueTooltip ? (
    <span className="numeric-input-title">
      {valueTooltip !== "-" ? props.formatNumber(valueTooltip) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <Form.Item
      name={["package", "price"]}
      label="Package price"
      validateFirst
      rules={[
        {
          required: true,
          type: "number",
          // min: 100,
          // max: 99,
        },
      ]}
    >     

      <Tooltip
        trigger={["focus"]}
        title={title}
        stringMode={true}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          placeholder="Enter your package price (Example: 10.00)"
          min={0}
          allowClear
          onChange={props.changeValuePrice}
          value={props.valuePrice}
        />
      </Tooltip>
    </Form.Item>
  );
};
export default PackagePrice;
