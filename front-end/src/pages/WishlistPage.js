import React from 'react';
// import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';
import BannerMenu from '../components/BannerMenu.js';
import DecorItem from '../components/DecorItem.js';

function WishlistPage() {
  return (
    <div className='container'>
      <BannerMenu/>
      <Sidebar/>
      <div className='main-content'>
        <h1>Wishlist</h1>

        <DecorItem />
        
      </div>
    </div>
  );
}

export default WishlistPage;