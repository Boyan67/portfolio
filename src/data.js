import {
    SiCss3,
    SiDjango,
    SiGithub,
    SiHtml5,
    SiJavascript, SiMysql,
    SiPostman,
    SiReact,
    SiSass,
    SiTailwindcss
} from "react-icons/si";
import template from "./assets/template.png";
import python from "./assets/icons/python.png";

export const skills = [
    <SiReact className={"text-[#61dafb] text-3xl"}/>,
    <SiJavascript className={"text-[#61dafb] text-3xl"}/>,
    <SiHtml5 className={"text-[#e83c2c] text-3xl"}/>,
    <SiCss3 className={"text-[#006bc0] text-3xl"}/>,
    <SiTailwindcss className={"text-[#69bfb4] text-3xl"}/>,
    <SiSass className={"text-[#cd6799] text-3xl"}/>,
    <SiPostman className={"text-[#fd6c35] text-3xl"}/>,
    <SiGithub className={"text-gray-400 text-3xl"}/>,
    <img src={python} alt={"python"} className={"h-8 hover:scale-[1.10] ease-in-out duration-200"}/>,
    <SiDjango className={"text-[#2ba977] text-3xl"}/>,
    <SiMysql className={"text-[#00618a] text-3xl"}/>
]
export const projects = [
    {image: template, skills: skills, title: "An Application I built", type: "MOBILE APP"},
    {image: template, skills: skills, title: "An Application I built", type: "MOBILE APP"},
    {image: template, skills: skills, title: "An Application I built", type: "MOBILE APP"},
    {image: template, skills: skills, title: "An Application I built", type: "MOBILE APP"},
];

