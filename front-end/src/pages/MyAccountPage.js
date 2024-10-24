import { React } from "react";
import { useNavigate } from "react-router-dom";
import BannerMenu from "../components/BannerMenu";
import "../assets/stylesheets/MyAccount.css"

function MyAccountPage() {
    
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        // Call backend API here
        logoutUser();
    };
    
    const logoutUser = async () => {
        console.log("The user has logged out")
        navigate("/Login"); // Redirect to login page
    };
    
    //We are gonna have blank login credentials until we set up the backend
    return (
        <div className="container">
            <BannerMenu/>
            <div className="my-account-page">
                <h1>My Account</h1>
                <div>
                    <h2>Pending Login Requests: 0</h2>
                </div>
                <div className="account-info">
                    <div className="account-details">
                        <h2>Account Details</h2>
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Email:</strong> johndoe@example.com</p>
                        <p><strong>Member Since:</strong> January 2023</p>
                    </div>
                    <div className="account-settings">
                        <h2>Settings</h2>
                        <button className="settings-btn">Edit Profile</button>
                        <button className="settings-btn">Change Password</button>
                    </div>
                </div>
                <div className="logout-section">
                    <button className="logout-btn" onClick={handleClick}>Log Out</button>
                </div>
            </div>
        </div>
    )
}
export default MyAccountPage;