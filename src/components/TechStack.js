import React from 'react'
import { SiJavascript, SiHtml5, SiReact, SiMysql, SiPhp, SiGraphql, SiPostgresql, SiGit, SiRedux } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

function TechStack() {
    return (
        <div className='w-full border-t border-darkgray border-b mt-10  p-6 h-[150px]  ' id='techstack'>

            <div className='h-full flex items-center w-[85%] mx-auto gap-4 md:gap-10 md:flex-row md:flex-nowrap flex-wrap'>
                <SiJavascript size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-yellow-500 rounded-sm  flex-1' />
                <SiReact size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-300 rounded-sm  flex-1' />
                <SiMysql size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-gray-300 rounded-sm  flex-1' />
                <SiPhp size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-400 rounded-sm flex-1' />
                <DiNodejs size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-green-500 rounded-sm  flex-1' />
                <SiGraphql size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-pink-500 rounded-sm  flex-1' />
                <SiPostgresql size={40} className='text-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-cyan-500 rounded-sm  flex-1' />
                <SiGit size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-red-400 rounded-sm  flex-1' />
                <SiRedux size={40} className='text-gray-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-purple-400 rounded-sm  flex-1' />
            </div>
        </div>
    )
}

export default TechStack