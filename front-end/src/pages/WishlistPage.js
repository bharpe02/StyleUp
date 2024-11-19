import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar.js';
import BannerMenu from '../components/BannerMenu.js';
import { AuthContext } from '../contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WishlistPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/Login"); // Redirect to Login if not logged in
    } else {
      const fetchWishlist = async () => {
        try {
          const response = await axios.get("/api/wishlist/user/1"); // Replace `1` with logged-in user's ID
          setWishlist(response.data);
        } catch (error) {
          console.error("Error fetching wishlist:", error);
        }
      };
      fetchWishlist();
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='container'>
      <BannerMenu />
      <Sidebar />
      {isLoggedIn ? (
        <div className='main-content'>
          <h1>Wishlist</h1>
          <ul>
            {wishlist.map((item) => (
              <li key={item.wishlistId}>
                <a href={item.searchLink} target="_blank" rel="noopener noreferrer">
                  {item.searchLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>Redirecting to login...</p>
      )}
    </div>
  );
}

export default WishlistPage;