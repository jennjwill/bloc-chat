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
  componentWillReceiveProps(nextProps) {
    this.viewMessages(nextProps.activeRoom, nextProps.activeRoomMessages);
  }

  viewMessages(activeRoom) {
    this.setState({
      activeRoomMessages: this.state.messages.filter(
        messages => messages.roomId === activeRoom.key
      )
    });
  }

  render() {
    return (
      <main id="message-list-component">
        <h2 className="room-name">{this.props.activeRoom}</h2>
        <ul id="message-list">
          {this.state.activeRoomMessages.map(message => (
            <li
              className="message-details"
              key={message.key}
              onClick={() =>
                this.props.viewMessages(message.roomId, message.key)
              }
            >
              helloMSG
              <div className="username">{message.username}</div>
              <div className="content">{message.content}</div>
              <div className="sentAt">{message.sentAt}</div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default MessageList;
