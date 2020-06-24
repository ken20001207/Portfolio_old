import React, { Component } from "react";
import "./App.less";

import Topnav from "./components/Topnav/Topnav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import MyService from "./pages/MyService/MyService";
import Portfolio from "./pages/Portfolio/Portfolio";

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
        // welcome
        if (window.scrollY === 0) this.setState({ page: 0 });
        // about
        else if (window.scrollY >= 0 && window.scrollY < 1200) this.setState({ page: 1 });
        // service
        else if (window.scrollY >= 1200 && window.scrollY < 2400) this.setState({ page: 2 });
        // portfolio
        else if (window.scrollY >= 2400 && window.scrollY < 3600) this.setState({ page: 3 });
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
                <Portfolio page={this.state.page} />
            </div>
        );
    }
}

export default App;
