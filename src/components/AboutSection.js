import React from 'react';
import {MdWork} from "react-icons/md";
import {BiCircle} from "react-icons/bi";
import {FaGraduationCap} from "react-icons/fa";
import SkillsIcon from "./SkillsIcon";

function AboutSection({aboutText, languages, frameworks, software}) {
    const titles = "text-main-100 font-bold text-xl mt-6"
    return (
        <div className={"px-4 py-6"}>
            <h1 className={titles}>ABOUT ME</h1>
            <p className={"text-gray-200"}>{aboutText}</p>

            <h1 className={titles}>WORK EXPERIENCE</h1>
            <div className={"text-gray-200 mt-2"}>
                <div className={"flex flex-row space-x-1"}>
                    <MdWork className={"text-4xl"}/>
                    <div>
                        <p className={"font-bold ml-2 text-md lg:text-lg"}>React Developer -</p>
                        <p className={"text-xs ml-2"}>Jul 2022 - Nov 2022</p>
                    </div>
                    <p className={"italic text-md lg:text-lg"}>Kulinarcho, BG</p>
                </div>

                <div className={"h-[65px] bg-gray-200 w-1 rounded ml-4 -mt-1.5 mb-2"}></div>

                <div className={"flex flex-row space-x-1"}>
                    <BiCircle className={"text-3xl ml-1"}/>
                    <div>
                        <p className={"font-bold ml-2 text-md lg:text-lg -mt-1"}>React Developer -</p>
                        <p className={"text-xs ml-2 text-xs"}>Jul 2022 - Nov 2022</p>
                    </div>
                    <p className={"italic text-md lg:text-lg -mt-1"}>Kulinarcho, BG</p>
                </div>
            </div>

            <h1 className={titles}>EDUCATION</h1>
            <div>
                <div className={"text-gray-200 mt-2"}>
                    <div className={"flex flex-row space-x-1"}>
                        <FaGraduationCap className={"text-4xl"}/>
                        <div>
                            <p className={"font-bold ml-2 text-md lg:text-lg"}>React Developer -</p>
                            <p className={"text-xs ml-2"}>Jul 2022 - Nov 2022</p>
                        </div>
                        <p className={"italic text-md lg:text-lg"}>Kulinarcho, BG</p>
                    </div>

                    <div className={"h-[65px] bg-gray-200 w-1 rounded ml-4 -mt-1.5 mb-2"}></div>

                    <div className={"flex flex-row space-x-1"}>
                        <BiCircle className={"text-3xl ml-1"}/>
                        <div>
                            <p className={"font-bold ml-2 text-md lg:text-lg -mt-1"}>React Developer -</p>
                            <p className={"text-xs ml-2 text-xs"}>Jul 2022 - Nov 2022</p>
                        </div>
                        <p className={"italic text-md lg:text-lg -mt-1"}>Kulinarcho, BG</p>
                    </div>

                    <div className={"h-[65px] bg-gray-200 w-1 rounded ml-4 mb-2"}></div>

                    <div className={"flex flex-row space-x-1"}>
                        <BiCircle className={"text-3xl ml-1"}/>
                        <div>
                            <p className={"font-bold ml-2 text-md lg:text-lg -mt-1"}>React Developer -</p>
                            <p className={"text-xs ml-2 text-xs"}>Jul 2022 - Nov 2022</p>
                        </div>
                        <p className={"italic text-md lg:text-lg -mt-1"}>Kulinarcho, BG</p>
                    </div>
                </div>

            </div>

            <h1 className={titles}>LANGUAGES</h1>
            <div className={"flex flex-row space-x-1.5 mt-1.5"}>
                {languages.map((item) => (
                    <SkillsIcon icon={item} dark={true}/>
                ))}
            </div>

            <h1 className={titles}>FRAMEWORKS</h1>
            <div className={"flex flex-row space-x-1.5 mt-1.5"}>
                {frameworks.map((item) => (
                    <SkillsIcon icon={item} dark={true}/>
                ))}
            </div>

            <h1 className={titles}>SOFTWARE TOOLS</h1>
            <div className={"flex flex-row space-x-1.5 mt-1.5"}>
                {software.map((item) => (
                    <SkillsIcon icon={item} dark={true}/>
                ))}
            </div>

        </div>
    );
}

export default AboutSection;
