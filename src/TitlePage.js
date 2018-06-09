import React, {Component} from 'react';
import "./TitlePage.css";
import {Button} from "primereact/components/button/Button";
import {Redirect} from "react-router-dom";

export class TitlePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            start: false
        };
    }


    render() {
        if(this.state.start) {
            return <Redirect to="/0" />
        }
        return (
            <React.Fragment>
                <div className="title-page">
                    <div className="title-bar">
                        <div className="title" aria-label={this.props.title}>
                            <h1 aria-hidden={true}> Introduction </h1>
                        </div>

                        <Button id="menu" icon="fa-bars" onClick={() => this.setState({menuVisible: true})}/>
                    </div>
                    <div className="text-content">
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
                        Don't worry about disagreeing, it's natural!
                        <br/>
                        <br/>
                        Based on whether you agree or not, I'll tell you more information or move to other topics, so
                        it's
                        like
                        a real conversation.
                        <br/>
                        <br/>
                        With that out of the way, let's begin!
                        <br/>
                        <br/>
                        Click the button below to start!
                    </div>
                    <div className="button-container">
                        <Button onClick={() => this.setState({start: true})}
                                label="Begin!" style={{width: ' 200px'}} className={"ui-button-success"}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}