import React, {Component} from 'react';
import "./TitlePage.css";
import {Button} from "primereact/components/button/Button";
import {Redirect, withRouter} from "react-router-dom";

class TitlePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-page">
                    <div className="title-bar">
                        <div className="title" aria-label={this.props.title}>
                            <h1 aria-hidden={true}> Introduction </h1>
                        </div>
                    </div>
                    <div className="title-content">
                        Hello, it's good to see you!
                        <br/>
                        <br/>
                        This is a web app designed to teach you about the downsides and detrimental effects technology
                        has
                        on society today.
                        <br/>
                        <br/>
                        The way this app works is I'll educate you on scientific literature and how our phones influence
                        us,
                        and you can choose to agree or disagree with me.
                        <br/>
                        <br/>
                        Don't worry about disagreeing, it's my job to convince you!
                        <br/>
                        <br/>
                        Based on whether you agree or not, I'll tell you more information or move to other topics, so
                        it's
                        like
                        a real conversation.
                        <br/>
                        <br/>
                        To move forward in the conversation, hit the buttons at the bottom of the screen. To go back,
                        please use your browser's
                        back button.
                        <br/>
                        <br/>
                        With that out of the way, let's begin!
                        <br/>
                        <br/>
                        Click the button below to start!
                        <div className="button-container">
                            <Button id="begin" onClick={() => this.props.history.push('/0')}
                                    label="Begin!" style={{width: ' 200px'}} className={"ui-button-success"}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(TitlePage);