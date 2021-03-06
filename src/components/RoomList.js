import React, { Component } from "react";

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref("rooms");
  }

  componentDidMount() {
    this.roomsRef.on("child_added", snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) });
    });
  }

  createRoom(newRoomName) {
    this.roomsRef.push({
      name: newRoomName
    });

    this.setState({ newRoomName: "" });
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createRoom(this.state.newRoomName);
    //console.log(e, "e", this.state.newRoomName, "this.state.newRoomName");
  }

  //activeRoom(e) {
  //  this.setState({ this.state.room.name })
  //}

  render() {
    return (
      <div>
        <div className="room-list">
          {this.state.rooms.map(room => (
            <li
              key={room.key}
              onClick={() => this.props.setActiveRoom(room.name)}
            >
              {" "}
              {room.name}
            </li>
          ))}
        </div>

        <form id="create-new-room" onSubmit={e => this.handleSubmit(e)}>
          Create New Chat Room:
          <br />
          <input
            type="text"
            value={this.state.newRoomName}
            onChange={this.handleChange.bind(this)}
            name="newRoomName"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={e => {
              e.preventDefault();
              this.createRoom(this.state.newRoomName);
            }}
          />
        </form>
      </div>
    );
  }
}

export default RoomList;
