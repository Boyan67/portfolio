import {
    SiBootstrap,
    SiCss3,
    SiDjango, SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript, SiJetbrains, SiJira, SiJirasoftware, SiMysql,
    SiPostman, SiPycharm,
    SiReact,
    SiSass,
    SiTailwindcss, SiWebstorm
} from "react-icons/si";
import template from "./assets/project-images/template.png";
import kulinarcho from "./assets/project-images/kulinarcho.png"
import dashboard from "./assets/project-images/dashboard-admin.png"
import mealPlan from "./assets/project-images/meal-plan.png"
import bored from "./assets/project-images/bored.png"
import python from "./assets/icons/python.png";

export const skills = [
    <SiReact className={"text-[#61dafb] text-3xl"}/>,
    <SiJavascript className={"text-[#f7df1e] text-3xl"}/>,
    <SiHtml5 className={"text-[#e83c2c] text-3xl"}/>,
    <SiCss3 className={"text-[#006bc0] text-3xl"}/>,
    <SiTailwindcss className={"text-[#69bfb4] text-4xl"}/>,
    <SiSass className={"text-[#cd6799] text-3xl"}/>,
    <SiPostman className={"text-[#fd6c35] text-3xl"}/>,
    <SiGit className={"text-[#f05033] text-3xl"}/>,
    <img src={python} alt={"python"} className={"h-8"}/>,
    <SiDjango className={"text-[#2ba977] text-3xl"}/>,
    <SiMysql className={"text-[#00618a] text-3xl"}/>,
    <SiBootstrap className={"text-[#7111f5] text-3xl"}/>,
    <SiJira className={"text-[#227ffa] text-2xl"} />,
    <SiWebstorm className={"text-[#1b91d7] text-2xl"}/>,
    <SiPycharm className={"text-[#20d88e] text-2xl"}/>
]


export const languages = [skills[1], skills[2], skills[3], skills[8], skills[10]]
export const frameworks = [skills[0], skills[4], skills[5], skills[9], skills[11]]
export const software = [skills[6], skills[7], skills[12], skills[13], skills[14]]

export const projects = [
    {image: kulinarcho, skills: [skills[0], skills[1], skills[3]], title: "Kulinarcho", type: "MOBILE APP", link: "https://kulinarcho.com/mobile"},
    {image: dashboard, skills: [skills[0], skills[4], skills[2], skills[3]], title: "Admin Dashboard", type: "WEBSITE", link: "https://github.com/Boyan67/admin-dashboard"},
    {image: mealPlan, skills: [skills[2], skills[3],skills[11], skills[8], skills[9], skills[10]], title: "Meal Plan", type: "WEBSITE", link: "https://github.com/Boyan67/meal_plan"},
    {image: bored, skills: [skills[0], skills[1], skills[3], skills[4]], title: "Bored!", type: "MOBILE APP", link: "#"},
];

