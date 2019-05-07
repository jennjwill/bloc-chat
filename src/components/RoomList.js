import React, { Component } from "react";

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  render() {
    return <section className="room-list">Room List will go here</section>;
  }
}

export default RoomList;
