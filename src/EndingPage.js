import React, {Component} from 'react';
import "./TitlePage.css";
import {withRouter} from "react-router-dom";
import {Button} from "primereact/components/button/Button";

class EndingPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-page">
                    <div className="title-bar">
                        <div className="title" aria-label="Conclusion">
                            <h1 aria-hidden={true}> Conclusion </h1>
                        </div>
                    </div>
                    <div className="title-content">
                        So that’s that.
                        <br/>
                        <br/>
                        Social media and phones are making the average American unhappier, worse at focusing, and less educated.
                        <br/>
                        <br/>
                        Phones directly impact Americans’ decisions, and can cause shockwaves so strong they can affect our world leaders and our futures.
                        <br/>
                        <br/>
                        Make no mistake: the things I talked about (unhappiness, addiction, intelligence) are real, and they are happening
                        throughout the United States, perhaps even the world.
                        <br/>
                        <br/>
                        Phones and social media are dangerous, and society needs to understand just how dependent it is on these parasites.
                        <br/>
                        <br/>
                        Phones and social media are dangerous, and society needs to understand just how dependent it is on these parasites.
                        Even if you agreed with none of my words, please take away this.
                        <br/>
                        <br/>
                        Be aware of how many times you check your phone.
                        <br/>
                        <br/>
                        Be aware of how many times you stop to check social media.
                        <br/>
                        <br/>
                        Be aware of what is true and what is false.
                        <br/>
                        <br/>
                        Thank you for reading.
                        <div className="button-container">
                            <Button id="begin" onClick={() => this.props.history.push('/works_cited')}
                                    label="Works Cited" className={"ui-button-success"}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(EndingPage);