import React from 'react'
import ProjectComp from './ProjectComp'

function ProjectPage() {
    return (
        <div className='mt-20  w-full  mb-20'>
            <div className='text-mediumgray flex h-[100px] flex-nowrap items-center text-xl font-popp tracking-wider	mb-10 w-full bg-tonedblack  uppercase'>
                <div className='w-full overflow-clip'>
                    <h2 className='text-4xl md:text-6xl whitespace-pre'> PROJECTS <span className='text-purple-500'>PROJECTS </span>
                        PROJECTS <span className='text-gray-300'>PROJECTS </span>
                        PROJECTS <span className='text-purple-500'>PROJECTS </span></h2>
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mt-20 mb-10 w-[80%] mx-auto'>
                <ProjectComp title='Twitter Clone.' />
                <ProjectComp title='Pintrest Clone.' />
                <ProjectComp title='eSports Game Tracker.' />
                <ProjectComp title='Self Checkout System.' />
                <ProjectComp title='eCommerce application.' />
                <ProjectComp title='Blog.' />
                <ProjectComp title='Global warming tracker.' />












            </div>
        </div>
    )
}

export default ProjectPage