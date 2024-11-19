import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BannerMenu from '../components/BannerMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import "../assets/stylesheets/RoomPage.css"

function RoomPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, token } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    //retreive room id and name from the url params
    const [loading, setLoading] = useState(true); // Loading state to manage async data fetching
    const searchParams = new URLSearchParams(location.search);
    const roomId = searchParams.get('id');
    const roomName = searchParams.get('name');
    const [room, setRoom] = useState();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/Login"); // Redirect to Login if not logged in
        } else {
            getRoom();
            
        }
    }, [isLoggedIn, navigate]); // Depend on isLoggedIn to trigger re-navigation



    const getRoom = async () => {
        try{
            setLoading(true);
            const headers = {
                Authorization: `Bearer ${token}`,  
            };
            console.log("IN getRoom");
            const tempRoom={
                "room_id": roomId,
                "roomName": roomName,
                "fku": null,
                "decorations": []
            }
            
            
            console.log(roomId)
            console.log(headers)
            console.log(tempRoom)
            const response = await axios.post('http://localhost:8080/api/room/getThisRoom',
                tempRoom,
                { headers }
            );
            if (response.status === 200) {
                console.log('Room fetched successfully:', response.data);
                setRoom(response.data);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Error response:", error.response.data);
                setErrorMessage(`Room fetch failed: ${error.response.data.message || "Unknown error occurred."}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request:", error.request);
                setErrorMessage("Room fetch failed: No response from server.");
            } else {
                // Something happened in setting up the request
                console.error("Error message:", error.message);
                setErrorMessage(`Room fetch failed: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    }



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
                "Content-Type": "application/json",
            };
            console.log({headers});
            console.log("Delete Room name:", roomName);
            const tempRoom={
                "room_id": roomId,
                "roomName": roomName,
                "fku": null,
                "decorations": []
            }
            console.log(tempRoom)
            // Send POST request to backend
            const response = await axios.post('http://localhost:8080/api/room/delete', tempRoom , {headers});
            
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

    const renderContent = () => {
        if (loading) {
          return <p style={{ textAlign: 'center' }}>Loading decorations...</p>;
        }
        if (room && room.decorations.length > 0) {
          return (
            <div className="rooms-list">
              {room.decorations.map((decoration, index) => (
                <div key={`decoration-${decoration.searchLink}`} className="decoration-item">
                  <h2>Search Link: {decoration.searchLink}</h2>
                </div>
              ))}
              {errorMessage && <p style={{ textAlign: "center", color: 'red' }}>{errorMessage}</p>}
            </div>
          );
        } 
        
        // Memoize the value to prevent unnecessary re-renders
    
        return (
            <div className="no-decorations-message">
              <p>You don't have any decorations saved here yet...</p>
            </div>
        );
      };

  /* FOR SHARING TO OTHER USERS
    
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
    
 */

  return (
    <div>
      <div>
        <BannerMenu/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>  {roomName}  </h1>
        <Link to="/MyRooms">
            <button id='backToRooms' className='back-button'>← Back To Rooms</button>
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="delete-room" style={{ textAlign: 'center' }}>
          <div>
            {room ? (
                <div>
                    <h1>{room.roomName}</h1>
                    <button className="main-login-button" onClick={deleteRoom}>delete room</button>
                    {renderContent()}
                </div>
            ) : (
                <p>Loading room data...</p>
            )}
            
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