import React, { useState } from "react";
import { Tooltip } from "antd";
import SliderCategory from "components/PageCreatePackage/slider";
import SelectTransfer from "components/PageFindProject/Select-Sransfer/SelectTransfer";
import { QuestionCircleOutlined } from "@ant-design/icons";
import style from "./formStep1.module.scss";
const formStep1 = () => {
  const [category, setCategory] = useState([]);
  const [activeSlide, setActiveSlide] = useState(-1);

  return (
    <>
      <div>
        <h3>Select a category*</h3>
        <SliderCategory
          setCategory={setCategory}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
        <div>
          <div className={style.wrapperStep1}>
            <h3>Select include services*</h3>
            <Tooltip title="Please select all services that are included in your package. You can also add relevant/additional tags.">
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <SelectTransfer
            category={category}
            setCategory={setCategory}
            setActiveSlide={setActiveSlide}
          />
        </div>
      </div>
    </>
  );
};
export default formStep1;
