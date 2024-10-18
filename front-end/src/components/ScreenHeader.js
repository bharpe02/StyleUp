import React from 'react'

function ScreenHeader(){
    return(
    <div>
        {/* svg is the container for the graphic. We want the size to be the same as the rectangle size */}
        <svg width="100vw" height="50"> {/* 100vh fills the viweport height of the screen */}
                <rect width="100%" height="100%" fill='#e1e1e1'/>
            </svg>
    </div>
    );
}
export default ScreenHeader;