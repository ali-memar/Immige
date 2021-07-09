import React from "react";
import { Select } from "antd";

import FormStep2 from "components/PageCreatePackage/Step2/formStep2";
import FormStep1 from "components/PageCreatePackage/Step1/formStep1";
import FormStep3 from "components/PageCreatePackage/Step3/formStep3";
import FormStep4 from "components/PageCreatePackage/Step4/formStep4";
const CreateProject = () => {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <>
      <div id="wrapper-main-create-package" className="mw-1080">
        <div className="wrapper-select-draft">
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
        <div className="wrapper-steps">
          <div className="step1">
            <div className="header-title-step">
              <h2>STEP 1 - CATEGORY & SERVICES</h2>
            </div>
            <FormStep1 />
          </div>
          <div className="step2">
            <div className="header-title-step">
              <h2>STEP 2 - Price & Location</h2>
            </div>
            <FormStep2 />
          </div>
          <div className="step3">
            <div className="header-title-step">
              <h2>STEP 3 - What's included?</h2>
            </div>
            <FormStep3 />
          </div>
          <div className="step4">
            <div className="header-title-step">
              <h2>STEP 4 - Showcase your work</h2>
            </div>
            <FormStep4 />
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateProject;
