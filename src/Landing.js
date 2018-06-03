import React, {Component} from 'react';
import "./Landing.css";
import TextPage from "./TextPage";
import {
    introTitle, introText, textLevel1, posTextLevel1, negTextLevel1, textLevel2, posTextLevel2,
    negTextLevel2, textLevel2Neutral, textLevel1Neutral, textLevel3Neg, textLevel3Pos, posTextLevel3, negTextLevel3
} from "./Text";

export default class LandingPage extends Component {

    setCurrentComponentIndex(newIndex) {
        this.setState({currentComponentIndex: newIndex});
    }

    constructor(props) {
        super(props);
        this.state = {
            componentInfo: {},
            currentComponentIndex: 0
        };

        this.state.componentInfo[0] = {
            index: 0,
            posMessage: "Tell me more",
            negMessage: "I don't think so",
            title: introTitle,
            content: introText
        };

        this.state.componentInfo[1] = {
            index: 1,
            posMessage: "This isn't news to me",
            negMessage: "This is really bad",
            title: textLevel1Neutral,
            content: posTextLevel1,
        };

        this.state.componentInfo[2] = {
            index: 2,
            posMessage: "This is concerning",
            negMessage: "Why should we care?",
            title: textLevel1Neutral,
            content: negTextLevel1,
        };

        this.state.componentInfo[3] = {
            index: 3,
            posMessage: "This is concerning",
            negMessage: "Why should we care?",
            title: textLevel2Neutral,
            content: posTextLevel2,
        };

        this.state.componentInfo[4] = {
            index: 4,
            posMessage: "This is concerning",
            negMessage: "Why should we care?",
            title: textLevel2Neutral,
            content: negTextLevel2,
        };

        this.initStateComponents(3);

        this.state.componentInfo[7] = {
            index: 7,
            posMessage: "Tell me more...",
            negMessage: "Tell me more...",
            title: textLevel3Pos,
            content: posTextLevel3,
        };

        this.state.componentInfo[8] = {
            index: 8,
            posMessage: "Tell me more...",
            negMessage: "Tell me more...",
            title: textLevel3Neg,
            content: negTextLevel3,
        };

        this.initStateComponents(7);
    }

    initStateComponents(startingIndex) {
        for(let i = startingIndex; i < 2*startingIndex; i+=2) {
            this.state.componentInfo[i] = this.state.componentInfo[startingIndex];
            this.state.componentInfo[i+1] = this.state.componentInfo[startingIndex+1];
        }
    }


    render() {
        let currentComponentInfo = this.state.componentInfo[this.state.currentComponentIndex];
        let renderedComponent = (<TextPage {...currentComponentInfo} onClick={this.setCurrentComponentIndex.bind(this)}/>);
        return (
            <React.Fragment>
                {renderedComponent}
            </React.Fragment>
        )
    }
}

