import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Switch,
  Tooltip,
} from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AddDates from "./addDates";
import AddLocation from "./addLocation";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
/* eslint-disable no-template-curly-in-string */

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
/* eslint-enable no-template-curly-in-string */

const FormStep2 = () => {
  const [disableDeposit, setDisableDeposit] = useState("false");
  const [placeDeposit, setPlaceDeposit] = useState("Deposit");
  const [packagePrice, setPackagePrice] = useState();
  const [placeAmount, setPlaceAmount] = useState();
  const [valueDeposit, setValueDeposit] = useState();
  const [displayLocation, setDisplayLocation] = useState("none");
  const [displayDates, setDisplayDates] = useState("none");
  const onFinish = (values) => {
    console.log(values);
  };
  const handlePrice = (value) => {
    setPackagePrice(value);
    if (value < 100) {
      setDisableDeposit("true");
      setPlaceDeposit("100%(Full Upfront Payment)");
      setPlaceAmount(value);
    } else {
      setDisableDeposit("false");
      setPlaceDeposit("Deposit");
      if (valueDeposit) {
        setPlaceAmount(value * (valueDeposit * 0.01));
      } else {
        setPlaceAmount(0);
      }
    }
  };
  const handleDeposit = (value) => {
    setValueDeposit(value);
    // if (valueDeposit) {
    setPlaceAmount(packagePrice * value * 0.01);
    // }
  };
  //for checked location
  function onChangeCheckLoacation(checked) {
    if (checked) {
      setDisplayLocation("block");
    } else {
      setDisplayLocation("none");
    }
  }
  //for checked dates
  function onChangeCheckDates(checked) {
    if (checked) {
      setDisplayDates("block");
    } else {
      setDisplayDates("none");
    }
  }

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {/* //title */}
      <Form.Item
        name={["package", "title"]}
        label="Package title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* //price */}
      <Form.Item
        name={["package", "price"]}
        label="Package price"
        rules={[
          {
            required: true,
            type: "number",
            min: 100,
            // max: 99,
          },
        ]}
      >
        <InputNumber min={0} onChange={handlePrice} addonBefore="$" />
      </Form.Item>

      {/* //deposit */}
      <Form.Item
        name={["package", "deposit required"]}
        label="Deposit required?"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder={placeDeposit}
          // onChange={this.onGenderChange}
          // disabled={disableDeposit}
          onChange={handleDeposit}
        >
          <Option value="0">0%</Option>
          <Option value="10">10%</Option>
          <Option value="25">25%</Option>
          <Option value="50">50%</Option>
          <Option value="75">75%</Option>
          <Option value="100">100%(Full Upfront Payment)</Option>
        </Select>
      </Form.Item>

      {/* //amount */}
      <Form.Item name={["package", "deposit amount"]} label="Deposit amount">
        <Input disabled placeholder={placeAmount} addonBefore="$" />
      </Form.Item>

      {/* //lead time */}
      <Form.Item
        name={["package", "lead time"]}
        label="Lead time"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="How long will it take?">
          <Option value="1 hour">1 hour</Option>
          <Option value="2 hours">2 hours</Option>
          <Option value="6 hours">6 hours</Option>
          <Option value="12 hours">12 hours</Option>
          <Option value="1 day">1 day</Option>
          <Option value="3 days">3 days</Option>
          <Option value="5 days">5 days</Option>
          <Option value="1 week">1 week</Option>
          <Option value="1+ weeks">1+ weeks</Option>
        </Select>
      </Form.Item>

      {/* checked location*/}
      <Form.Item name={["package", "swich location"]} label="Location">
        <p>Is this package location-specific?</p>
        <Tooltip title="Your package will be available to customers globally, unless you specify locations here.">
          <QuestionOutlined />
        </Tooltip>
        <Switch
          checkedChildren="yes"
          unCheckedChildren="no"
          onChange={onChangeCheckLoacation}
        />
      </Form.Item>

      {/* add location */}
      <Form.Item
        name={["package", ""]}
        label=""
        style={{ display: displayLocation }}
      >
        <AddLocation />
      </Form.Item>

      {/* check date */}
      <Form.Item name={["package", "swich date"]} label="Dates">
        <p>Would you like to restrict available dates?</p>
        <Switch
          checkedChildren="yes"
          unCheckedChildren="no"
          onChange={onChangeCheckDates}
        />
      </Form.Item>

      {/* add Dates */}
      <Form.Item
        name={["package", ""]}
        label=""
        style={{ display: displayDates }}
      >
        <AddDates />
      </Form.Item>

      {/* submit */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormStep2;
