import React from 'react';
import Pokelogo from "../Imagenes/pokelogo.png";

import { NavLink } from "react-router-dom";

export default function Barra() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    return (
        <div>
            <nav className='barra'>
              
                <img src={Pokelogo} alt="Pokelogo" className="imagen-barra" />
                
           
               <div className='div-links'>
    
            {" - "}
            <NavLink className={setActiveClass} to="/pokemones">
                Pokemones
            </NavLink>
            </div> 
            </nav>
        </div>
    );
}
