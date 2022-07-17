import autoprefixer from 'autoprefixer';
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';


function HeroBanner() {



    return (
        <div className='bg- w-full min-h-[100vh] mx-auto p- mt-4 grid justify-content-center items-center relative '>



            <div className=' max-w-[100%] text-white mx-auto relative flex flex-col w-[85%] items-center justify-center'>

                <p className='text-gray-300/90   mt-2 font-popp leading-normal font-extrabold text-lg md:text-[3vw] tracking-wide	 transition-all duration-200 ease-linear  group-hover:text-gray-300 relative' >Let's build the
                    <span className='bg-purple-600 rotate-10  px-2 md:px-4 py-2 font-extrabold mr-2 ml-2'>product</span> you have been dreaming of.
                </p>


            </div>

            <div className='absolute bottom-0 left-0 right-0 text-center'>

            </div>
        </div>
    )
}

export default HeroBanner