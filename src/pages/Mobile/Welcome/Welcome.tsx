import React from "react";
import { Spring } from "react-spring/renderprops";
import * as easing from "d3-ease";

import "./Welcome.less";
import Raising from "../../../components/Raising/Raising";

interface Props {
    page: number;
}

export default class Welcome extends React.Component<Props> {
    render() {
        var page = this.props.page;
        return (
            <Spring
                from={{ top: "35vh" }}
                to={{ top: page === 0 ? "35vh" : "15vh" }}
                config={{ easing: easing.easeCubicInOut, delay: page === 0 ? 600 : 0 }}
            >
                {(titleProps) => (
                    <div className="title" style={titleProps}>
                        <Raising active={page === 0 || page === 1} height={72} delay={page === 0 || page === 1 ? 600 : 150}>
                            <h1>你好</h1>
                        </Raising>
                        <Raising active={page === 0 || page === 1} height={48} delay={page === 0 || page === 1 ? 750 : 0}>
                            <h2 style={{ display: "inline" }}>我是</h2>
                            <h2 className="highlight1">林沅霖</h2>
                        </Raising>
                    </div>
                )}
            </Spring>
        );
    }
}
