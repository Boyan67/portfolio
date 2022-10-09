import React from 'react';

function SkillsIcon({icon, dark}) {
    return (
        <div className={`rounded-full bg-white shadow w-[52px] h-[52px] justify-center flex items-center ${dark ? "dark:bg-[#343434]" : ''}`}>
            {icon}
        </div>
    );
}

export default SkillsIcon;
