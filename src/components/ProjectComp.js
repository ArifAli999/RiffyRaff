import React from 'react'

function ProjectComp({ title }) {
    return (
        <div className='bg-tonedblack border border-bordergray rounded h-full shadow-md shadow-black/90 flex flex-col'>
            <div className='flex-1 px-6 py-4'>
                <h2 className='text-white font-os uppercase text-base font-semibold'> {title} </h2>
            </div>

            <div className='h-full flex-1 px-6 mt-0 mb-4'>
                <p className='text-white font-popp text-xs font-thin '>
                    This is a fullstack application I built for the purpose of expanding my skillset to the back end as well.
                    This application is a fully functioning clone of Twitter built for educational purposes from the ground up by me.
                </p>
            </div>

            <div className='border-t p-0 h-full text-white border-darkgray flex items-center justify-between w-full'>
                <div className=''>
                    <button className='text-gray-300 font-normal font-popp text-sm border-r border-bordergray  hover:opacity-80 hover:bg-bordergray  transition-all duration-300 ease-linear px-6 py-3 uppercase'>Demo</button>
                </div>

                <div className=''>
                    <button className='text-gray-300 font-normal font-popp text-sm border-l border-bordergray hover:opacity-80 hover:bg-bordergray  transition-all duration-300 ease-linear px-6 py-3 uppercase'>More</button>
                </div>
            </div>

        </div>
    )
}

export default ProjectComp