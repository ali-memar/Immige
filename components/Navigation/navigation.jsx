import SwitchHeader from "components/Navigation/switch-header";
import Link from "next/link";
import { Row, Col, Popover, Avatar, List } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  BellOutlined,
  InsertRowAboveOutlined,
  DownOutlined,
} from "@ant-design/icons";

const Navigation = () => {
  const dataAvatarMenu = [
    "Setting",
    "Rresolution Center",
    "Suport",
    "Bugs/Suggestion",
    "Log out",
  ];
  const contentHoverAvatar = (
    <List
      dataSource={dataAvatarMenu}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
  return (
    <div id="wrapper-nav">
      <Row
        className="mw-1080"
        justify="start"
        align="middle"
        dir="rtl"
        gutter={10}
      >
        <Col className="wrapper-avatar" span={1} style={{ paddingRight: "0" }}>
          <Popover
            placement="bottomRight"
            content={contentHoverAvatar}
            trigger="hover"
          >
            <DownOutlined />
            <Avatar icon={<UserOutlined />} />
          </Popover>
        </Col>
        <Col span={1}>
          <MessageOutlined />
        </Col>
        <Col span={1}>
          <BellOutlined />
        </Col>
        <Col span={1}>
          <InsertRowAboveOutlined />
        </Col>
        <Col span={2}>
          <Link href={`/`}>
            <a>Manage</a>
          </Link>
        </Col>
        <Col className={`wrapper-img-logo`} span={3} offset={15}>
          <img src="https://immige.s3.eu-west-2.amazonaws.com/app/images/logo.png" />
        </Col>
        <SwitchHeader />
      </Row>
    </div>
  );
};

export default Navigation;
