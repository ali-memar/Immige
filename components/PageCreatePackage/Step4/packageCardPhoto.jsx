import React, { useState } from "react";
import { Form, Upload } from "antd";
import ImgCrop from "antd-img-crop";

const PackageCardPhoto = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <Form.Item
      name="package card photo"
      label="Add a Package Card Photo"
      hasFeedback
      validateStatus={fileList.length != 0 ? "success" : "error"}
      rules={[{ required: true, message: "This field not empty" }]}
    >
      <ImgCrop
        rotate
        modalWidth={900}
        aspect={200 / 200}
        // shape="round"
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "Add Images & Video from your device:"}
        </Upload>
      </ImgCrop>
    </Form.Item>
  );
};
export default PackageCardPhoto;
