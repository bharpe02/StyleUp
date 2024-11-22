import BannerMenu from "../components/BannerMenu";
import { useNavigate } from "react-router-dom";
import { React, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../assets/stylesheets/MyRoomsPage.css"

function InvitationsPage() {
    
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const [invitations, setInvitations] = useState([]);
    const [errorMessage] = useState(''); 
    //const [loading, setLoading] = useState(true); // Loading state to manage async data fetching

    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/Login"); // Redirect to Login if not logged in
        } else {
            // Simulate fetching invitations --> CHANGE WHEN IMPLEMENT BACKEND, these are fake invitations
            const mockInvitations = [
                { id: 1, roomName: "Living Room Redesign", invitedBy: "John Doe" },
                { id: 2, roomName: "Office Setup", invitedBy: "Jane Smith" },
                { id: 3, roomName: "Kitchen Revamp", invitedBy: "Emily Davis" },
            ];
            setInvitations(mockInvitations);
        }
    }, [isLoggedIn, navigate]); // Depend on isLoggedIn to trigger re-navigation
    

    const renderContent = () => {
        /*if (loading) {
          return <p style={{ textAlign: 'center' }}>Loading rooms...</p>;
        }*/
    
        if (invitations.length > 0) {
            return (
                <div className="rooms-list">
                    {invitations.map((invitation) => (
                        <div className="room-item" key={invitation.id}>
                            <h2>{invitation.roomName}</h2>
                            <p><strong>Invited By:</strong> {invitation.invitedBy}</p>
                            <div className="invitation-actions">
                                <button
                                    onClick={() => alert(`Accepted invitation to ${invitation.roomName}`)}
                                    style={{
                                        backgroundColor: "#633B48",
                                        color: "#F1E8E8",
                                        border: "2px solid #4B2C37",
                                        borderRadius: "5px",
                                        padding: "10px 15px",
                                        cursor: "pointer",
                                        margin: "5px",
                                        fontSize: "14px",
                                        transition: "background-color 0.3s",
                                    }}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = "#4B2C37")}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = "#633B48")}
                                    /**for accessibility*/
                                    onFocus={(e) => (e.target.style.backgroundColor = "#4B2C37")}
                                    onBlur={(e) => (e.target.style.backgroundColor = "#633B48")}
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => alert(`Declined invitation to ${invitation.roomName}`)}
                                    style={{
                                        backgroundColor: "#F1E8E8",
                                        color: "#633B48",
                                        border: "2px solid #633B48",
                                        borderRadius: "5px",
                                        padding: "10px 15px",
                                        cursor: "pointer",
                                        margin: "5px",
                                        fontSize: "14px",
                                        transition: "background-color 0.3s, color 0.3s",
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = "#633B48";
                                        e.target.style.color = "#F1E8E8";

                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = "#F1E8E8";
                                        e.target.style.color = "#633B48";
            
                                    }}
                                    onFocus={(e) => {
                                        //for accessibility
                                        e.target.style.backgroundColor = "#633B48";
                                        e.target.style.color = "#F1E8E8";
                                    }}
                                    onBlur={(e) => {
                                        //for accessibility
                                        e.target.style.backgroundColor = "#F1E8E8";
                                        e.target.style.color = "#633B48";
                                    }}

                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    ))}
                    {errorMessage && <p style={{ textAlign: "center", color: 'red' }}>{errorMessage}</p>}
                </div>
          );
        } 
        // Memoize the value to prevent unnecessary re-renders
        
        return (
            <div className="no-room-message">
              <p>You don't have any invitations yet...</p>
            </div>
        );
      };


    //We are gonna have blank login credentials until we set up the backend
    return (
        <div className="container">
            <BannerMenu/>
            {isLoggedIn ? (
            <div className='main-content'>
                <h1>My Invitations:</h1>
                {renderContent()}
                
            </div>
            ):(
                <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
            )}
        </div>
    )
}
export default InvitationsPage;