import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

function SocialBanner() {
    return (
        <div className='w-full flex border-t border-b border-bordergray gap-0  mb-10'>

            <div className='p-6 flex-1'>
                <div className='w-[85%] mx-auto flex items-center justify-center  p-4'>
                    <AiFillLinkedin className='text-mediumgray text-3xl mr-4 flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-600' size={30} />
                    <AiFillGithub className='text-mediumgray text-3xl mr-4 flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-purple-600' size={30} />
                    <CgWebsite className='text-mediumgray text-3xl mr-4 flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-yellow-600' size={30} />

                </div>
            </div>



        </div>
    )
}

export default SocialBanner