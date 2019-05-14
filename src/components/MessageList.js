import React, { Component } from "react";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeRoomMessages: []
    };
    this.messagesRef = this.props.firebase.database().ref("messages");
  }

  //not sure if this goes with what I'm needing to do yet or is for adding/removing messages
  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  //same, not sure if this goes with what I'm needing to do yet or is for adding/removing messages
  //componentWillReceiveProps(nextProps) {
  //  this.viewMessages(nextProps.activeRoom, nextProps.activeRoomMessages);
  // }

  viewMessages() {
    this.setState({
      activeRoomMessages: this.state.messages.filter(
        messages => messages.roomId === this.props.activeRoom
      )
    });
  }

  render() {
    return (
      <main id="message-list-component">
        <h2 className="room-name">{this.props.activeRoom}</h2>
        <ul id="message-list">
          {this.state.activeRoomMessages.map(messages => (
            <li
              className="message-details"
              key={messages.key}
              onClick={() => this.props.viewMessages()}
            >
              helloMSG
              <div className="username">{messages.username}</div>
              <div className="content">{messages.content}</div>
              <div className="sentAt">{messages.sentAt}</div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default MessageList;
