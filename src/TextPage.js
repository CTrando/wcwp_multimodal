import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import "./TextPage.css";
import {Button} from "primereact/components/button/Button";
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import {Sidebar} from "primereact/components/sidebar/Sidebar";
import {Slider} from "primereact/components/slider/Slider";
import {Link, withRouter} from "react-router-dom";

class TextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtons: true,
            menuVisible: false,
            toggle: true,
            spacePressed: false,
            selectLeft: false,
            selectRight: false
        };

        this.initSentences(this.props.content);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.title !== nextProps.title) {
            this.initSentences(nextProps.content);
            this.setState({showButtons: false, spacePressed: false});
        }
    }


    initSentences(content) {
        this.setState({showButtons: false, spacePressed: false});
        // splitting on text
        let text = content;
        text = text.split(" ");
        text[text.length - 1] = text[text.length - 1].trim();

        this.renderArr = [];
        this.pureText = content.split(" ");
        this.pureText = this.pureText.map((t) => {
            if (t === "NEWLINE") {
                return (
                    <React.Fragment>
                        <br/><br/>
                    </React.Fragment>);
            } else {
                return (<span>{`${t} `}</span>)
            }
        });
        for (let i = 0; i < text.length; i++) {
            let t = text[i];

            if (t === "NEWLINE") {
                this.renderArr.push((<br/>));
                this.renderArr.push((<br/>));
            }
            else this.renderArr.push((<span key={i}>{`${t} `}</span>));

            if (t.endsWith("!")) {
                this.renderArr.push((
                    <Typing.Delay ms={500}/>
                ));
            }

            if (t.endsWith(".")) {
                this.renderArr.push((
                    <Typing.Delay ms={350}/>
                ));
            }

            if (t.endsWith(":")) {
                this.renderArr.push((
                    <Typing.Delay ms={350}/>
                ));
            }

            if (t.endsWith(",")) {
                this.renderArr.push((
                    <Typing.Delay ms={250}/>
                ));
            }
        }

        this.toBeRendered = (
            this.renderArr
        );
    }


    handler(e) {
        if (e.keyCode === 32) {
            this.setState({showButtons: true, spacePressed: true});
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('keydown', this.handler.bind(this));
        this.initSentences(this.props.content);
        this.setState(this.state);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handler.bind(this))
    }

    nextComponent(left) {
        if (left) {
            this.props.setCurIndex(this.props.leftIndex);
        } else {
            this.props.setCurIndex(this.props.rightIndex);
        }
    }

    skipText() {
        this.setState({showButtons: true, spacePressed: true});
    }

    /**
     * work with assumption have props with text
     */

    render() {
        let that = this;
        if (this.state.selectLeft) {
            this.props.history.push(`/${this.props.leftIndex}`);
        }
        if (this.state.selectRight) {
            this.props.history.push(`/${this.props.rightIndex}`);
        }

        return (
            <React.Fragment>
                <div className="title-bar">
                    <div className="title" aria-label={this.props.title}>
                        <h1 aria-hidden={true}>{this.props.title} </h1>
                    </div>
                </div>
                <div className="text-page" aria-label={this.pureText}>
                    {
                        !this.state.spacePressed ?
                            <div className="text-content" aria-hidden={true}>
                                {this.toBeRendered}
                            </div> :
                            <div className="text-content" aria-hidden={true}>
                                {this.pureText}
                            </div>
                    }

                    <div className="text-button">
                        {
                            this.state.showButtons &&
                            <div className="button-container">
                                <Button id="right" onClick={() => this.setState({selectRight: true})}
                                        label={this.props.negChoice} className={"ui-button-danger"}/>
                                <Button id="left" onClick={() => this.setState({selectLeft: true})}
                                        label={this.props.posChoice} className={"ui-button-success"}/>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(TextPage);