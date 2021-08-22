import React, { useState } from "react";
import { Form, Select } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import FormStep1 from "components/PageCreatePackage/Step1/formStep1";
import FormStep2 from "components/PageCreatePackage/Step2/formStep2";
import FormStep3 from "components/PageCreatePackage/Step3/formStep3";
import FormStep4 from "components/PageCreatePackage/Step4/formStep4";
import FormStep5 from "components/PageCreatePackage/Step5/formStep5";
import FormSubmit from "components/PageCreatePackage/formSubmit";
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

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

const CreateProject = () => {
  const [validStep1, setvalidStep1] = useState("red");

  const { Option } = Select;

  const onFinish = (values) => {
    console.log(values);
  };

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <>
      <div id="wrapper-main-create-package" className="">
        <div className="wrapper-select-draft mw-1080">
          <h2>Create a new package or select one of your draft packages:</h2>
          <Select
            showSearch
            // style={{ width: 200 }}
            placeholder="Open Previous or Saved Draft"
            optionFilterProp="children"
            onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">-</Option>
          </Select>
        </div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          scrollToFirstError
          layout="vertical"
        >
          <div className="wrapper-steps">
            <div className="step1">
              <div className="header-title-step">
                <div className="mw-1080">
                  <h2>STEP 1 - CATEGORY & SERVICES</h2>
                  <CheckCircleOutlined style={{ color: validStep1 }} />
                </div>
              </div>
              <div className="mw-1080">
                <FormStep1 setvalidStep1={setvalidStep1} />
              </div>
            </div>
            <div className="step2">
              <div className="header-title-step">
                <div className="mw-1080">
                  <h2>STEP 2 - Price & Location</h2>
                </div>
              </div>
              <div className="mw-1080">
                <FormStep2 />
              </div>
            </div>
            <div className="step3">
              <div className="header-title-step">
                <div className="mw-1080">
                  <h2>STEP 3 - What's included?</h2>
                </div>
              </div>
              <div className="mw-1080">
                <FormStep3 />
              </div>
            </div>
            <div className="step4">
              <div className="header-title-step">
                <div className="mw-1080">
                  <h2>STEP 4 - Showcase your work</h2>
                </div>
              </div>
              <div className="mw-1080">
                <FormStep4 />
              </div>
            </div>
            <div className="step5">
              <div className="header-title-step">
                <div className="mw-1080">
                  <h2>STEP 5 - What do you need?</h2>
                </div>
              </div>
              <div className="mw-1080">
                <FormStep5 />
              </div>
            </div>
            <div className="form-submit">
              <FormSubmit layout={layout} />
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};
export default CreateProject;
