import React from 'react'
import ProjectComp from './ProjectComp'
import { motion } from "framer-motion"
import OffersSect from './OffersSect'
import ServicesSect from './ServicesSect'


function ProjectPage() {
    return (
        <div className='mt-20  w-full  mb-20 relative' id='work'>
            <div className='text-lightgray flex mb-20 h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	 w-full bg-  uppercase '>
                <div className='w-full overflow-clip'>
                    <motion.h2
                        initial={{ opacity: 0.7, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2.5 }}
                        className='text-4xl absolute top-0 md:text-8xl whitespace-pre -ml-14 text-lightblack borderh2'> PROJECTS <span className='diffout'>MY </span>
                        WORK<span className='diffout'> PROJECTS </span>
                        WORK <span className='diffout'>PROJECTS </span>WORK
                        <span className='text-gray-'> MY </span>WORK </motion.h2>
                </div>

            </div>

            <div className='mt-20'>

                <ServicesSect />
            </div>
        </div>
    )
}

export default ProjectPage