import React, { Component } from "react";
import "./App.less";

import Topnav from "./components/Topnav/Topnav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import MyService from "./pages/MyService/MyService";
import DesignPortfolio from "./pages/DesignPortfolio/DesignPortfolio";
import DevPortfolio from "./pages/DevPortfolio/DevPortfolio";

interface State {
    page: number;
    timer: number;
}

class App extends Component<{}, State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            page: 0,
            timer: 0,
        };
    }

    /** Get current page by scrollY */
    locateSection = () => {
        const page_break_points = [0, 1200, 2400, 3600, 4800, 6000];
        for (var i = 0; i < page_break_points.length; i++) {
            if (window.scrollY >= page_break_points[i] && window.scrollY < page_break_points[i + 1]) {
                this.setState({ page: i });
                return;
            }
        }
    };

    componentDidMount = () => {
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
        return (
            <div className="main">
                <Topnav />
                <SocialLinks />
                <ScrollIndicator page={this.state.page} timer={this.state.timer} />
                <Welcome page={this.state.page} />
                <About page={this.state.page} />
                <MyService page={this.state.page} />
                <DesignPortfolio page={this.state.page} />
                <DevPortfolio page={this.state.page} />
            </div>
        );
    }
}

export default App;
