import React, {useState} from 'react';
import BannerMenu from '../components/BannerMenu';
import Sidebar from '../components/Sidebar';
import "../assets/stylesheets/GeneralLayout.css"
import "../assets/stylesheets/MyRoomsPage.css"
import myRoomsImage from "../assets/images/My Rooms.png"
import arrowcurve from "../assets/images/ArrowCurve.png"

function MyRoomsPage() {
  const [hasRooms, setHasRooms] = useState(false);
  return (
    <div>
      <BannerMenu/>
      <Sidebar/>

      <div className='main-content'>
        {/* <h1 style={{ textAlign: 'center' }}>My Rooms</h1> */}
        <div className='page-title'>
          <div className='image-style'>
            <img src={myRoomsImage} alt="My Rooms"/>
          </div>
          <h1>My Rooms</h1>
        </div>  
        {hasRooms? (
          // If the user has rooms
          <> 
          {/* Display Saved Rooms of account */}
          </>
        ):(
          // If the user has no rooms
          <>
          <div className = "arrow-container">
            <img src={arrowcurve} alt="arrow" height = '500px' width = '800px'></img>
          </div>
          <div className="no-room-message">
            <p1>You don't have any rooms yet...</p1>
          </div>
          </>
        )
      }

      </div>
      
    </div>
  );
}

export default MyRoomsPage;