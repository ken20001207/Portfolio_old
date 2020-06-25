import React from "react";
import "./DevPortfolio.less";
import { Trail, Spring } from "react-spring/renderprops";
import { Row, Col } from "react-grid-system";
import { easeCubicInOut } from "d3-ease";
import { setTimeout } from "timers";
import { works, WorkData } from "../../works";
import Raising from "../../components/Raising/Raising";

interface Props {
    page: number;
}

interface State {
    watchingWork: WorkData | undefined;
    workWindowZindex: number;
}

export default class DevPortfolio extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingWork: undefined,
            workWindowZindex: -1,
        };
    }

    pageCode = 4;

    toggle_watch_work = (work: WorkData | undefined) => {
        if (work) this.setState({ watchingWork: work, workWindowZindex: 50 });
        else {
            this.setState({ watchingWork: undefined });
            setTimeout(() => this.setState({ workWindowZindex: -1 }), 500);
        }
    };

    render() {
        const page = this.props.page;
        return (
            <div
                className="dev-portfolio-main"
                style={{
                    zIndex: page === this.pageCode ? 40 : -1,
                }}
            >
                <Row>
                    <Col lg={4} style={{ height: "80vh", paddingLeft: "10%" }}>
                        <div className="des">
                            <Raising active={page === this.pageCode} delay={page === this.pageCode ? 600 : 450}>
                                <h1>開發作品</h1>
                            </Raising>
                            <Raising active={page === this.pageCode} height={108} delay={page === this.pageCode ? 750 : 300}>
                                <p>為您精選六個過去的開發專案</p>
                                <p>點擊作品可以查看更詳細的諮詢</p>
                            </Raising>
                            <Raising active={page === this.pageCode} delay={page === this.pageCode ? 900 : 150}>
                                <p style={{ color: "gray" }}>
                                    想看更多？歡迎查看我的 <a href="https://github.com/ken20001207">Github</a> 帳號
                                </p>
                            </Raising>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row style={{ marginRight: 128, height: "80vh" }}>
                            <Trail
                                items={works.filter((w) => w.type === "development")}
                                from={{ width: "0%", opacity: 0 }}
                                keys={(item) => item.id}
                                to={{
                                    width: page === this.pageCode ? "100%" : "0%",
                                    opacity: page === this.pageCode ? 1 : 0,
                                }}
                                config={{ delay: page === this.pageCode ? 1200 : 0 }}
                            >
                                {(item) => (props) => (
                                    <Col lg={4}>
                                        <Spring
                                            from={{ transform: "scale(1)" }}
                                            to={{
                                                transform: this.state.watchingWork === item ? "scale(10)" : "scale(1)",
                                            }}
                                            config={{ easing: easeCubicInOut }}
                                        >
                                            {(scaleProp) => (
                                                <div
                                                    className="workblock"
                                                    style={{
                                                        ...props,
                                                        transform: scaleProp.transform,
                                                    }}
                                                >
                                                    <div
                                                        className="workblock-inner"
                                                        style={{
                                                            backgroundImage: "url(" + item.cover_image_url + ")",
                                                        }}
                                                        onClick={() => this.toggle_watch_work(item)}
                                                    ></div>
                                                    <h4>{item.h2}</h4>
                                                    <h1>{item.h1}</h1>
                                                </div>
                                            )}
                                        </Spring>
                                    </Col>
                                )}
                            </Trail>
                        </Row>
                    </Col>
                </Row>

                <Spring from={{ opacity: 0 }} to={{ opacity: this.state.watchingWork ? 1 : -1 }}>
                    {(props) => (
                        <div className="work-detail" style={{ ...props, zIndex: this.state.workWindowZindex }}>
                            <i className="gg-arrow-left closebutton" onClick={() => this.toggle_watch_work(undefined)} />
                            <Row style={{ height: "80vh" }}>
                                <Col lg={6}></Col>
                                <Col lg={6} style={{ padding: 64 }}>
                                    {this.state.watchingWork ? (
                                        <iframe
                                            title="work-preview"
                                            className="imgur-embed-iframe-pub imgur-embed-iframe-pub-a-nZzgszQ-true-540"
                                            scrolling="no"
                                            src={
                                                "http://imgur.com/a/" +
                                                this.state.watchingWork?.imgur_album +
                                                "/embed?pub=true&amp;ref=http%3A%2F%2Flocalhost%3A3000%2F&amp;"
                                            }
                                            id={"imgur-embed-iframe-pub-a-" + this.state.watchingWork?.imgur_album}
                                            style={{ height: "calc(80vh - 128px)", width: "100% " }}
                                        />
                                    ) : (
                                        <div />
                                    )}
                                </Col>
                            </Row>
                        </div>
                    )}
                </Spring>
            </div>
        );
    }
}
