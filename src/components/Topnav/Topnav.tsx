import React from "react";
import { Row, Col } from "react-grid-system";
import "./Topnav.less";

export default class Topnav extends React.Component {
    render() {
        return (
            <div className="topbar">
                <Row style={{ width: "100%" }}>
                    <Col xs={6} lg={8}>
                        <h5>Yuanlin Lin</h5>
                    </Col>
                    <Col style={{ padding: 0 }} xs={6} lg={3}>
                        <p>Eng</p>
                        <p style={{ marginRight: 16 }}>简</p>
                        <p style={{ marginRight: 16 }}>繁</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
