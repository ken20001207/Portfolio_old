import React from "react";
import "./Portfolio.less";
import { Trail, Spring } from "react-spring/renderprops";
import { Row, Col } from "react-grid-system";
import { easeCubicInOut } from "d3-ease";
import { setTimeout } from "timers";

interface Props {
    page: number;
}

interface Work {
    type: string;
    title: string;
}

interface State {
    watchingWork: Work | undefined;
    workWindowZindex: number;
}

export default class Portfolio extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingWork: undefined,
            workWindowZindex: -1,
        };
    }

    pageCode = 3;
    works: Work[] = [
        { type: "平面設計", title: "活動主視覺" },
        { type: "影音剪輯", title: "After Movie" },
        { type: "介面設計", title: "UI Redesign" },
        { type: "桌面應用程式", title: "數據可視化工具" },
        { type: "客製化系統", title: "API 介接" },
        { type: "跨平台軟體", title: "行事曆系統" },
        { type: "電子商務系統", title: "Vue Shop" },
        { type: "系統後台", title: "App 管理員後台" },
    ];

    toggle_watch_work = (work: Work | undefined) => {
        if (work) this.setState({ watchingWork: work, workWindowZindex: 50 });
        else {
            this.setState({ watchingWork: undefined });
            setTimeout(() => this.setState({ workWindowZindex: -1 }), 1000);
        }
    };

    render() {
        const page = this.props.page;
        return (
            <div className="portfolio-main">
                <Row style={{ marginRight: 128 }}>
                    <Trail
                        items={this.works}
                        from={{ width: "0%", opacity: 0 }}
                        keys={(item) => item.title}
                        to={{
                            width: page === this.pageCode ? "100%" : "0%",
                            opacity: page === this.pageCode ? 1 : 0,
                        }}
                        config={{ delay: page === this.pageCode ? 1200 : 0 }}
                    >
                        {(item) => (props) => (
                            <Col lg={3}>
                                <Spring
                                    from={{ transform: "scale(1)" }}
                                    to={{
                                        transform: this.state.watchingWork === item ? "scale(10)" : "scale(1)",
                                    }}
                                    config={{ easing: easeCubicInOut }}
                                >
                                    {(scaleProp) => (
                                        <div
                                            className="workblock-inner"
                                            style={{ ...props, transform: scaleProp.transform }}
                                            onClick={() => this.toggle_watch_work(item)}
                                        >
                                            <h4>{item.type}</h4>
                                            <h1>{item.title}</h1>
                                        </div>
                                    )}
                                </Spring>
                            </Col>
                        )}
                    </Trail>
                </Row>
                <Spring from={{ opacity: 0 }} to={{ opacity: this.state.watchingWork ? 1 : -1 }}>
                    {(props) => (
                        <div className="work-detail" style={{ ...props, zIndex: this.state.workWindowZindex }}>
                            <i className="gg-close" onClick={() => this.toggle_watch_work(undefined)} />
                        </div>
                    )}
                </Spring>
            </div>
        );
    }
}
