import React from 'react';
import {SiDribbble, SiFreecodecamp, SiGithub, SiLinkedin} from "react-icons/si";

function SocialBanner() {
    return (
        <div className={"flex text-3xl space-x-1.5 md:space-x-0 text-gray-400 ml-[3%] mt-4 md:space-y-3 md:absolute md:right-10 md:top-1/2 md:-mt-32 md:flex-col md:text-5xl"}>
            <a className={"hover:text-[#0a66c2]"} href={"https://www.linkedin.com/in/boyan-yonkov/"} target={"_blank"} rel="noreferrer">
                <SiLinkedin/>
            </a>
            <a className={"hover:text-[#1b1f23] dark:hover:text-white"} href={"https://github.com/Boyan67/"} target={"_blank"} rel="noreferrer">
                <SiGithub/>
            </a>
            <a className={"hover:text-[#b2215a]"} href={"https://dribbble.com/bobi6767"} target={"_blank"} rel="noreferrer">
                <SiDribbble/>
            </a>
            <a className={"hover:text-[#006400]"} href={"https://www.freecodecamp.org/boyan67"} target={"_blank"} rel="noreferrer">
                <SiFreecodecamp/>
            </a>
        </div>
    );
}

export default SocialBanner;
