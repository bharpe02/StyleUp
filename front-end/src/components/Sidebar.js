import React from 'react'
import AddRoom from './AddRoom';

function Sidebar() {
    return (
        <div>
            {/* svg is the container for the graphic. We want the size to be the same as the rectangle size */}
            <svg width="130" height="100vh"> {/* 100vh fills the vertical height of the screen */}
                <rect width="100%" height="100%" fill='#633B48'/>
            </svg>
            <AddRoom/>
        </div>
    )
}
export default Sidebar;