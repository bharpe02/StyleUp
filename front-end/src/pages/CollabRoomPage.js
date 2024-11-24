import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BannerMenu from '../components/BannerMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import "../assets/stylesheets/RoomPage.css"

function CollabRoomPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { email, isLoggedIn, token } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    //retreive room id and name from the url params
    const [loading, setLoading] = useState(true); // Loading state to manage async data fetching
    const searchParams = new URLSearchParams(location.search);
    const roomId = searchParams.get('id');
    const roomName = searchParams.get('name');
    const [room, setRoom] = useState();
    const [menuOpenStates, setMenuOpenStates] = useState({});
    const [roomMenuOpen, setRoomMenuOpen] = useState(false);

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
            const tempRoom={
                "room_id": roomId,
                "roomName": roomName,
                "fku": null,
                "decorations": []
            }
            
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

    const leaveRoom = async () => {
        try {
            // Prepare user data to send to the backend
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };
            console.log({headers});
            console.log("Delete Room name:", roomName);
            const tempInv = {
                "owner_id": null,
                "email": email,
                "room_id": roomId,
                "roomName": roomName,
                "senderName": null,
            }
            console.log(tempInv)
            // Send POST request to backend
            const response = await axios.post('http://localhost:8080/api/room/leave', tempInv, {headers});
            
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

    const deleteDecoration = async (decoration) => {
        try {
            // Prepare user data to send to the backend
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            };
            console.log("Delete Decoration:", decoration);
            // Send POST request to backend
            const response = await axios.post('http://localhost:8080/api/decoration/delete', decoration , {headers});
            
            if (response.status === 200) {
                console.log('Room deleted successfully:', response.data);
                // Update the local state to remove the deleted decoration
                setRoom((prevRoom) => ({
                    ...prevRoom,
                    decorations: prevRoom.decorations.filter((dec) => dec.dec_id !== decoration.dec_id),
                }));
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

    const toggleMenu = (decorationId) => {
        setMenuOpenStates((prevState) => ({
          ...prevState,
          [decorationId]: !prevState[decorationId],
        }));
    };

    const renderContent = () => {
        if (loading) {
          return <p style={{ textAlign: 'center' }}>Loading decorations...</p>;
        }
        if (room && room.decorations.length > 0) {
          return (
            <div className="results-grid">
              {room.decorations.map((decoration) => (
                <div key={`decoration-${decoration.dec_id}`} className="result-card">
                    <div className='room-header'>
                        <h2>{decoration.title}</h2>
                        <div className="dropdown">
                            <button
                                className="menu-button"
                                onClick={() => toggleMenu(decoration.dec_id)}
                            >
                                ⋮
                            </button>
                            {menuOpenStates[decoration.dec_id] && (
                                <div className="dropdown-menu">
                                    <button
                                        onClick={() => deleteDecoration(decoration)}
                                        className="delete-button"
                                    >
                                        Delete Decoration
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    {decoration.image && <img src={decoration.image} alt={decoration.title} className="result-image" />}
                    <div className='description'> 
                        <h2>Description:</h2>
                        <p>{decoration.description}</p>
                    </div>
                    <div className='description'>
                        <h2>Link:</h2>
                        <a
                            href={decoration.searchLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="result-card-link"
                        >
                            {decoration.searchLink}
                        </a>
                    </div>
                </div>
              ))}
              {errorMessage && <p style={{ textAlign: "center", color: 'red' }}>{errorMessage}</p>}
            </div>
          );
        } 
            
        return (
            <div className="no-decorations-message">
              <p>You don't have any decorations saved here yet...</p>
            </div>
        );
      };

  return (
    <div>
      <div>
        <BannerMenu/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>  {roomName}  </h1>
      </div>
      {isLoggedIn ? (
        <div className='main-content'>
            <Link to="/MyRooms">
                <button id='backToRooms' className='back-button'>← Back To Rooms</button>
            </Link>
            {room ? (
                <div>
                    <div className='room-header'>
                        <h1>{room.roomName}</h1>
                        <div className="dropdown">
                            <button className="menu-button" onClick={() => setRoomMenuOpen(!roomMenuOpen)}>⋮</button>
                            {roomMenuOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={leaveRoom} className="delete-button">Leave Room</button>
                                </div>
                            )}
                        </div>
                    </div>
                    {renderContent()}
                </div>
            ) : (
                <p>Loading room data...</p>
            )}
            
            {errorMessage && <p style={{ textAlign:"center", color: 'red' }}>{errorMessage}</p>}
        </div>
      ):(
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default CollabRoomPage;