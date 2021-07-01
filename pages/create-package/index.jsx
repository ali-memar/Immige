import React from "react";
import { Select, Tooltip } from "antd";
import SliderCategory from "components/PageCreatePackage/slider";
import SelectTransfer from "components/PageFindProject/Select-Sransfer/SelectTransfer";
import { QuestionOutlined } from "@ant-design/icons";
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
            <h3>Select a category*</h3>
            <SliderCategory />
          </div>
          <div className="step2">
            <h3>Select include services*</h3>
            <Tooltip title="Please select all services that are included in your package. You can also add relevant/additional tags.">
              <QuestionOutlined />
            </Tooltip>

            <SelectTransfer />
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateProject;
