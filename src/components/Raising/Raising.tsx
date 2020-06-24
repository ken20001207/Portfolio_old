import React from "react";
import * as easing from "d3-ease";
import { Spring } from "react-spring/renderprops";

import "./Raising.less";

interface Props {
    active: boolean;
    height?: number;
    delay?: number;
}

export default class Raising extends React.Component<Props> {
    static defaultProps = {
        height: 72,
        delay: 0,
    };

    render() {
        return (
            <Spring
                from={{ top: this.props.height }}
                to={{ top: this.props.active ? 0 : this.props.height }}
                config={{ easing: easing.easeCubicInOut, delay: this.props.delay }}
            >
                {(props) => (
                    <div className="raising-outer">
                        <div style={props} className="raising-inner">
                            {this.props.children}
                        </div>
                    </div>
                )}
            </Spring>
        );
    }
}
