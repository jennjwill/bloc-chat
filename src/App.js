import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import * as firebase from "firebase";
// import { ReactComponent } from "*.svg";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import User from "./components/User";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDOjsirnJ4vFVnnA_AzADnv9sVUnY9amZs",
  authDomain: "bloc-chat-3651a.firebaseapp.com",
  databaseURL: "https://bloc-chat-3651a.firebaseio.com",
  projectId: "bloc-chat-3651a",
  storageBucket: "bloc-chat-3651a.appspot.com",
  messagingSenderId: "783885462025",
  appId: "1:783885462025:web:e0c89896ae16ca1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: null,
      messages: null,
      user: null
    };
  }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
  }

  //Do I need a
  setActiveRoomMessages(messages) {
    this.setState({ activeRoomMessages: messages });
  }

  setUser(user) {
    if (user) {
      this.setState({ user: user.displayName });
    } else {
      this.setState({ user: "Guest" });
    }
  }

  render() {
    return (
      <section>
        <div className="App">
          <header>
            <h1>Bloc Chat</h1>
            <User
              firebase={firebase}
              setUser={e => this.setUser(e)}
              displayName={this.state.user}
            />
          </header>
          <aside id="side">
            <RoomList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              setActiveRoom={this.setActiveRoom.bind(this)}
            />
          </aside>
          <main>
            <MessageList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              user={this.state.user}
            />
          </main>
        </div>
      </section>
    );
  }
}

export default App;
