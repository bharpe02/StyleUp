import React from 'react';
// import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';
import BannerMenu from '../components/BannerMenu.js';

function WishlistPage() {
  return (
    <div>
      <BannerMenu/>
      <Sidebar/>
      <h1 style={{ textAlign: 'center' }}>Wishlist</h1>
    </div>
  );
}

export default WishlistPage;