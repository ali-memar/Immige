import { Row, Col } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FileSearchOutlined,
  BankOutlined,
  BranchesOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
const switchSectionMainPage = () => {
  const router = useRouter();
  return (
    <div id="wrapper-switch-section">
      <h2>WANT TO WORK? START HERE</h2>
      <Row className="w-full" justify="center" align="middle" gutter={10}>
        <Col
          span={5}
          className={router.pathname == "/find-project" ? "active" : ""}
        >
          <Link href={"/find-project"}>
            <a>
              <FileSearchOutlined />
              <p>FIND A PROJECT</p>
            </a>
          </Link>
          <Link href={"/"}>
            <a
              className={
                router.pathname == "/find-project" ? "close-active" : "hidden"
              }
            >
              <CloseCircleOutlined />
            </a>
          </Link>
        </Col>
        <Col
          span={5}
          className={router.pathname == "/create-package" ? "active" : ""}
        >
          <Link href={"/create-package"}>
            <a>
              <BankOutlined />
              <p>CREATE A PACKAGE</p>
            </a>
          </Link>
          <Link href={"/"}>
            <a
              className={
                router.pathname == "/create-package" ? "close-active" : "hidden"
              }
            >
              <CloseCircleOutlined />
            </a>
          </Link>
        </Col>
        <Col
          span={5}
          className={router.pathname == "/collaborate" ? "active" : ""}
        >
          <Link href={"/collaborate"}>
            <a>
              <BranchesOutlined />
              <p>COLLABORATE</p>
            </a>
          </Link>
          <Link href={"/"}>
            <a
              className={
                router.pathname == "/collaborate" ? "close-active" : "hidden"
              }
            >
              <CloseCircleOutlined />
            </a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default switchSectionMainPage;
