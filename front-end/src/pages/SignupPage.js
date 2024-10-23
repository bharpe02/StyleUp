import { React, useState } from "react";
import LogoButton from "../components/LogoButton";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import "../assets/stylesheets/LoginPage.css"

function SignupPage() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call backend API here
        registerUser();
    };
    
    const registerUser = async () => {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        navigate("/HomePage"); // Redirect to home page
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
                        <h1>Create an Account:</h1>
                        <label>First Name: </label>
                        <input 
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input 
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
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
                    <button className="login-button" type="submit">Sign Up</button>
                
                    <h2>Already have an account?</h2>
                    <Link to="/Login">
                        <button className="signup-button">Log In</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default SignupPage;