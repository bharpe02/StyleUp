import React from 'react';
// import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';
import BannerMenu from '../components/BannerMenu.js';

function WishlistPage() {
  return (
    <div className='container'>
      <BannerMenu/>
      <Sidebar/>
      <div className='main-content'>
        <h1>Wishlist</h1>
      </div>
    </div>
  );
}

export default WishlistPage;