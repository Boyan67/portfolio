import Navbar from "./components/Navbar";
import HomeAboutSection from "./components/HomeAboutSection";
import React from 'react'
import {FaChevronCircleDown} from "react-icons/fa";
import SocialBanner from "./components/SocialBanner";
import ProjectCard from "./components/ProjectCard";
import {projects, skills} from "./data";
import AboutSection from "./components/AboutSection";

export function navigateInPage (ele){
    let offsetTop  = document.getElementById(ele).offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

function App() {

    const [darkToggle, setDarkToggle] = React.useState(true)

    return (
        <div className={`${darkToggle ? 'dark' : ''}`}>
            <div className={"bg-gray-100 dark:bg-gradient-to-tl from-black to-[#303030] h-screen" +
                ""}>
                <Navbar darkMode={darkToggle} setDarkToggle={setDarkToggle}/>
                <div className={"absolute lg:left-[17%] left-[3%] top-1/4 z-10"}>
                    <HomeAboutSection/>
                </div>
                <div className={"absolute bottom-0 right-0 -mr-32 -mb-28"}>
                    <div style={{clipPath: 'inset(100px);'}}
                         className={"w-[200px] lg:h-[800px] lg:w-[800px] rounded-full " +
                             "bg-gradient-to-tl from-[transparent] to-main-45 "}/>
                </div>
                <button
                    onClick={() => navigateInPage("projects")}
                    className={"bottom-5 absolute -bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "}>
                    <p className={"text-2xl font-semibold text-customGray"}>Work</p>
                    <FaChevronCircleDown
                        className={"text-6xl text-main-100 rounded-full drop-shadow-lg hover:scale-110 ease-in-out duration-300"}/>
                </button>

                <SocialBanner/>

            </div>

            <div id={"projects"}
                 className={"bg-gray-100 dark:bg-gradient-to-tl from-gray-300 to-gray-50 flex flex-col"}>
                <div className={"flex flex-row text-4xl font-bold justify-center p-12 space-x-2"}>
                    <p className={"text-main-100"}>//</p>
                    <p className={"text-gray-800"}>PROJECTS</p>
                    <p className={"text-main-100"}>//</p>
                </div>
                <div className={"flex flex-row flex-wrap justify-around w-[95%] lg:w-[70%] self-center"}>
                    {projects.map((project) => (
                        <ProjectCard
                            skills={project.skills}
                            title={project.title}
                            type={project.type}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>

            <div
                id={"about"}
                className={"bg-gray-100 dark:bg-gradient-to-tl from-black to-[#303030] flex justify-center"}
            >
                <div className={"w-[100%] lg:w-[66%]"}>
                    <div className={"flex flex-row text-4xl font-bold justify-center pt-10 space-x-2"}>
                        <p className={"text-main-100"}>//</p>
                        <p className={"text-gray-300"}>ABOUT</p>
                        <p className={"text-main-100"}>//</p>
                    </div>

                    <AboutSection
                        aboutText={"Some random text here blah"}
                        languages={skills}
                        software={skills}
                        frameworks={skills}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
