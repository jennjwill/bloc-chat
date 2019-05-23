import React, { Component } from "react";
//import RoomList from "./components/RoomList";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.messagesRef = this.props.firebase.database().ref("Messages");
  }

  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  createMessage(newMessage) {
    this.messagesRef.push({
      content: newMessage,
      roomId: this.props.activeRoom,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
      //username: this.state.user
    });

    this.setState({ newMessage: "" });
  }

  handleChange(e) {
    this.setState({ newMessage: e.target.value });
  }

  handleSubmit(e) {
    this.createMessage(this.state.newMessage);
  }

  render() {
    return (
      <main id="message-list-component">
        <h2 className="room-name">{this.props.activeRoom}</h2>
        <ul id="message-list">
          {this.state.messages
            .filter(message => message.roomId === this.props.activeRoom)
            .map(message => (
              <li className="message-details" key={message.key}>
                <div className="username">{message.username}</div>
                <div className="content">{message.content}</div>
                <div className="sentAt">{message.sentAt}</div>
              </li>
            ))}
        </ul>
        <div>
          <form id="create-new-message" onSubmit={e => this.handleSubmit(e)}>
            <input
              id="newMessageInput"
              type="text-field"
              placeholder="Write your message here..."
              value={this.state.newMessage}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <input
              id="newMessageSubmit"
              type="submit"
              value="Send"
              onClick={e => {
                e.preventDefault();
                this.createMessage(this.state.newMessage);
              }}
            />
          </form>
        </div>
      </main>
    );
  }
}

export default MessageList;
