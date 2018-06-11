import React, {Component} from 'react';
import "./TitlePage.css";
import {withRouter} from "react-router-dom";
import {Button} from "primereact/components/button/Button";

class WorksCited extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>
                <div className="title-page">
                    <div className="title-bar">
                        <div className="title" aria-label="Conclusion">
                            <h1 aria-hidden={true}> Works Cited </h1>
                        </div>
                    </div>
                    <div className="title-content">
                        <ul>
                            <li>
                                Allcott, Hunt, and Matthew Gentzkow. “Social Media and Fake News in The 2016 Election.” Journal of Economic Perspectives 31. 2017: 211–236. Print. doi:10.1257/jep.31.2.211.
                            </li>
                            <br/>
                            <li>
                                Chou, Hui-Tzu Grace, and Nicholas Edge. “They Are Happier and Having Better Lives than I Am: The Impact of Using Facebook on Perceptions of Others' Lives.” Cyberpsychology, Behavior, and Social Networking, vol 15, no. 2, Mary Ann Liebert, Inc, 2012, pp. 117-121. Accessed 14 May 2018. doi: 10.1089/cyber.2011.0324.
                            </li>
                            <br/>
                            <li>
                                Reynolds, Sophie. “100 Followers but 0 Friends.” The Triton. The Triton, 4 May. 2017. Web. 8 Jun. 2018.
                            </li>
                            <br/>
                            <li>
                                Rosen, Larry D. “The distracted student mind – enhancing its focus and attention.” Phi Delta Kappan 99. (2017): 8-14. Print
                            </li>
                            <br/>
                            <li>
                                Pew Research Center. “Mobile Fact Sheet”. Fact sheet. Pew Research Center. 5 Feb 2018. 10 Jun 2018.  http://www.pewinternet.org/fact-sheet/mobile/#
                            </li>
                            <br/>
                            <div className="button-container">
                            <Button id="begin" onClick={() => this.props.history.push('/')}
                                    label="Back to the beginning" className={"ui-button-success"}/>
                            </div>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(WorksCited);