import React from 'react'
import "./Header.css"
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
const Header = () => {
    const selectInput = () => {
        document.getElementById('searchInput').focus();
    };
    return (
        <div className='headerGlavniKontejner'>
            <div className='leviKontejner'>
                <div className='menuIkonica'><FiMenu /></div>
                <div className='logo'><div><h1>AL</h1><p>adam lekovito</p></div></div>
            </div>
            <div className='desniKontejner'>
                <div className='src' onClick={selectInput}>
                    <input type="text" id="searchInput" placeholder="Pretraži..." />
                    <div className='srcIkonica' ><IoSearchOutline /></div>
                </div>
                <div className='headerIkonice'>
                    <div className='srce'><FiHeart /></div>
                    <div className='korpa'><BsHandbag /> </div>
                    <div className="prijavise"><BsPerson /></div>
                </div>
            </div>
        </div>
    )
}

export default Header