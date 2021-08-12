import React, { useState } from "react";
import { Form, Input, Tooltip } from "antd";
const formatNumber = (value) => {
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
};

const MyInputNumber = (props) => {
  const [value, setValue] = useState(null);
  const changeValue = (e) => {
    const isInteger = /^[0-9]+$/;
    if (e.target.value === "" || isInteger.test(e.target.value)) {
      setValue(e.target.value);
    }
  };
  const valueTooltip = value;
  const title = valueTooltip ? (
    <span className="numeric-input-title">
      {valueTooltip !== "-" ? formatNumber(valueTooltip) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <Form.Item hasFeedback validateStatus={value ? "success" : "error"}>
      <Tooltip
        trigger={["focus"]}
        title={title}
        stringMode={true}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          placeholder={props.placeholder}
          min={0}
          allowClear
          onChange={changeValue}
          value={value}
        />
      </Tooltip>
    </Form.Item>
  );
};

export default MyInputNumber;
