import React, {useState, useEffect, useContext} from 'react';
import BannerMenu from '../components/BannerMenu';
import Sidebar from '../components/Sidebar';
import "../assets/stylesheets/GeneralLayout.css"
import "../assets/stylesheets/MyRoomsPage.css"
import myRoomsImage from "../assets/images/My Rooms.png"
import arrowcurve from "../assets/images/ArrowCurve.png"
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyRoomsPage() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true); // Loading state to manage async data fetching
  const { isLoggedIn, token } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(''); 

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login"); // Redirect to Login if not logged in
    } else {
      getRooms();
    }
  }, [isLoggedIn, token, navigate]); // Depend on isLoggedIn to trigger re-navigation

  const getRooms = async () => {
    try {
      setLoading(true); // Start loading

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const roomsResponse = await axios.get("http://localhost:8080/api/user/rooms", {headers})

      console.log("Rooms data:", roomsResponse.data); // Check rooms 
      setRooms(roomsResponse.data)

    } catch (error) {
      console.error("Failed to fetch user details:", error);
      setErrorMessage(error);
    } finally {
      setLoading(false); // Stop loading after fetch is done
    }
    
  }

<<<<<<< HEAD
  //navigate to room page and send selected room id and name in params
  const handleRoomClick = (room) => {
    navigate(`/Room?id=${room.room_id}&name=${encodeURIComponent(room.roomName)}`);
  };

=======
>>>>>>> 5abe6ac58ca6603255af99672bb855d14c8cccb8
  const renderContent = () => {
    if (loading) {
      return <p style={{ textAlign: 'center' }}>Loading rooms...</p>;
    }

    if (rooms.length > 0) {
      return (
        <div className="rooms-list">
          {rooms.map((room) => (
<<<<<<< HEAD
            <div key={room.room_id} className="room-item" 
              onClick={() => handleRoomClick(room)}  
              style={{ cursor: 'pointer' }}
              >
=======
            <div key={room.room_id} className="room-item">
>>>>>>> 5abe6ac58ca6603255af99672bb855d14c8cccb8
              <h1>Room ID: {room.room_id}</h1>
              <h2>Room Name: {room.roomName}</h2>
            </div>
          ))}
          {errorMessage && <p style={{ textAlign: "center", color: 'red' }}>{errorMessage}</p>}
        </div>
      );
    } 
<<<<<<< HEAD
    
    // Memoize the value to prevent unnecessary re-renders
=======
>>>>>>> 5abe6ac58ca6603255af99672bb855d14c8cccb8

    return (
      <>
        <div className="arrow-container">
          <img src={arrowcurve} alt="arrow" height='500px' width='800px' />
        </div>
        <div className="no-room-message">
          <p>You don't have any rooms yet...</p>
        </div>
      </>
    );
  };

  return (
    <div>
      <BannerMenu/>
      <Sidebar/>
      {isLoggedIn ? (
        <div className='main-content'>  {/**breaks background for some reason */}
          <div className='page-title'>
            <div className='image-style'>
              <img src={myRoomsImage} alt="My Rooms"/>
            </div>
            <h1>My Rooms</h1>
          </div>  
          {renderContent()}
        </div>
      ):(
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default MyRoomsPage;