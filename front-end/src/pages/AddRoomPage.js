import React, { useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import BannerMenu from '../components/BannerMenu';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function AddRoomPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login"); // Redirect to Login if not logged in
    }
  }, [isLoggedIn, navigate]); // Depend on isLoggedIn to trigger re-navigation

  return (
    <div>
      <div>
        <BannerMenu/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>Add a Room</h1>
      </div>
      {isLoggedIn ? (
        <h1 style={{ textAlign: 'center' }}>Logged In</h1>
      ):(
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default AddRoomPage;