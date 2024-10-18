import React from "react";
import addRoomImage from '../assets/images/Add Room.png';
import "../assets/stylesheets/Button.css"

const addRoomStyle = {
    top: "41px",
    left: "25px"
}

function AddRoom() {
    return (
        <button className="sidebar-button" style={addRoomStyle}>
            <img src={addRoomImage} alt="Add Room"/>
        </button>
    )
}
export default AddRoom;