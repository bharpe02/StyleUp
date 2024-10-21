import React from 'react'
import addRoomImage from "../assets/images/Add Room.png"
import myRoomsImage from "../assets/images/My Rooms.png"
import surveyImage from "../assets/images/Survey.png"
import wishlistImage from "../assets/images/Wishlist.png"
import "../assets/stylesheets/Sidebar.css"

function Sidebar() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '130px', height: '100vh' }}>
            {/* svg is the container for the graphic. We want the size to be the same as the rectangle size */}
            <svg width="130" height="100vh" style={{position: 'absolute', top: 0, left: 0}}> {/* 100vh fills the vertical height of the screen */}
                <rect width="100%" height="100%" fill='#633B48'/>
            </svg>
            {/*Add Room Button*/}
            <button id='addRoom' className="sidebar-button" style={addRoomStyle}>
                <img src={addRoomImage} alt="Add Room"/>
            </button>
            {/*My Rooms Button*/}
            <button id='myRooms' className="sidebar-button" style={myRoomsStyle}>
                <img src={myRoomsImage} alt="My Rooms"/>
            </button>
            {/*Survey Button*/}
            <button id='survey' className="sidebar-button" style={surveyStyle}>
                <img src={surveyImage} alt="Survey"/>
            </button>
            {/*Wishlist Button*/}
            <button id='wishlist' className="sidebar-button" style={wishlistStyle}>
                <img src={wishlistImage} alt="Wishlist"/>
            </button>
        </div>
    )
}

//These functions just set the location of each button on the sidebar
const addRoomStyle = {
    position: 'absolute',
    top: "41px",
    left: "25px"
}

const myRoomsStyle = {
    position: 'absolute',
    top: "160px",
    left: "25px"
}

const surveyStyle = {
    position: 'absolute',
    top: "260px",
    left: "25px"
}

const wishlistStyle = {
    position: 'absolute',
    top: "360px",
    left: "25px"
}

export default Sidebar;