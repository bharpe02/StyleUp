import React from 'react';
import LogoButton from '../components/LogoButton.js';
import Sidebar from '../components/Sidebar.js';

function WishlistPage() {
  return (
    <div>
      <LogoButton/>
      <Sidebar/>
      <h1 style={{ textAlign: 'center' }}>Wishlist</h1>
    </div>
  );
}

export default WishlistPage;