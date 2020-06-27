import React, { Component, Suspense } from "react";
import "./App.less";

import Topnav from "./components/Topnav/Topnav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ScrollIndicator from "./components/Desktop/ScrollIndicator/ScrollIndicator";

import ScrollIndicatorM from "./components/Mobile/ScrollIndicator/ScrollIndicator";

const Welcome = React.lazy(() => import("./pages/Desktop/Welcome/Welcome"));
const About = React.lazy(() => import("./pages/Desktop/About/About"));
const MyService = React.lazy(() => import("./pages/Desktop/MyService/MyService"));
const DesignPortfolio = React.lazy(() => import("./pages/Desktop/DesignPortfolio/DesignPortfolio"));
const DevPortfolio = React.lazy(() => import("./pages/Desktop/DevPortfolio/DevPortfolio"));
const Contact = React.lazy(() => import("./pages/Desktop/Contact/Contact"));

const WelcomeM = React.lazy(() => import("./pages/Mobile/Welcome/Welcome"));
const AboutM = React.lazy(() => import("./pages/Mobile/About/About"));
const MyServiceM = React.lazy(() => import("./pages/Mobile/MyService/MyService"));
const DesignPortfolioM = React.lazy(() => import("./pages/Mobile/DesignPortfolio/DesignPortfolio"));
const DevPortfolioM = React.lazy(() => import("./pages/Mobile/DevPortfolio/DevPortfolio"));
const ContactM = React.lazy(() => import("./pages/Mobile/Contact/Contact"));

interface State {
    page: number;
    timer: number;
    mobile: boolean;
}

class App extends Component<{}, State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            mobile: false,
            page: 0,
            timer: 0,
        };
    }

    /** Get current page by scrollY */
    locateSection = () => {
        var page_break_points = [0, 1, 1200, 2400, 3600, 4800, 6000];

        for (var i = 0; i < page_break_points.length; i++) {
            if (window.scrollY >= page_break_points[i] && window.scrollY < page_break_points[i + 1]) {
                this.setState({ page: i });
                return;
            }
        }
    };

    componentDidMount = () => {
        if (window.innerWidth <= window.innerHeight) this.setState({ mobile: true });

        // timer for animation
        setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);

        // scroll listener
        window.addEventListener("scroll", () => {
            this.locateSection();
        });

        // locate the section of begin
        this.locateSection();

        const ele = document.getElementById("ipl-progress-indicator");
        if (ele) {
            setTimeout(() => {
                ele.classList.add("available");
                setTimeout(() => {
                    ele.outerHTML = "";
                }, 2000);
            }, 500);
        }
    };

    render() {
        if (!this.state.mobile)
            return (
                <div className="main">
                    <Topnav />
                    <SocialLinks />
                    <ScrollIndicator page={this.state.page} timer={this.state.timer} />

                    <Suspense fallback={<div>Loading...</div>}>
                        <Welcome page={this.state.page} />
                        <About page={this.state.page} />
                        <MyService page={this.state.page} />
                        <DesignPortfolio page={this.state.page} />
                        <DevPortfolio page={this.state.page} />
                        <Contact page={this.state.page} />
                    </Suspense>
                </div>
            );
        else
            return (
                <div className="main">
                    <Topnav />
                    <ScrollIndicatorM mobile={this.state.mobile} page={this.state.page} timer={this.state.timer} />

                    <Suspense fallback={<div>Loading...</div>}>
                        <WelcomeM page={this.state.page} />
                        <AboutM page={this.state.page} />
                        <MyServiceM page={this.state.page} />
                        <DesignPortfolioM page={this.state.page} />
                        <DevPortfolioM page={this.state.page} />
                        <ContactM page={this.state.page} />
                    </Suspense>
                </div>
            );
    }
}

export default App;
