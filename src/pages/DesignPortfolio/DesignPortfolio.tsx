import React from "react";
import "./DesignPortfolio.less";
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
    watchingWork_opened: boolean;
    image: number;
}

export default class DesignPortfolio extends React.Component<Props, State> {
    rightcol: HTMLDivElement | null = null;
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            watchingWork_opened: false,
            watchingWork: undefined,
            workWindowZindex: -1,
            image: 0,
        };
    }

    pageCode = 3;

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

    toggle_watch_work = (work: WorkData | undefined) => {
        if (work) this.setState({ watchingWork_opened: true, watchingWork: work, workWindowZindex: 50, image: 0 });
        else {
            this.setState({ watchingWork_opened: false });
            setTimeout(() => this.setState({ workWindowZindex: -1, watchingWork: undefined }), 600);
        }
    };

    componentWillReceiveProps = (nextProps: Props) => {
        if (nextProps.page !== this.pageCode) {
            this.setState({ watchingWork_opened: false });
            setTimeout(() => this.setState({ workWindowZindex: -1, watchingWork: undefined }), 600);
        }
    };

    render() {
        const page = this.props.page;
        return (
            <div
                className="design-portfolio-main"
                style={{
                    zIndex: page === this.pageCode ? 40 : -1,
                }}
            >
                <Row>
                    <Col lg={6} style={{ height: "80vh", paddingLeft: "10%" }}>
                        <div className="des">
                            <Raising active={page === this.pageCode} delay={page === this.pageCode ? 1200 : 450}>
                                <h1 className="highlight1">設計作品</h1>
                            </Raising>
                            <Raising active={page === this.pageCode} height={108} delay={page === this.pageCode ? 1350 : 300}>
                                <p>為您精選四個過去的設計專案</p>
                                <p>點擊作品可以查看更詳細的內容哦！</p>
                            </Raising>
                            <Raising active={page === this.pageCode} delay={page === this.pageCode ? 1500 : 150}>
                                <p style={{ color: "gray" }}>
                                    想看更多？歡迎查看我的 <a href="https://www.behance.net/yuanlinlin">Behence</a> 帳號
                                </p>
                            </Raising>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row style={{ marginRight: 128, height: "80vh" }}>
                            <Trail
                                items={works.filter((w) => w.type === "design")}
                                from={{ width: "0%", opacity: 0 }}
                                keys={(item) => item.id}
                                to={{
                                    width: page === this.pageCode ? "100%" : "0%",
                                    opacity: page === this.pageCode ? 1 : 0,
                                }}
                                config={{ delay: page === this.pageCode ? 1200 : 0 }}
                            >
                                {(item) => (props) => (
                                    <Col lg={6}>
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
                                                    <img
                                                        alt="Loading ..."
                                                        className="workblock-inner"
                                                        src={item.cover_image_url}
                                                        onClick={() => this.toggle_watch_work(item)}
                                                    />
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
                                        <Raising active={this.state.watchingWork_opened} delay={this.state.watchingWork_opened ? 150 : 600}>
                                            <h3>{this.state.watchingWork?.h2}</h3>
                                        </Raising>
                                        <Raising active={this.state.watchingWork_opened} delay={this.state.watchingWork_opened ? 300 : 450}>
                                            <h1 className="highlight1">{this.state.watchingWork?.h1}</h1>
                                        </Raising>
                                        <Raising active={this.state.watchingWork_opened} delay={this.state.watchingWork_opened ? 450 : 300}>
                                            <p>{this.state.watchingWork?.p}</p>
                                        </Raising>
                                        <Raising active={this.state.watchingWork_opened} delay={this.state.watchingWork_opened ? 600 : 150}>
                                            {this.state.watchingWork?.tools.map((t) => (
                                                <p className="hashtag" style={{ display: "inline", marginRight: 16 }}>
                                                    #{t}
                                                </p>
                                            ))}
                                        </Raising>
                                    </div>
                                </Col>
                                {this.state.watchingWork ? (
                                    <Col lg={6} style={{ padding: 64 }}>
                                        <Raising
                                            height={720}
                                            active={this.state.watchingWork_opened}
                                            delay={this.state.watchingWork_opened ? 750 : 0}
                                        >
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
                                                                ((this.rightcol?.clientWidth ? this.rightcol?.clientWidth : 900) / 1920) *
                                                                1080
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
                                                            alt="Loading ..."
                                                        />
                                                        <button style={{ float: "left" }} onClick={() => this.chage_image(false)}>
                                                            上一張
                                                        </button>
                                                        <button style={{ float: "right" }} onClick={() => this.chage_image(true)}>
                                                            下一張
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </Raising>
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
