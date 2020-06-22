import React from "react";
import "./SocialLinks.less";

export default class SocialLinks extends React.Component {
    render() {
        return (
            <div className="social-link">
                <div className="icon">
                    <img src="assets/icons/instagram.svg" alt="instagram" />
                </div>
                <div className="icon">
                    <img src="assets/icons/facebook.svg" alt="facebook" />
                </div>
                <div className="icon">
                    <img src="assets/icons/github.svg" alt="github" />
                </div>
                <div className="icon">
                    <img src="assets/icons/behance.svg" alt="behance" />
                </div>
            </div>
        );
    }
}
