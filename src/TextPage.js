import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import "./TextPage.css";
import {Button} from "primereact/components/button/Button";
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';

export default class TextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtons: false
        };

        this.initSentences(this.props.content);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.title !== nextProps.title) {
            this.initSentences(nextProps.content);
            this.setState({showButtons: false});
        }
    }


    initSentences(content) {
        this.state = {
            showButtons: false,
        };
        // splitting on text
        let text = content;
        text = text.split(" ");
        text[text.length - 1] = text[text.length - 1].trim();

        this.renderArr = [];
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
            <Typing key={content} speed={25} onFinishedTyping={() => this.setState({showButtons: true})}>
                {this.renderArr}
            </Typing>
        )
    }

    componentDidMount() {
        this.initSentences(this.props.content);
        this.setState(this.state);
    }

    nextComponent(left) {
        if (left) {
            this.props.onClick(this.props.leftIndex);
        } else {
            this.props.onClick(this.props.rightIndex);
        }
    }

    /**
     * work with assumption have props with text
     */

    render() {
        return (
            <React.Fragment>
                <div className="title-bar">
                    <div className="title">
                        <h1>{this.props.title} </h1>
                    </div>
                </div>
                <div className="text-page">
                    <div className="text-content">
                        {this.toBeRendered}
                    </div>
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