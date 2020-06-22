import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./App.less";
import { Row, Col } from "rsuite";
import * as easing from "d3-ease";

interface State {
    page: "welcome" | "about";
    timer: number;
}

class App extends Component<{}, State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            page: "welcome",
            timer: 0,
        };
    }

    /** Get current page by scrollY */
    locateSection = () => {
        if (window.scrollY === 0) this.setState({ page: "welcome" });
        else if (window.scrollY >= 0) this.setState({ page: "about" });
    };

    componentDidMount = () => {
        // timer for animation
        setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);

        // scroll listener
        window.addEventListener("scroll", () => {
            this.locateSection();
        });

        // locate the section of begin
        this.locateSection();

        const ele = document.getElementById("ipl-progress-indicator");
        if (ele) {
            ele.classList.add("available");
            setTimeout(() => {
                ele.outerHTML = "";
            }, 2000);
        }
    };

    render() {
        return (
            <div className="main">
                <div className="topbar">
                    <Row>
                        <Col lg={4}>
                            <h5>Yuanlin Lin</h5>
                        </Col>
                        <Col lg={17}></Col>
                        <Col lg={1}>
                            <p>繁</p>
                        </Col>
                        <Col lg={1}>
                            <p>简</p>
                        </Col>
                        <Col lg={1}>
                            <p>Eng</p>
                        </Col>
                    </Row>
                </div>
                <div className="social-link">
                    <div className="icon">
                        <img src="assets/icons/instagram.svg" alt="instagram" />
                    </div>
                    <div className="icon">
                        <img src="assets/icons/facebook.svg" alt="facebook" />
                    </div>
                    <div className="icon">
                        <img src="assets/icons/github.svg" alt="github" />
                    </div>
                    <div className="icon">
                        <img src="assets/icons/behance.svg" alt="behance" />
                    </div>
                </div>

                <Spring
                    from={{ color: "black" }}
                    to={{ color: this.state.page === "welcome" ? "black" : "white" }}
                    config={{ easing: easing.easeCubicInOut, duration: 1000 }}
                >
                    {(colorProps) => (
                        <Spring
                            from={{ bottom: 0 }}
                            to={{ bottom: (this.state.timer % 2) * 16 }}
                            config={{ easing: easing.easeCubicInOut, duration: 1000 }}
                        >
                            {(floatprops) => (
                                <div className="scroll-down-button" style={{ bottom: floatprops.bottom, color: colorProps.color }}>
                                    <div className="scroll-down-button-inner">
                                        <div style={{ display: "inline-block" }}>
                                            <i className="gg-scroll-v" />
                                        </div>
                                        <p>更多</p>
                                    </div>
                                </div>
                            )}
                        </Spring>
                    )}
                </Spring>

                <Spring
                    from={{ left: "40%" }}
                    to={{ left: this.state.page === "welcome" ? "40%" : "65%" }}
                    config={{ easing: easing.easeCubicInOut }}
                >
                    {(titleProps) => (
                        <div className="title" style={titleProps}>
                            <Spring
                                from={{ top: 126 }}
                                to={{ top: 0 }}
                                config={{ easing: easing.easeCubicInOut, duration: 800, delay: 500 }}
                            >
                                {(props) => (
                                    <div className="raise-warpper">
                                        <h1 style={props}>你好</h1>
                                    </div>
                                )}
                            </Spring>
                            <Spring
                                from={{ top: 72 }}
                                to={{ top: 0 }}
                                config={{ easing: easing.easeCubicInOut, duration: 800, delay: 800 }}
                            >
                                {(props) => (
                                    <div className="raise-warpper">
                                        <h2 style={props}>
                                            我是
                                            <div className="highlight-text">
                                                <div className="text-bg" /> 林沅霖
                                            </div>
                                        </h2>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    )}
                </Spring>

                <Spring
                    from={{ width: "15%" }}
                    to={{ width: this.state.page === "about" ? "55%" : "15%" }}
                    config={{ easing: easing.easeCubicInOut, delay: 150, duration: 1200 }}
                >
                    {(bgWidthProps) => (
                        <div className="intro" style={bgWidthProps}>
                            <div className="about">
                                <Spring
                                    from={{ top: 72 }}
                                    to={{ top: this.state.page === "about" ? 0 : 72 }}
                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 450 }}
                                >
                                    {(props) => (
                                        <div className="raise-warpper">
                                            <h3 style={props}>關於我</h3>
                                        </div>
                                    )}
                                </Spring>
                                <Spring
                                    from={{ top: 72 }}
                                    to={{ top: this.state.page === "about" ? 0 : 72 }}
                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 750 }}
                                >
                                    {(props) => (
                                        <div className="raise-warpper">
                                            <h4 style={props}>台灣桃園人</h4>
                                        </div>
                                    )}
                                </Spring>
                                <Spring
                                    from={{ top: 72 }}
                                    to={{ top: this.state.page === "about" ? 0 : 72 }}
                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 1050 }}
                                >
                                    {(props) => (
                                        <div className="raise-warpper">
                                            <h4 style={props}>
                                                目前在
                                                <div className="highlight-text">
                                                    <div className="text-bg" /> 浙江大學
                                                </div>
                                                主修
                                                <div className="highlight-text">
                                                    <div className="text-bg" /> 資訊工程
                                                </div>
                                            </h4>
                                        </div>
                                    )}
                                </Spring>
                                <Spring
                                    from={{ top: 72 }}
                                    to={{ top: this.state.page === "about" ? 0 : 72 }}
                                    config={{ easing: easing.easeCubicInOut, duration: 800, delay: 1350 }}
                                >
                                    {(props) => (
                                        <div className="raise-warpper">
                                            <h4 style={props}>
                                                擁有一年的{" "}
                                                <div className="highlight-text">
                                                    <div className="text-bg" /> React 前端開發
                                                </div>
                                                實務經驗
                                            </h4>
                                        </div>
                                    )}
                                </Spring>
                            </div>
                        </div>
                    )}
                </Spring>
            </div>
        );
    }
}

export default App;
