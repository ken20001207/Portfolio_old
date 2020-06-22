import React from "react";
import { Spring, Trail } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./MyService.less";
import { Container, Row, Col } from "react-grid-system";

interface Props {
    page: string;
}

export default class MyService extends React.Component<Props> {
    service = [
        "平面設計",
        "使用者介面設計",
        "影像剪輯",
        "桌面應用程式開發",
        "iOS 應用程式開發",
        "Android 應用程式開發",
        "網頁切版服務",
        "響應式形象官網設計",
        "電子商務系統部署",
        "企業資源規劃系統部署",
    ];
    skill = [
        ["擅長 Adobe Photoshop", "擅長 Adobe Prmiere Pro", "擅長 Adobe Xd", "曾使用 Adobe Illustrator", "曾使用 Adobe After Effects"],
        ["擅長 React.js", "擅長 Vue.js", "擅長 React Native", "擅長 Electron.js", "曾使用 php"],
        ["擅長 Python Flask", "擅長 Koa.js", "擅長 MongoDB", "曾使用 Firbase", "曾使用 MySQL"],
        ["擅長 Typescript", "擅長 Python", "擅長 Java", "曾使用 C++", "曾使用 C#", "曾使用 C"],
    ];
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ mainr: 0 }}
                to={{ mainr: page === "service" ? 1920 : 0 }}
                config={{ easing: easing.easeCubicInOut, delay: 800, duration: 1200 }}
            >
                {(bgProps) => (
                    <Spring
                        from={{ rightr: 0 }}
                        to={{ rightr: page === "service" ? 800 : 0 }}
                        config={{ easing: easing.easeCubicInOut, delay: 1200, duration: 1200 }}
                    >
                        {(rightProps) => (
                            <div className="serviceBG">
                                <svg>
                                    <circle className="mainCircle" cx="50%" cy="50%" r={bgProps.mainr} />
                                    <circle className="rightCircle" cx="100%" cy="50%" r={rightProps.rightr} />
                                </svg>

                                <div className="description">
                                    <Spring
                                        from={{ top: 72 }}
                                        to={{ top: page === "service" ? 0 : 72 }}
                                        config={{ easing: easing.easeCubicInOut, duration: 800, delay: 450 }}
                                    >
                                        {(props) => (
                                            <div className="raise-warpper">
                                                <h1 style={props}>專長與技能</h1>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{ top: 120 }}
                                        to={{ top: page === "service" ? 0 : 120 }}
                                        config={{ easing: easing.easeCubicInOut, duration: 800, delay: 450 }}
                                    >
                                        {(props) => (
                                            <div className="raise-warpper">
                                                <p style={props}>
                                                    我擅長為複雜的問題提供一系列的解決方案
                                                    <br />
                                                    右方列出的技術使我能夠處理各種不同領域的問題
                                                    <br />
                                                    涵蓋了常見的如下需求：
                                                </p>
                                            </div>
                                        )}
                                    </Spring>

                                    <Trail
                                        items={this.service}
                                        keys={(item) => item}
                                        from={{ top: 72 }}
                                        to={{ top: page === "service" ? 0 : 72 }}
                                        config={{ duration: 2000, easing: easing.easeCubicInOut }}
                                    >
                                        {(item) => (props) => (
                                            <div className="raise-warpper">
                                                <p className="listitem" style={props}>
                                                    {item}
                                                </p>
                                            </div>
                                        )}
                                    </Trail>
                                </div>

                                <div className="skills">
                                    <Container>
                                        <Row>
                                            <Col sm={6}>
                                                <Spring
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 1600 }}
                                                >
                                                    {(props) => (
                                                        <div className="raise-warpper">
                                                            <h5 style={props}>設計技能</h5>
                                                        </div>
                                                    )}
                                                </Spring>
                                                <Trail
                                                    items={this.skill[0]}
                                                    keys={(item) => item}
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ duration: 2000, delay: 800, easing: easing.easeCubicInOut }}
                                                >
                                                    {(item) => (props) => (
                                                        <div className="raise-warpper">
                                                            <p style={props}>{item}</p>
                                                        </div>
                                                    )}
                                                </Trail>
                                            </Col>
                                            <Col sm={6}>
                                                <Spring
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 1600 }}
                                                >
                                                    {(props) => (
                                                        <div className="raise-warpper">
                                                            <h5 style={props}>前端技能</h5>
                                                        </div>
                                                    )}
                                                </Spring>
                                                <Trail
                                                    items={this.skill[1]}
                                                    keys={(item) => item}
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ duration: 2000, delay: 800, easing: easing.easeCubicInOut }}
                                                >
                                                    {(item) => (props) => (
                                                        <div className="raise-warpper">
                                                            <p style={props}>{item}</p>
                                                        </div>
                                                    )}
                                                </Trail>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <Spring
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 1600 }}
                                                >
                                                    {(props) => (
                                                        <div className="raise-warpper">
                                                            <h5 style={props}>後端技能</h5>
                                                        </div>
                                                    )}
                                                </Spring>

                                                <Trail
                                                    items={this.skill[2]}
                                                    keys={(item) => item}
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ duration: 2000, delay: 800, easing: easing.easeCubicInOut }}
                                                >
                                                    {(item) => (props) => (
                                                        <div className="raise-warpper">
                                                            <p style={props}>{item}</p>
                                                        </div>
                                                    )}
                                                </Trail>
                                            </Col>
                                            <Col sm={6}>
                                                <Spring
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 1600 }}
                                                >
                                                    {(props) => (
                                                        <div className="raise-warpper">
                                                            <h5 style={props}>程式語言技能</h5>
                                                        </div>
                                                    )}
                                                </Spring>
                                                <Trail
                                                    items={this.skill[3]}
                                                    keys={(item) => item}
                                                    from={{ top: 72 }}
                                                    to={{ top: page === "service" ? 0 : 72 }}
                                                    config={{ duration: 2000, delay: 800, easing: easing.easeCubicInOut }}
                                                >
                                                    {(item) => (props) => (
                                                        <div className="raise-warpper">
                                                            <p style={props}>{item}</p>
                                                        </div>
                                                    )}
                                                </Trail>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        )}
                    </Spring>
                )}
            </Spring>
        );
    }
}
