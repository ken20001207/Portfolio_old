import React from "react";
import "./Portfolio.less";
import { Trail } from "react-spring/renderprops";
import { Row, Col } from "react-grid-system";

interface Props {
    page: number;
}

interface Work {
    type: string;
    title: string;
}

export default class Portfolio extends React.Component<Props> {
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
    render() {
        const page = this.props.page;
        return (
            <div className="portfolio-main">
                <Row style={{ marginRight: 128 }}>
                    <Trail
                        items={this.works}
                        from={{ width: "0%", opacity: 0 }}
                        to={{ width: page === this.pageCode ? "100%" : "0%", opacity: page === this.pageCode ? 1 : 0 }}
                        config={{ delay: 800 }}
                    >
                        {(item) => (props) => (
                            <Col lg={3}>
                                <div className="workblock-inner" style={props}>
                                    <h4>{item.type}</h4>
                                    <h1>{item.title}</h1>
                                </div>
                            </Col>
                        )}
                    </Trail>
                </Row>
            </div>
        );
    }
}
