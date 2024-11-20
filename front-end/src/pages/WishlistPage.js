import React, { useContext, useEffect } from 'react';
// import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';
import BannerMenu from '../components/BannerMenu.js';
import DecorItem from '../components/DecorItem.js';
import { AuthContext } from '../contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';

function WishlistPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login"); // Redirect to Login if not logged in
    }
  }, [isLoggedIn, navigate]); // Depend on isLoggedIn to trigger re-navigation

  return (
    <div className='container'>
      <BannerMenu/>
      {isLoggedIn ? (
      <div className='main-content'>
        <h1>Wishlist</h1>

        <DecorItem />
        
      </div>
      ):(
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default WishlistPage;