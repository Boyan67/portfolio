import React from 'react';
import {FiSun} from 'react-icons/fi';
import logo from '../assets/Logo.png'
import {MdOutlineDarkMode} from "react-icons/md";
import {navigateInPage} from "../App";

function Navbar({darkMode, setDarkToggle}) {
    return (
        <div className={"flex flex-row  justify-between sm:mx-8 mx-2" }>
            <img src={logo} alt="Logo" className={"h-12 mt-4"}/>
            <div className={"flex flex-row space-x-5 text-gray-400 text-xl font-bold mt-6"}>
                <button onClick={() => navigateInPage("about")} className={"hover:text-gray-300"}>About</button>
                <button onClick={() => navigateInPage("projects")} className={"hover:text-gray-300"}>Work</button>
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
