import React from 'react';
import {
    SiBootstrap,
    SiCss3, SiDjango, SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript, SiMysql,
    SiPostman, SiReact,
    SiSass,
    SiTailwindcss,
} from "react-icons/si";

import python from '../assets/icons/python.png'
import {navigateInPage} from "../App";

function HomeAboutSection() {
    return (
        <div className={""}>
            <h3 className={"text-main-100 text-xl lg:text-2xl font-bold leading-3"}>DEVELOPER</h3>
            <h1 className={"text-6xl sm:text-8xl font-bold text-gray-800 dark:text-gray-100"}>Boyan</h1>
            <h1 className={"text-6xl sm:text-8xl font-bold text-gray-800 dark:text-gray-100"}>Yonkov</h1>
            <button
                className={`bg-gradient-to-r from-main-80 to-main-100 mt-1 p-2 px-5 font-semibold text-gray-200
                hover:scale-110 ease-in-out duration-300`}
                onClick={() => navigateInPage("about")}
            >
                About Me</button>

            <h4 className={"dark:text-customDarkGray font-bold text-2xl mt-16 text-gray-800"}>Skills:</h4>
            <div className={"flex flex-row text-4xl space-x-1.5 flex-wrap max-w-[100%]"}>
                <SiJavascript className={"text-[#f7df1e] hover:scale-[1.10] ease-in-out duration-200 "}/>
                <SiReact className={"text-[#61dafb] hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiHtml5 className={"text-[#e83c2c] hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiCss3 className={"text-[#006bc0] hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiTailwindcss className={"text-[#69bfb4] hover:scale-[1.10] ease-in-out duration-200"}/>
                {/*<SiSass className={"text-[#cd6799] hover:scale-[1.10] ease-in-out duration-200"}/>*/}
                <SiBootstrap className={"text-[#7111f5] hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiPostman className={"text-[#fd6c35] hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiGit className={"text-[#f05033] hover:scale-[1.10] ease-in-out duration-200"}/>
                <img src={python} alt={"python"} className={"h-8 hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiDjango className={"text-[#2ba977] hover:scale-[1.10] ease-in-out duration-200"}/>
                <SiMysql className={"text-[#00618a] text-4xl hover:scale-[1.10] ease-in-out duration-200"}/>
            </div>
        </div>
    );
}

export default HomeAboutSection;
