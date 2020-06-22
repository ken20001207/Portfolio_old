import React, { Component } from "react";
import "./App.less";

import Topnav from "./components/Topnav/Topnav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import MyService from "./pages/MyService/MyService";

interface State {
    page: "welcome" | "about" | "service";
    timer: number;
}

class App extends Component<{}, State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            page: "welcome",
            timer: 0,
        };
    }

    /** Get current page by scrollY */
    locateSection = () => {
        if (window.scrollY === 0) this.setState({ page: "welcome" });
        else if (window.scrollY >= 0 && window.scrollY < 400) this.setState({ page: "about" });
        else if (window.scrollY >= 400 && window.scrollY < 800) this.setState({ page: "service" });
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
            </div>
        );
    }
}

export default App;
