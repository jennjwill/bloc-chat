import React, { Component } from "react";
//import RoomList from "./components/RoomList";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeRoomMessages: []
    };
    this.messagesRef = this.props.firebase.database().ref("Messages");
  }

  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) }, () => {
        this.showMessages();
      });
    });
  }

  //not sure if this goes with what I'm needing to do yet or is for adding/removing messages
  componentWillReceiveProps(nextProps) {
    this.showMessages();
  }

  showMessages() {
    //console.log(message.roomId);
    //console.log(this.props.activeRoom);
    this.setState({
      activeRoomMessages: this.state.messages.filter(
        message => message.roomId === this.props.activeRoom
      )
    });
  }

  render() {
    return (
      <main id="message-list-component">
        <h2 className="room-name">{this.props.activeRoom}</h2>
        <ul id="message-list">
          {this.state.activeRoomMessages.map(message => (
            <li className="message-details" key={this.message.key}>
              helloMSG
              <div className="username">{this.message.username}</div>
              <div className="content">{this.message.content}</div>
              <div className="sentAt">{this.message.sentAt}</div> }
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default MessageList;
