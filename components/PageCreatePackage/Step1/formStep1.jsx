import { Tooltip } from "antd";
import SliderCategory from "components/PageCreatePackage/slider";
import SelectTransfer from "components/PageFindProject/Select-Sransfer/SelectTransfer";
import { QuestionOutlined } from "@ant-design/icons";
const formStep1 = () => {
  return (
    <>
      <h3>Select a category*</h3>
      <SliderCategory />
      <div>
        <h3>Select include services*</h3>
        <Tooltip title="Please select all services that are included in your package. You can also add relevant/additional tags.">
          <QuestionOutlined />
        </Tooltip>
        <SelectTransfer />
      </div>
    </>
  );
};
export default formStep1;
