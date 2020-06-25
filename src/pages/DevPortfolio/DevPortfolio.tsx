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
    image: number;
}

export default class DevPortfolio extends React.Component<Props, State> {
    rightcol: HTMLDivElement | null = null;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            image: 0,
            watchingWork: undefined,
            workWindowZindex: -1,
        };
    }

    chage_image = (next: boolean) => {
        if (next) {
            if (this.state.image + 1 === this.state.watchingWork?.images.length) {
                this.setState({ image: 0 });
            } else this.setState({ image: this.state.image + 1 });
        } else {
            if (this.state.image === 0) {
                this.setState({ image: (this.state.watchingWork?.images.length ? this.state.watchingWork?.images.length : 1) - 1 });
            } else this.setState({ image: this.state.image - 1 });
        }
    };

    pageCode = 4;

    toggle_watch_work = (work: WorkData | undefined) => {
        if (work) this.setState({ watchingWork: work, workWindowZindex: 50, image: 0 });
        else {
            this.setState({ watchingWork: undefined });
            setTimeout(() => this.setState({ workWindowZindex: -1 }), 500);
        }
    };

    componentWillReceiveProps = (nextProps: Props) => {
        if (nextProps.page !== this.pageCode) {
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
                                <h1 className="highlight1">開發作品</h1>
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
                            <Row style={{ height: "80vh", width: "95%" }}>
                                <Col lg={6}>
                                    <div className="infos">
                                        <h3>{this.state.watchingWork?.h2}</h3>
                                        <h1 className="highlight1">{this.state.watchingWork?.h1}</h1>
                                        <p>{this.state.watchingWork?.p}</p>
                                        {this.state.watchingWork?.tools.map((t) => (
                                            <p className="hashtag" style={{ display: "inline", marginRight: 16 }}>
                                                #{t}
                                            </p>
                                        ))}
                                    </div>
                                </Col>
                                {this.state.watchingWork ? (
                                    <Col lg={6} style={{ padding: 64 }}>
                                        <div
                                            ref={(r) => {
                                                this.rightcol = r;
                                            }}
                                        >
                                            {this.state.watchingWork?.youtube_id ? (
                                                <>
                                                    <div style={{ display: "inline-block" }}>
                                                        <i className="gg-youtube" />
                                                    </div>
                                                    <h4 style={{ display: "inline-block", marginLeft: 18 }}>影音預覽</h4>
                                                    <iframe
                                                        title="work-preview"
                                                        width={this.rightcol?.clientWidth}
                                                        height={
                                                            ((this.rightcol?.clientWidth ? this.rightcol?.clientWidth : 900) / 1920) * 1080
                                                        }
                                                        src={
                                                            "https://www.youtube.com/embed/" +
                                                            this.state.watchingWork.youtube_id +
                                                            "?autoplay=1"
                                                        }
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <div style={{ display: "inline-block" }}>
                                                        <i className="gg-image" />
                                                    </div>
                                                    <h4 style={{ display: "inline-block", marginLeft: 18 }}>圖像預覽</h4>
                                                    <img
                                                        style={{ width: "100%" }}
                                                        src={this.state.watchingWork.images[this.state.image]}
                                                        alt="work-img"
                                                    />
                                                    {this.state.image > 0 ? (
                                                        <button style={{ float: "left" }} onClick={() => this.chage_image(false)}>
                                                            上一張
                                                        </button>
                                                    ) : (
                                                        <div />
                                                    )}
                                                    {this.state.image < this.state.watchingWork.images.length - 1 ? (
                                                        <button style={{ float: "right" }} onClick={() => this.chage_image(true)}>
                                                            下一張
                                                        </button>
                                                    ) : (
                                                        <div />
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </Col>
                                ) : (
                                    <div />
                                )}
                            </Row>
                        </div>
                    )}
                </Spring>
            </div>
        );
    }
}
