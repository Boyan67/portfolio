import React from 'react';
import {FiSun} from 'react-icons/fi';
import logo from '../assets/Logo2.png'
import {MdOutlineDarkMode} from "react-icons/md";
import {navigateInPage} from "../App";

function Navbar({darkMode, setDarkToggle}) {
    return (
        <div className={"flex flex-row  justify-between sm:mx-8 mx-2 " }>
            <img src={logo} alt="Logo" className={"h-16 mt-2"}/>
            <div className={"flex flex-row space-x-5 text-gray-400 text-xl font-bold mt-5 mb-4"}>
                <button onClick={() => navigateInPage("about")} className={"link-effect"}>About</button>
                <button onClick={() => navigateInPage("projects")} className={"link-effect"}>Work</button>
                <button className={"p-1 -mt-3"} onClick={() => setDarkToggle(!darkMode)}>
                {darkMode ?
                    <FiSun className={"text-3xl hover:text-gray-300"}/>
                    :
                    <MdOutlineDarkMode className={"text-3xl hover:text-gray-300"}/> }
                </button>
            </div>
        </div>
    );
}

export default Navbar;
