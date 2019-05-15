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
      this.setState({ messages: this.state.messages.concat(message) }, () => {
        this.viewMessages(this.props.activeRoom);
      });
    });
  }

  //same, not sure if this goes with what I'm needing to do yet or is for adding/removing messages
  //componentWillReceiveProps(nextProps) {
  //  this.viewMessages(nextProps.activeRoom, nextProps.activeRoomMessages);
  // }

  viewMessages() {
    this.setState({
      activeRoomMessages: this.state.messages.filter(
        messages => messages.roomId === this.props.activeRoom.key
      )
    });
  }

  render() {
    return (
      <main id="message-list-component">
        <h2 className="room-name">{this.props.activeRoom}</h2>
        <ul id="message-list">
          {this.state.activeRoomMessages.map(messages => (
            <li className="message-details" key={this.messages.key}>
              helloMSG
              <div className="username">{this.messages.username}</div>
              <div className="content">{this.messages.content}</div>
              <div className="sentAt">{this.messages.sentAt}</div> }
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default MessageList;
