import React from 'react'
import ProjectComp from './ProjectComp'

function ProjectPage() {
    return (
        <div className='mt-20  w-full  mb-20 relative'>
            <div className='text-lightgray flex  h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	mb-10 w-full bg-  uppercase '>
                <div className='w-full overflow-clip'>
                    <h2 className='text-4xl absolute top-0 md:text-8xl whitespace-pre -ml-14 text-lightblack borderh2'> PROJECTS <span className='diffout'>WORK </span>
                        PROJECTS <span className='diffout'>WORK </span>
                        PROJECTS <span className='text-gray-'>WORK</span>PROJECTS</h2>
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