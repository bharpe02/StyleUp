import React, {useState, useEffect, useContext} from 'react';
import BannerMenu from '../components/BannerMenu';
import Sidebar from '../components/Sidebar';
import "../assets/stylesheets/GeneralLayout.css"
import "../assets/stylesheets/MyRoomsPage.css"
import myRoomsImage from "../assets/images/My Rooms.png"
import arrowcurve from "../assets/images/ArrowCurve.png"
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function MyRoomsPage() {
  const [hasRooms, setHasRooms] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, rooms } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login"); // Redirect to Login if not logged in
    } else {
      setHasRooms(rooms && rooms.length > 0); // Set hasRooms based on whether rooms exist
    }
  }, [isLoggedIn, rooms, navigate]); // Depend on isLoggedIn to trigger re-navigation

  return (
    <div>
      <BannerMenu/>
      <Sidebar/>
      {isLoggedIn ? (
      <div className='main-content'>
        {/* <h1 style={{ textAlign: 'center' }}>My Rooms</h1> */}
        <div className='page-title'>
          <div className='image-style'>
            <img src={myRoomsImage} alt="My Rooms"/>
          </div>
          <h1>My Rooms</h1>
        </div>  
        {hasRooms? (
          // If the user has rooms
          // If the user has rooms
          <div className="rooms-list">
            {rooms.map((room) => (
              <div key={room.room_id} className="room-item">
                <h1>Room ID: {room.room_id}</h1>
                <h2>Room Name: {room.roomName}</h2>
                {/* Display additional room details as needed */}
              </div>
            ))}
          </div>
        ):(
          // If the user has no rooms
          <>
          <div className = "arrow-container">
            <img src={arrowcurve} alt="arrow" height = '500px' width = '800px'></img>
          </div>
          <div className="no-room-message">
            <p1>You don't have any rooms yet...</p1>
          </div>
          </>
        )
        }

      </div>
      ):(
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default MyRoomsPage;