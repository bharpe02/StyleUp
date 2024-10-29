import React from 'react';
import Sidebar from '../components/Sidebar';
import BannerMenu from '../components/BannerMenu';

function AddRoomPage() {
  return (
    <div>
      <div>
        <BannerMenu/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>Add a Room</h1>
      </div>
    </div>
  );
}

export default AddRoomPage;