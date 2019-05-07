import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
