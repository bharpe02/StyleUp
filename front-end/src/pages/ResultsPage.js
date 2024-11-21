import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSurveyContext } from "../contexts/SurveyContext";
import axios from "axios";
import BannerMenu from "../components/BannerMenu"
import { AuthContext } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";
import "../assets/stylesheets/ResultsPage.css"

const ResultsPage = ({ query }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { finalResponse } = useSurveyContext();
  const { token, isLoggedIn } = useContext(AuthContext);
  const [menuOpenStates, setMenuOpenStates] = useState({});
  const [rooms, setRooms] = useState([])
  const [messages, setMessages] = useState({});

  // Initialize results as null to show loading state initially
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetchResults();
    //If you click outside dropdown menu, close it
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setMenuOpenStates({}); // Close all menus
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);

  }, []);

  const fetchResults = async () => {
    try {
      console.log(finalResponse);
      const response = await axios.post(`http://localhost:8080/api/search`, finalResponse);
      setResults(response.data); // Save the raw JSON object
      await getRooms();
    } catch (error) {
      console.error("Error fetching results: ", error);
    }
  };

  const getRooms = async () => {
    try {

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const roomsResponse = await axios.get("http://localhost:8080/api/user/rooms", {headers})

      console.log("Rooms data:", roomsResponse.data); // Check rooms 
      setRooms(roomsResponse.data)

    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }     
  }

  const addDecoration = async (item, room_id, index) => {
    try {
        // Prepare user data to send to the backend
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        console.log(item.htmlSnippet);

        const decoration={
          "searchLink": item.link,
          "fkr": room_id,
          "description": new DOMParser().parseFromString(item.htmlSnippet, 'text/html').body.textContent.trim() || "No description available.",
          "title": item.title,
          "image": null,
        }

        console.log("Create Decoration:", decoration);
        // Send POST request to backend
        const response = await axios.post('http://localhost:8080/api/decoration/create', decoration , {headers});
        
        if (response.status === 200) {
            console.log('Room Created successfully:', response.data);
            setMessages((prevMessages) => ({
              ...prevMessages,
              [index]: "Added to Room!", // Set message for the specific index
            }));
        }
    } catch (error) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [index]: "Error adding to room", // Set an error message if needed
      }));
      console.error("Error adding to room: ", error)
    }
  };

  const toggleRoomMenu = (index) => {
    setMenuOpenStates((prevState) => {
      const newStates = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false; // Close all other menus
        return acc;
      }, {});
      return {
        ...newStates,
        [index]: !prevState[index], // Toggle the clicked menu
      };
    });
  };

  // Show loading message while results are being fetched
  if (!results) {
    return <div>Loading...</div>;
  }

  // Extract items array from results
  const items = results.items || [];

  return (
    <div className="results-container">
    <BannerMenu/>
    {isLoggedIn ? <Sidebar/> : <h1>Log In to save results to a room</h1>}
      <div className="results-content">
        <h1>Search Results</h1>
        <div className="results-grid">
          {items.map((item, index) => (
            <div className="result-card" key={index}>
              <h2>{item.title}</h2>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a> {/* Use item.link */}
              <p dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}></p> {/* Use item.htmlSnippet */}
              {isLoggedIn ? (
                <div className="dropdown">
                  <button className="menu-button" onClick={() => toggleRoomMenu(index)}>
                    ⋮
                  </button>
                  {menuOpenStates[index] && (
                    <div className="dropdown-menu">
                      {rooms.length === 0 ? (
                        <p style={{textAlign: "center"}}>No rooms available. Create one to add items!</p>
                      ) : (
                      rooms.map((room) => (
                        <button key={room.room_id} className="add-button" 
                          onClick={() => addDecoration(item, room.room_id, index)}  
                        >
                          {room.roomName}
                        </button>
                      ))
                    )}
                    </div>
                  )}
                  {messages[index] && (
                    <p className="message" style={{ color: "green", marginTop: "10px" }}>
                      {messages[index]}
                    </p>
                  )}
                </div>
              ) : (
                <p className="login-prompt">Log in to add this to a room.</p>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button onClick={() => navigate("/Survey")}>Back to Survey</button>
          <button onClick={() => navigate("/MyRooms")}>Go to My Rooms</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
