import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import "./TextPage.css";
import {Button} from "primereact/components/button/Button";
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import {Sidebar} from "primereact/components/sidebar/Sidebar";
import {Slider} from "primereact/components/slider/Slider";

export default class TextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtons: false,
            speed: 1,
            menuVisible: false,
            toggle: true,
            spacePressed: false,
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
            <Typing key={this.renderArr} speed={this.state.speed}
                    onFinishedTyping={() => this.setState({showButtons: true})}>
                {this.renderArr}
            </Typing>
        );
    }

    changeSpeed(newSpeed) {
        this.setState({speed: newSpeed});
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 32) {
                this.setState({showButtons: true, spacePressed: true});
            }
            if (e.keyCode === 8) {
                this.props.goBack();
            }
        });
        this.initSentences(this.props.content);
        this.setState(this.state);
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
        return (
            <React.Fragment>
                <Sidebar visible={this.state.menuVisible} position="right" baseZIndex={1000000}
                         onHide={() => this.setState({menuVisible: false})}>
                    <h1 style={{fontWeight: 'normal'}}>Options</h1>
                    <br/>
                    <h2 style={{fontWeight: 'normal'}}>Text Speed</h2>
                    <Slider style={{width: '200px'}} value={this.state.speed} max={50} onChange={(e) => {
                        that.changeSpeed(e.value);
                        if (!this.state.showButtons) {
                            if (this.toggle === true) {
                                that.initSentences(this.props.content + " ");
                            } else {
                                that.initSentences(this.props.content);
                            }
                            this.toggle = !this.toggle;
                            that.setState(that.state);
                        }
                    }} animate={true}/>
                    <br/>

                    <Button type="button" onClick={() => this.skipText()} label="Skip"
                            className="ui-button-success"/>
                    <Button type="button" onClick={() => this.props.goBack()} label="Back"
                            className="ui-button-success"/>
                    <Button type="button" onClick={() => this.setState({menuVisible: false})} label="Close"
                            className="ui-button-secondary"/>
                </Sidebar>

                <div className="title-bar">
                    <div className="title">
                        <h1>{this.props.title} </h1>
                    </div>
                    <Button id="menu" icon="fa-bars" onClick={() => this.setState({menuVisible: true})}/>
                </div>
                <div className="text-page">
                    {
                        !this.state.spacePressed ?
                            <div className="text-content">
                                {this.toBeRendered}
                            </div> :
                            <div className="text-content">
                                {this.pureText}
                            </div>
                    }

                    <div className="text-button">
                        {
                            this.state.showButtons &&
                            <div className="button-container">
                                <Button onClick={() => this.nextComponent(true)}
                                        label={this.props.posChoice} className={"ui-button-success"}/>
                                <Button onClick={() => this.nextComponent(false)}
                                        label={this.props.negChoice} className={"ui-button-danger"}/>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}