import { Select } from "antd";
import React, { useState, useEffect } from "react";
import { Tree, Popover, Row, Col } from "antd";
import {
  CameraOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import sharedData from "sharedData";
const SelectTransfer = () => {
  const children = [];
  const [selected, setSelected] = useState([]); //submited in input
  const [selectedKeys, setSelectedKeys] = useState([]); //checked in tree

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

  const handleChange = (value, e) => {
    // if()
    setSelected(value);
    setSelectedKeys(value);
    // console.log("value of handeChange", value);
    // console.log("selectedKeys", selectedKeys);
    // console.log("selected", selected);
    // console.log("e", e);
  };

  const onCheck = (keys, e) => {
    // console.log(e);
    let key = e.node.key;
    if (selected.indexOf(key) == -1 && e.checked) {
      if (e.node.children) {
        let childNode = e.node.children;
        childNode.map((child) => {
          if (selected.indexOf(child.key) == -1) {
            selected.push(child.key);
          }
        });
      } else {
        selected.push(key);
      }
    } else if (selected.indexOf(key) != -1 && !e.checked) {
      if (e.node.children) {
        let childNode = e.node.children;
        childNode.map((child) => {
          selected.splice(selected.indexOf(child.key), 1);
        });
      }
      selected.splice(selected.indexOf(key), 1);
    } else if (!e.checked && e.node.children) {
      let childNode = e.node.children;
      childNode.map((child) => {
        selected.splice(selected.indexOf(child.key), 1);
      });
    }
    // console.log(e);
    setSelectedKeys(keys);
  };

  const clearAllItem = () => {
    // selectedKeys.splice(0, selectedKeys.length);
    // selected.splice(0, selectedKeys.length);
    setSelected([]);
    setSelectedKeys([]);
    // console.log(targetKeys);
  };

  const contentHoverCameraIcon = (
    <div className="wrapper-tree-data">
      <Tree
        checkable
        onCheck={onCheck}
        selectedKeys={selectedKeys}
        checkedKeys={selectedKeys}
        treeData={sharedData.treeDataCamera}
      />
    </div>
  );
  const contentHoverVideoIcon = (
    <div className="wrapper-tree-data">
      <Tree
        checkable
        onCheck={onCheck}
        selectedKeys={selectedKeys}
        checkedKeys={selectedKeys}
        treeData={sharedData.treeDataVideo}
      />
    </div>
  );
  const contentHoverRelatedIcon = (
    <div className="wrapper-tree-data">
      <Tree
        checkable
        onCheck={onCheck}
        selectedKeys={selectedKeys}
        checkedKeys={selectedKeys}
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
            className="wrapper-avatar"
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
            className="wrapper-avatar"
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
            className="wrapper-avatar"
            span={2}
            style={{ paddingRight: "0" }}
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
            className="wrapper-avatar"
            span={18}
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
              onClear={clearAllItem}
              // onDeselect={removeItem}
            >
              {children}
            </Select>
          </Col>
        </Row>
      </div>
      {/* styles */}
      <style jsx global>{`
        .ant-select-selection-item {
          color: white;
          background: #e72b56 !important;
          border-radius: 15px !important;
          font-weight: 500;
        }
        .ant-select-multiple .ant-select-selection-item-remove {
          color: white;
        }
        .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
          background-color: #e72b56 !important;
          border-color: #e72b56 !important;
        }
        .ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
        .ant-tree-checkbox:hover .ant-tree-checkbox-inner,
        .ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
          border-color: #e72b56 !important;
        }
        .ant-tree-checkbox-checked::after {
          border: none !important;
        }
        .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
          background-color: #e72b56 !important;
        }
        .ant-tree-switcher .ant-tree-switcher-icon svg,
        .ant-tree-switcher .ant-select-tree-switcher-icon svg {
          fill: #ff00c3;
          font-size: 12px;
        }
        .ant-col{
          text-align:center
          font-size: 25px;
        }
        .ant-popover-inner-content{
          box-shadow: 0px 0px 6px 0px #a7a6a6;
        }
      `}</style>
      {/* end of styles */}
    </>
  );
};
export default SelectTransfer;
