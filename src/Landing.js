import React, {Component} from 'react';
import "./Landing.css";
import TextPage from "./TextPage";
import {
    introTitle, introText, textLevel1, posTextLevel1, negTextLevel1, textLevel2, posTextLevel2,
    negTextLevel2, textLevel2Neutral, textLevel1Neutral, textLevel3Neg, textLevel3Pos, posTextLevel3, negTextLevel3,
    textsObj
} from "./Text";

export default class LandingPage extends Component {

    setCurrentComponentIndex(newIndex) {
        this.setState({currentComponentIndex: newIndex});
    }

    constructor(props) {
        super(props);
        this.state = {
            componentInfo: {},
            currentComponentIndex: 0,
        };
        this.state.componentInfo = textsObj;
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

