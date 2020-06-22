import React from "react";
import { Spring } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./ScrollIndicator.less";

interface Props {
    page: string;
    timer: number;
}

export default class ScrollIndicator extends React.Component<Props> {
    getColor = (page: string) => {
        if (page === "welcome" || page === "service") return "black";
        else return "white";
    };

    render() {
        var page = this.props.page;
        var timer = this.props.timer;

        return (
            <Spring
                from={{ color: "black", width: "90%" }}
                to={{ color: this.getColor(page), width: page === "welcome" ? "90%" : "5%" }}
                config={{ easing: easing.easeCubicInOut, duration: 1000 }}
            >
                {(colorProps) => (
                    <Spring
                        from={{ bottom: 24 }}
                        to={{ bottom: (timer % 2) * 16 + 24 }}
                        config={{ easing: easing.easeCubicInOut, duration: 1000 }}
                    >
                        {(floatprops) => (
                            <div
                                className="scroll-down-button"
                                style={{
                                    bottom: floatprops.bottom,
                                    color: colorProps.color,
                                    width: colorProps.width,
                                }}
                            >
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
        );
    }
}
