import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Topnav.less";

export default class Topnav extends React.Component {
    render() {
        return (
            <div className="topbar">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <h5>Yuanlin Lin</h5>
                        </Col>
                        <Col sm={7}></Col>
                        <Col sm={2}>
                            <p>繁</p>
                            <p>简</p>
                            <p>Eng</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
