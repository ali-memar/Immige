import {Row, Col} from "antd";
import Link from "next/link";
import {
    FacebookOutlined,
    LinkedinOutlined,
    TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
    return (
        <footer className="wrapper-footer">
            <h2 className="txt-white">
                <Link href={`/`}>IMMIGE</Link>
            </h2>
            <Row
                id="wrapper-social-footer"
                className="w-full"
                justify="center"
                align="middle"
                dir="rtl"
                gutter={0}
            >
                <Col span={2}>
                    <Link href={`/`}>
                        <a>
                            <LinkedinOutlined/>
                        </a>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link href={`/`}>
                        <a>
                            <TwitterOutlined/>
                        </a>
                    </Link>
                </Col>
                <Col span={2}>
                    <Link href={`/`}>
                        <a>
                            <FacebookOutlined/>
                        </a>
                    </Link>
                </Col>
            </Row>
            <div className="wrapper-doc-pdf-footer">
        <span>
          <a
              href="https://immige.s3.eu-west-2.amazonaws.com/app/snrFiles/IMMIGE_Terms_of_Service.pdf"
              target="_balnk"
          >
            Terms of Service
          </a>
        </span>
                <span>
          <a
              href="https://immige.s3.eu-west-2.amazonaws.com/app/snrFiles/IMMIGE_Terms_of_Service.pdf"
              target="_balnk"
          >
            Privacy Policy
          </a>
        </span>
                <span>
          <a
              href="https://immige.s3.eu-west-2.amazonaws.com/app/snrFiles/IMMIGE_Terms_of_Service.pdf"
              target="_balnk"
          >
            Cookie Policy
          </a>
        </span>
            </div>
            <h5 className="txt-white">
                Copyright © IMMIGE Ltd 2017-2021. All rights reserved. Registered in
                England and Wales No. 10730362.
            </h5>
        </footer>
    );
};
export default Footer;
