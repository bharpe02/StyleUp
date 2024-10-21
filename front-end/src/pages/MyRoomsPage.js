import React from 'react';
import LogoButton from '../components/LogoButton';
import Sidebar from '../components/Sidebar';

function MyRoomsPage() {
  return (
    <div>
      <LogoButton/>
      <Sidebar/>
      <h1 style={{ textAlign: 'center' }}>My Rooms</h1>
    </div>
  );
}

export default MyRoomsPage;