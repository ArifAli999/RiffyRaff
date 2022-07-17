import React from 'react'

function ProjectComp({ title, desc }) {
    return (
        <div className='bg-darkgray border-t-2 border-purple-500  rounded shadow-lg shadow-black/90 flex flex-col  items-start	relative'>
            <div className=' px-6 py-4 mt-2'>
                <h2 className='text-white font-os uppercase text-base font-semibold'> {title} </h2>
            </div>

            <div className='h-full flex-1 px-6 mt-0 mb-6 '>
                <p className='text-gray-300 font-os text-sm leading-normal font-light line-clamp-4 '>
                    {desc}
                </p>
            </div>

            <div className='border-t px-6 h-full text-white border-darkgray flex items-center justify-between w-full mb-2'>
                <div className='py-2'>
                    <button className='text-gray-300  rounded-md font-bold font-os text-sm border border-gray-500 hover:bg-mediumgray   transition-all duration-300 ease-linear px-5 py-2 uppercase'>Demo</button>
                </div>

                <div className=''>
                    <button className='text-gray-300  rounded-md font-bold font-os text-sm border border-gray-500  hover:opacity-80 hover:bg-bordergray  transition-all duration-300 ease-linear px-5 py-2 uppercase'>Demo</button>
                </div>
            </div>

        </div>
    )
}

export default ProjectComp