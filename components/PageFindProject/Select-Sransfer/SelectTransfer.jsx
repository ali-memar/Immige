import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tree, Popover, Row, Col } from "antd";
import {
  CameraOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import sharedData from "sharedData";
const SelectTransfer = (props) => {
  const router = useRouter();
  const children = [];
  const [selected, setSelected] = useState([]); //submited in input
  const [checkedPhoto, setCheckedPhoto] = useState([]); //checked in tree Photo
  const [checkedVideo, setCheckedVideo] = useState([]); //checked in tree video
  const [checkedRelated, setCheckedRelated] = useState([]); //checked in tree related
  const [typedInput, setTypedInput] = useState([]); //checked in tree
  const [category, setCategory] = useState([]); //selected category in create-package page

  //for delete arrow and second box of transfer
  useEffect(() => {
    let antTransferList = document.querySelectorAll(".ant-transfer-list");
    let antTransferOperation = document.querySelectorAll(
      ".ant-transfer-operation"
    );
    if (antTransferList.length > 1) {
      antTransferList[1].classList = "hidden";
    }
    if (antTransferOperation.length >= 1) {
      antTransferOperation[0].classList = "hidden";
    }
  }, []);
  //end of delete

  {
    if (router.pathname == "/create-package")
      useEffect(() => {
        setTypedInput(typedInput.filter((item) => item != category));
        setCategory(props.category);
      }, [props.category]);
  }

  useEffect(() => {
    const keys = typedInput.concat(
      checkedPhoto,
      checkedVideo,
      checkedRelated,
      category
    );
    const uniqueKeys = keys.filter((v, i, a) => a.indexOf(v) === i);
    setSelected(uniqueKeys);
    if (selected.length > 0 && category.length > 0)
      props.setvalidStep1("green");
      else props.setvalidStep1("red");
  }, [checkedPhoto, checkedVideo, checkedRelated, typedInput, category]);

  const handleChange = (value) => {
    setTypedInput(value);
  };
  const onCheckedPhoto = (checkedKeys) => {
    setCheckedPhoto(checkedKeys);
  };
  const onCheckedVideo = (checkedKeys) => {
    setCheckedVideo(checkedKeys);
  };
  const onCheckRelated = (checkedKeys) => {
    setCheckedRelated(checkedKeys);
  };

  const removeItem = (item) => {
    if (checkedPhoto.indexOf(item) != -1) {
      setCheckedPhoto(checkedPhoto.filter((i) => i != item));
    } else if (checkedVideo.indexOf(item) != -1) {
      setCheckedVideo(checkedVideo.filter((i) => i != item));
    } else if (checkedRelated.indexOf(item) != -1) {
      setCheckedRelated(checkedRelated.filter((i) => i != item));
    } else if (props.category) {
      if (props.category.indexOf(item) != -1) {
        props.setCategory([]);
        props.setActiveSlide(-1);
      }
    }
  };

  const clearAllItem = () => {
    setCheckedPhoto([]);
    setCheckedVideo([]);
    setCheckedRelated([]);
    if (props.category) {
      props.setCategory([]);
      props.setActiveSlide(-1);
    }
  };

  const contentHoverCameraIcon = (
    <div className="wrapper-tree-data">
      <Tree
        checkable
        onCheck={onCheckedPhoto}
        // selectedKeys={selectedKeys}
        checkedKeys={checkedPhoto}
        treeData={sharedData.treeDataCamera}
      />
    </div>
  );
  const contentHoverVideoIcon = (
    <div className="wrapper-tree-data">
      <Tree
        checkable
        onCheck={onCheckedVideo}
        // selectedKeys={selectedKeys}
        checkedKeys={checkedVideo}
        treeData={sharedData.treeDataVideo}
      />
    </div>
  );
  const contentHoverRelatedIcon = (
    <div className="wrapper-tree-data">
      <Tree
        checkable
        onCheck={onCheckRelated}
        // selectedKeys={selectedKeys}
        checkedKeys={checkedRelated}
        treeData={sharedData.treeDataRelated}
      />
    </div>
  );

  return (
    <>
      <div id="wrapper-search-filter">
        <Row
          className="mw-1080"
          justify="start"
          align="middle"
          // dir="rtl"
          gutter={10}
        >
          <Col
            className={
              checkedPhoto.length != 0
                ? "active wrapper-avatar"
                : "wrapper-avatar"
            }
            span={2}
            style={{ paddingRight: "0" }}
          >
            <Popover
              placement="bottomLeft"
              content={contentHoverCameraIcon}
              trigger="hover"
            >
              <CameraOutlined />
              <p>PHOTO</p>
            </Popover>
          </Col>
          <Col
            className={
              checkedVideo.length != 0
                ? "active wrapper-avatar"
                : "wrapper-avatar"
            }
            span={2}
            style={{ paddingRight: "0" }}
          >
            <Popover
              placement="bottomLeft"
              content={contentHoverVideoIcon}
              trigger="hover"
            >
              <VideoCameraOutlined />
              <p>VIDEO</p>
            </Popover>
          </Col>
          <Col
            className={
              checkedRelated.length != 0
                ? "active wrapper-avatar"
                : "wrapper-avatar"
            }
            span={2}
            style={{ paddingRight: "0" }}
            // style={{checkedRelated ? color:'red' :""}}
          >
            <Popover
              placement="bottomLeft"
              content={contentHoverRelatedIcon}
              trigger="hover"
            >
              <MenuOutlined />
              <p>RELATED</p>
            </Popover>
          </Col>
          <Col
            id="select-create"
            className="wrapper-avatar"
            span={16}
            style={{ paddingRight: "0" }}
          >
            <Select
              mode="tags"
              style={{ width: "100%" }}
              onChange={handleChange}
              placeholder="Enter Location"
              tokenSeparators={[","]}
              value={selected}
              allowClear
              dropdownClassName={"hidden"}
              onDeselect={removeItem}
              onClear={clearAllItem}
              // onDeselect={removeItem}
            >
              {children}
            </Select>
          </Col>
          <Col
            className="wrapper-avatar btn-clear"
            span={2}
            style={{ paddingRight: "0" }}
            onClick={clearAllItem}
          >
            <a>clear</a>
          </Col>
        </Row>
      </div>
      {/* styles */}
      <style jsx global>{`
        #wrapper-search-filter .ant-select-selection-item {
          color: white;
          background: #e72b56 !important;
          border-radius: 15px !important;
          font-weight: 500;
        }
        #wrapper-search-filter .ant-select-multiple .ant-select-selection-item-remove {
          color: white;
        }
        #wrapper-search-filter .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
          background-color: #e72b56 !important;
          border-color: #e72b56 !important;
        }
        #wrapper-search-filter .ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
        #wrapper-search-filter .ant-tree-checkbox:hover .ant-tree-checkbox-inner,
        #wrapper-search-filter .ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
          border-color: #e72b56 !important;
        }
        #wrapper-search-filter .ant-tree-checkbox-checked::after {
          border: none !important;
        }
        #wrapper-search-filter .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
          background-color: #e72b56 !important;
        }
        #wrapper-search-filter .ant-tree-switcher .ant-tree-switcher-icon svg,
        #wrapper-search-filter .ant-tree-switcher .ant-select-tree-switcher-icon svg {
          fill: #ff00c3;
          font-size: 12px;
        }
        #wrapper-search-filter .ant-col{
          text-align:center
          font-size: 25px;
        }
        #wrapper-search-filter .ant-popover-inner-content{
          box-shadow: 0px 0px 6px 0px #a7a6a6;
        }
        .ant-select:not(.ant-select-disabled):hover .ant-select-selector{
          border-color:#d9d9d9 !important;
        }
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
          border-color:  #e72b56 !important;
          -webkit-box-shadow: 0 0 0 2px rgb(231 43 86 / 20%) !important;
          box-shadow: 0 0 0 2px rgb(231 43 86 / 20%) !important;
        }
        .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
          background-color: #e72b56 !important;
          border-color: #e72b56 !important;
        }
      `}</style>
      {/* end of styles */}
    </>
  );
};
export default SelectTransfer;
