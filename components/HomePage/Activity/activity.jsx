import { Row, Col, Table } from "antd";
import Calender from "components/HomePage/Activity/calender";

const Activity = () => {
  const columns = [
    {
      title: "PROJECT",
      dataIndex: "project",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 2,
      },
    },
    {
      title: "ACTION",
      dataIndex: "action",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: "1",
      project: "John Brown",
      status: 98,
      action: 60,
    },
    {
      key: "2",
      project: "Jim Green",
      status: 98,
      action: 66,
    },
    {
      key: "3",
      project: "Joe Black",
      status: 98,
      action: 90,
    },
    {
      key: "4",
      project: "Jim Red",
      status: 88,
      action: 99,
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div className="w-full">
      <Row
        id="wrapper-activity"
        className="mw-1080"
        justify="center"
        align="middle"
        gutter={10}
      >
        <Col span={12}>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </Col>
        <Col span={12}>
          <Calender />
        </Col>
      </Row>
    </div>
  );
};
export default Activity;
