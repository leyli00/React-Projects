import React, { useState } from 'react'
import { BsBasket2 } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import { RxMoon } from "react-icons/rx";
import '../css/Header.css' 

function Header() {

    const [theme, setTheme] = useState(true);
    const changeTheme = () => {
        setTheme(!theme);
        if(theme){
            const root = document.getElementById("root");
            const input = document.getElementById("search-input");

            root.style.backgroundColor = "black";
            root.style.color = "white";

            input.style.background = "black";
            input.style.borderBottom = "1px solid white";
            input.style.color = "white";
        }else{
            const input = document.getElementById("search-input");
            root.style.backgroundColor = "white";
            root.style.color = "black";
            input.style.background = "white";
            input.style.borderBottom = "1px solid black";
            input.style.color = "black";
        }
    }

  return (
    <div className='header'>
        <div className='header-left'>
            <img src="./src/image/logo3.webp" className='logo-img' />
            <p className='logo-text' >Leyli A.Ş.</p>
        </div>

        <div className='header-right'>
            <input type="text" id="search-input" />
            <div className='icons'>
            <BsBasket2 className='icon' />
                {
                    theme ? <RxMoon className='icon' onClick={changeTheme} /> : <CgSun className='icon' onClick={changeTheme} /> 
                }
                
                
                

            </div>
        </div>
    </div>
  )
}

export default Header