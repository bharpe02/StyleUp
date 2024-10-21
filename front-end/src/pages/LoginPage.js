import { React, useState } from "react";
import LogoButton from "../components/LogoButton";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import "../assets/stylesheets/LoginPage.css"

function LoginPage() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call backend API here
        loginUser();
    };
    
    const loginUser = async () => {
        console.log(email)
        console.log(password)
        navigate("/HomePage"); // Redirect to dashboard or another page
        /*try {
            const response = await fetch("http://your-backend-api.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                navigate("/HomePage"); // Redirect to HomePage
            } else {
                // Handle login errors
                console.log("Login failed", data);
            }
        } catch (error) {
          console.error("Error logging in:", error);
        }*/
      };
    
    return (
        <div className="login-form">
            <div>
                <LogoButton/>
                <Sidebar/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Log In:</h1>
                        <label>Email: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="login-button" type="submit">Log In</button>
                
                    <h2>Don't have an account?</h2>
                    <Link to="/Wishlist">
                        <button className="signup-button">Sign Up!</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;