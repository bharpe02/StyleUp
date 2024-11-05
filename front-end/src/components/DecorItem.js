import React, {useState} from 'react';
import '../assets/stylesheets/DecorItem.css';
import { Link } from "react-router-dom";

function DecorItem() {
    // Decoration Item that contains a Picture, Name, Description, and the Seller Information. Can be clicked to be expanded
    return(
        <div className='Container'>
            <div className='display-form'></div>
        </div>
    )

}

export default DecorItem;