import React from 'react';
import Sidebar from '../components/Sidebar';
import LogoButton from '../components/LogoButton';

function AddRoomPage() {
  return (
    <div>
      <div>
        <LogoButton/>
        <Sidebar/>
        <h1 style={{ textAlign: 'center' }}>Add a Room</h1>
      </div>
    </div>
  );
}

export default AddRoomPage;