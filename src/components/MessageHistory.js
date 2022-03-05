import {Component} from "react";

export default class MessageHistory extends Component {
    constructor(props) {
        super(props);
    }

    renderMessages() {
        if (this.props.messages.length > 1) {
            let messagesList = [];
            let messageData;
            for (let message of this.props.messages) {
                if (message.type === "message") {
                    messageData =
                        <li className="clearfix" key={message.id}>
                            <div className="message-data align-right">
                                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                                <span className="message-data-name">{message.from.name}</span>
                                <i className="fa fa-circle me"/>
                            </div>
                            <div className="message other-message float-right">
                                {message.text}
                            </div>
                        </li>
                } else if (message.type === "response") {
                    messageData =
                        <li  key={message.id}>
                            <div className="message-data" key={message.id}>
                                <span className="message-data-name"><i className="fa fa-circle online"/>{message.from.name}</span>
                                <span className="message-data-time">{message.time}</span>
                            </div>
                            <div className="message my-message">
                                {message.text}
                            </div>
                        </li>
                } else if (message.type === "typing") {
                    messageData =
                        <div  key={message.id}>
                            <i className="fa fa-circle online"/>
                            <i className="fa fa-circle online"/>
                            <i className="fa fa-circle online"/>
                        </div>;
                } else {
                    messageData = <></>
                }
                messagesList.push(messageData);
            }
            return messagesList;
        } else {
            return <></>;
        }
    }

    render() {
        return (
            <ul>
                {this.renderMessages()}
            </ul>
        );
    }
}