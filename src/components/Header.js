import React from 'react';

import "../styles/Header.css";

export default function Header(){
    return(
        <div className='Header'>
            <img
            className="logo"
            src="../images/logo.png"
            alt='meme' 
             />
            <h1>This is from Header</h1>
        </div>
    )
}
