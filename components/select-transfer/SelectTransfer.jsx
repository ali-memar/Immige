import { Select } from "antd";
import React, { useState, useEffect } from "react";
import TreeTransfer from "components/Transfer/transfer";

const selectTransfer = () => {
  const children = [];

  const treeData = [
    { key: "0-0", title: "0-0" },
    { key: "1", title: "1" },
    {
      key: "0-1",
      title: "0-1",
      children: [
        { key: "0-1-0", title: "0-1-0" },
        { key: "0-1-1", title: "0-1-1" },
      ],
    },
    { key: "0-2", title: "0-3" },
  ];
  const [selected, setSelected] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
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
  const handleChange = (value) => {
    setSelected(value);
  };

  const onChange = (keys) => {
    setTargetKeys(keys);
    keys.map((mykey) => {
      if (selected.indexOf(mykey) == -1) {
        selected.push(mykey);
      }
      return keys;
    });
  };
  const removeItem = (value) => {
    const indexItem = targetKeys.indexOf(value);
    if (indexItem > -1) {
      targetKeys.splice(indexItem, 1);
    }
  };
  const clearAllItem = () => {
    targetKeys.splice(0, targetKeys.length);
    console.log(targetKeys);
  };
  return (
    <>
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
        onDeselect={(string) => {
          removeItem(string);
        }}
      >
        {children}
      </Select>

      <TreeTransfer
        dataSource={treeData}
        targetKeys={targetKeys}
        onChange={onChange}
        onSelectChange={onChange}
        onItemSelectAll={true}
        onItemSelect={onChange}
        onItemSelectAll={(key) => console.log(key)}
      />
      <style jsx global>{`
        body {
          // background: aqua;
        }
        .ant-select-selection-item {
          color: white;
          background: #e72b56 !important;
          border-radius: 15px !important;
          font-weight: 500;
        }
        .ant-select-multiple .ant-select-selection-item-remove {
          color: white;
        }
      `}</style>
    </>
  );
};
export default selectTransfer;
