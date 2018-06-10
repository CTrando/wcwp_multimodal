import React, {Component} from 'react';
import "./Landing.css";
import TextPage from "./TextPage";
import {
    introTitle, introText, textLevel1, posTextLevel1, negTextLevel1, textLevel2, posTextLevel2,
    negTextLevel2, textLevel2Neutral, textLevel1Neutral, textLevel3Neg, textLevel3Pos, posTextLevel3, negTextLevel3,
    textsObj
} from "./Text";

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import {TitlePage} from "./TitlePage";

export default class LandingPage extends Component {

    setCurrentComponentIndex(newIndex) {
        let newPath = this.state.path.slice();
        newPath.push(newIndex);
        this.setState({currentComponentIndex: newIndex, path: newPath});
    }

    goBack() {
        let newPath = this.state.path.slice();
        if (!newPath || newPath.length < 2) {
            return;
        }
        // removing the current one we are on
        newPath.pop();
        let back = newPath.pop();
        this.setState({path: newPath}, this.setCurrentComponentIndex.bind(this, back));
    }

    constructor(props) {
        super(props);
        this.state = {
            componentInfo: {},
            currentComponentIndex: 0,
            path: [0],
            speed: 1,
            routes: []
        };
        this.state.componentInfo = textsObj;
    }

    handler(e) {
        if (e.keyCode === 32) {
            this.setState({showButtons: true, spacePressed: true});
        }
        if (e.keyCode === 8) {
            this.goBack();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handler.bind(this));
        let that = this;
        let routes = Object.values(this.state.componentInfo).map((component) => {
            let currentTextComp = () =>
                <TextPage
                    key={component.content}{...component}
                          setCurIndex={that.setCurrentComponentIndex.bind(that)}
                          goBack={that.goBack.bind(that)}
                          speed={that.state.speed}
                          changeSpeed={that.changeSpeed.bind(this)}
                />;
            return <Route key={component.index} path={`${process.env.PUBLIC_URL}/${component.index}`}
                          component={currentTextComp}
            />
        });
        this.setState({routes: routes});
    }


    changeSpeed(newSpeed) {
        this.setState({speed: newSpeed});
    }

    render() {
        let currentComponentInfo = this.state.componentInfo[this.state.currentComponentIndex];
        // adding key to make rerender each time
        let renderedComponent = (<TextPage key={currentComponentInfo.content}{...currentComponentInfo}
                                           setCurIndex={this.setCurrentComponentIndex.bind(this)}
                                           goBack={this.goBack.bind(this)}
                                           speed={this.state.speed}
                                           changeSpeed={this.changeSpeed.bind(this)}
        />);
        return (
            <Router>
                <div>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={TitlePage} />
                    {this.state.routes}
                </div>
            </Router>
        )
    }
}

