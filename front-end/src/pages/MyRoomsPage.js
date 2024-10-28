import React from 'react';
import BannerMenu from '../components/BannerMenu';
import Sidebar from '../components/Sidebar';
import "../assets/stylesheets/GeneralLayout.css"

function MyRoomsPage() {
  return (
    <div>
      <BannerMenu/>
      <Sidebar/>
      {/* <h1 style={{ textAlign: 'center' }}>My Rooms</h1> */}
    </div>
  );
}

export default MyRoomsPage;