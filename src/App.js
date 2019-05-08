import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import * as firebase from "firebase";
import { ReactComponent } from "*.svg";
import RoomList from "/components/RoomList";

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

class App extends ReactComponent {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
        </header>
      </div>
      <section id="room-list" >
        <RoomList/>      
      </section>
    );
  }
}

export default App;
