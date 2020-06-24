import React from "react";
import { Spring } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./Welcome.less";

interface Props {
    page: number;
}

export default class Welcome extends React.Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <Spring from={{ left: "35%" }} to={{ left: page === 0 ? "35%" : "55%" }} config={{ easing: easing.easeCubicInOut }}>
                {(titleProps) => (
                    <div className="title" style={titleProps}>
                        <Spring
                            from={{ top: 130 }}
                            to={{ top: page === 0 || page === 1 ? 0 : 130 }}
                            config={{ easing: easing.easeCubicInOut, duration: 800, delay: 500 }}
                        >
                            {(props) => (
                                <div className="raise-warpper">
                                    <h1 style={props}>你好</h1>
                                </div>
                            )}
                        </Spring>
                        <Spring
                            from={{ top: 80 }}
                            to={{ top: page === 0 || page === 1 ? 0 : 130 }}
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
        );
    }
}
