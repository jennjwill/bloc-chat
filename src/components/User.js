import React, { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
    }

signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();    
  this.props.firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

signOut() {
  this.props.firebase.auth().signOut();
  this.props.firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
  });
}

render() {
    return(
        
        <main id="login-buttons">
          <button type="button"
            onClick={ this.props.signInWithPopup() }>Sign in or create account
          </button>
          <button type="button" id="user-sign-out"
            onClick={this.props.signOut()}>Log out
          </button>
        </main>
    )
}

}
export default User;