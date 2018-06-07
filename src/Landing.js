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
        let newPath = this.state.path.slice();
        newPath.push(newIndex);
        this.setState({currentComponentIndex: newIndex, path: newPath});
    }

    goBack() {
        let newPath = this.state.path.slice();
        if(!newPath || newPath.length < 2) {
            return;
        }
        // removing the current one we are on
        newPath.pop();
        let back = newPath.pop();
        this.setCurrentComponentIndex(back);
    }

    constructor(props) {
        super(props);
        this.state = {
            componentInfo: {},
            currentComponentIndex: 0,
            path: [0],
        };
        this.state.componentInfo = textsObj;
    }

    render() {
        let currentComponentInfo = this.state.componentInfo[this.state.currentComponentIndex];
        // adding key to make rerender each time
        let renderedComponent = (<TextPage key={currentComponentInfo.content}{...currentComponentInfo}
                                           setCurIndex={this.setCurrentComponentIndex.bind(this)}
                                            goBack={this.goBack.bind(this)}/>);
        return (
            <React.Fragment>
                {renderedComponent}
            </React.Fragment>
        )
    }
}

