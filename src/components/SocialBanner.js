import React from 'react';
import {SiDribbble, SiFreecodecamp, SiGithub, SiLinkedin} from "react-icons/si";

function SocialBanner() {
    return (
        <div className={"flex text-3xl space-x-1.5 md:space-x-0 text-gray-400 ml-[3%] mt-4 md:space-y-3 md:absolute md:right-10 md:top-1/2 md:-mt-32 md:flex-col md:text-5xl"}>
            <button className={"hover:text-[#0a66c2]"}>
                <SiLinkedin/>
            </button>
            <button className={"hover:text-[#1b1f23] dark:hover:text-white"}>
                <SiGithub/>
            </button>
            <button className={"hover:text-[#b2215a]"}>
                <SiDribbble/>
            </button>
            <button className={"hover:text-[#006400]"}>
                <SiFreecodecamp/>
            </button>
        </div>
    );
}

export default SocialBanner;
