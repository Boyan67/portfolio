import React from 'react';
import SkillsIcon from "./SkillsIcon";

function ProjectCard({image, skills, title, type}) {
    return (
        <div className={"w-[500px] mb-10"} >
            <a href="#">
                <img src={image} alt="Placeholder img" className={"hover:scale-[1.03] hover:shadow-xl ease-in-out duration-300 shadow"}/>
            </a>
            <div className={"flex flex-row justify-center space-x-1.5 mt-2"}>
                {skills.map((skill) =>
                    <SkillsIcon icon={skill}/>
                )}
            </div>
            <div className={"flex flex-col text-center mt-1.5"}>
                <p className={"text-gray-800 font-bold text-3xl -mt-1.5"}>{title}</p>
                <p className={"text-main-100 font-bold text-sm -mt-1.5"}>{type}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
