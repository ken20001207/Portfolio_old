import React from "react";
import { Spring } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./About.less";

interface Props {
    page: string;
}

export default class About extends React.Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ width: "0%" }}
                to={{ width: page === "about" ? "45%" : "0%" }}
                config={{ easing: easing.easeCubicInOut, delay: 150, duration: 1200 }}
            >
                {(bgWidthProps) => (
                    <div className="intro" style={bgWidthProps}>
                        <div className="about">
                            <Spring
                                from={{ top: 72 }}
                                to={{ top: page === "about" ? 0 : 72 }}
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
                                to={{ top: page === "about" ? 0 : 72 }}
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
                                to={{ top: page === "about" ? 0 : 72 }}
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
                                to={{ top: page === "about" ? 0 : 72 }}
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
        );
    }
}
