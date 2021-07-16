import { Tooltip } from "antd";
import SliderCategory from "components/PageCreatePackage/slider";
import SelectTransfer from "components/PageFindProject/Select-Sransfer/SelectTransfer";
import { QuestionCircleOutlined } from "@ant-design/icons";
import style from "./formStep1.module.scss";
const formStep1 = () => {
  return (
    <>
      <div>
        <h3>Select a category*</h3>
        <SliderCategory />
        <div>
          <div className={style.wrapperStep1}>
            <h3>Select include services*</h3>
            <Tooltip title="Please select all services that are included in your package. You can also add relevant/additional tags.">
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <SelectTransfer />
        </div>
      </div>
    </>
  );
};
export default formStep1;
