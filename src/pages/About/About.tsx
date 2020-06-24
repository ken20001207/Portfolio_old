import React from "react";
import { Spring, Trail } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./About.less";

interface Props {
    page: number;
}

export default class About extends React.Component<Props> {
    pageCode = 1;
    about = [
        { key: 0, item: <h4>台灣桃園人</h4> },
        {
            key: 1,
            item: (
                <h4>
                    目前在
                    <div className="highlight-text">
                        <div className="text-bg" /> 浙江大學
                    </div>
                    主修
                    <div className="highlight-text">
                        <div className="text-bg" /> 資訊工程
                    </div>
                </h4>
            ),
        },
        {
            key: 2,
            item: (
                <h4>
                    擁有一年的
                    <div className="highlight-text">
                        <div className="text-bg" /> React 前端開發
                    </div>
                    實務經驗
                </h4>
            ),
        },
    ];
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ width: "0%" }}
                to={{ width: page === this.pageCode ? "45%" : "0%" }}
                config={{ easing: easing.easeCubicInOut, delay: page === this.pageCode ? 600 : 450 }}
            >
                {(bgWidthProps) => (
                    <div className="intro" style={bgWidthProps}>
                        <div className="about">
                            <Spring
                                from={{ top: 72 }}
                                to={{ top: page === this.pageCode ? 0 : 72 }}
                                config={{
                                    easing: easing.easeCubicInOut,
                                    duration: 800,
                                    delay: page === this.pageCode ? 600 : 300,
                                }}
                            >
                                {(props) => (
                                    <div className="raise-warpper">
                                        <h3 style={props}>關於我</h3>
                                    </div>
                                )}
                            </Spring>
                            <Trail
                                items={this.about}
                                keys={(item) => item.key}
                                from={{ top: 72 }}
                                to={{ top: page === this.pageCode ? 0 : 72 }}
                                config={{ easing: easing.easeCubicInOut, delay: page === this.pageCode ? 1200 : 0 }}
                            >
                                {(item) => (props) => (
                                    <div className="raise-warpper">
                                        <p className="listitem" style={props}>
                                            {item.item}
                                        </p>
                                    </div>
                                )}
                            </Trail>
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}
