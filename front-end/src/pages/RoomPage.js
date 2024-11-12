import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BannerMenu from '../components/BannerMenu';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import "../assets/stylesheets/LoginPage.css"
import axios from 'axios';

function RoomPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, token } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  //retreive room id and name from the url params
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('id');
  const roomName = searchParams.get('name');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login"); // Redirect to Login if not logged in
    }
  }, [isLoggedIn, navigate]); // Depend on isLoggedIn to trigger re-navigation

  const deleteRoom = (event) => {
    console.log("Delete clicked");
    event.preventDefault();
    remRoom();
};

  const remRoom = async () => {
    try {
        // Prepare user data to send to the backend
        const headers = {
          Authorization: `Bearer ${token}`,  
        };
        console.log("Delete Room name:", roomName);

        // Send POST request to backend
        const response = await axios.delete('http://localhost:8080/api/room/delete', {roomId} , {headers});
        
        if (response.status === 200) {
            console.log('Room deleted successfully:', response.data);
            navigate("/MyRooms"); // Redirect to home page
        }
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error("Error response:", error.response.data);
            setErrorMessage(`Room deletion failed: ${error.response.data.message || "Unknown error occurred."}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("Error request:", error.request);
            setErrorMessage("Room deletion failed: No response from server.");
        } else {
            // Something happened in setting up the request
            console.error("Error message:", error.message);
            setErrorMessage(`Room deletion failed: ${error.message}`);
        }
    }
  };

  {/* FOR SHARING TO OTHER USERS
    
    const handleSubmit = (event) => {
    event.preventDefault();
    shareRoom();
    };

    const shareRoom = async () => {
        try {
            // Prepare user data to send to the backend
            const headers = {
            Authorization: `Bearer ${token}`,  
            };
            console.log("User name:", userName);

            // Send POST request to backend
            const response = await axios.post('http://localhost:8080/api/room/share', {userName}, {headers});
            
            if (response.status === 200) {
                console.log('Invite shared successfully:', response.data);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Error response:", error.response.data);
                setErrorMessage(`Room creation failed: ${error.response.data.message || "Unknown error occurred."}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request:", error.request);
                setErrorMessage("Room creation failed: No response from server.");
            } else {
                // Something happened in setting up the request
                console.error("Error message:", error.message);
                setErrorMessage(`Room creation failed: ${error.message}`);
            }
        }
    };
    
    */}

  return (
    <div>
      <div>
        <BannerMenu/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>  {roomName}  </h1>
      </div>
      {isLoggedIn ? (
        <div className="delete room" style={{ textAlign: 'center' }}>
          <div>
            <button className="main-login-button" onClick={deleteRoom}>delete room</button>
            {errorMessage && <p style={{ textAlign:"center", color: 'red' }}>{errorMessage}</p>}
               {/*     FOR SHARING WITH OTHER USER
              <div className="login-form">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1>Create a Room:</h1>
                                <label>Room Name: </label>
                                <input 
                                    type="text"
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="main-login-button" type="submit">Create Room</button>
                        </form>
                        {errorMessage && <p style={{ textAlign:"center", color: 'red' }}>{errorMessage}</p>}
                    </div>
                </div>
                */}
          </div>
      </div>
      ):(
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default RoomPage;