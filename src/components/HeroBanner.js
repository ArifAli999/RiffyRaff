import autoprefixer from 'autoprefixer';
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';


function HeroBanner() {
    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                `Let's build the product you have been dreaming of. `
            ],
            typeSpeed: 60,
            backSpeed: 40,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])


    return (
        <div className='bg- w-full min-h-[80vh] p- mt-4 grid justify-content-center items-center relative '>

            <div className=' max-w-[95%] text-white mx-auto '>

                <span ref={el} className='text-gray-300/90 mt-2 font-popp  font-black text-[5vw] tracking-wide	 transition-all duration-200 ease-linear  group-hover:text-gray-300 ' />



            </div>

            <div className='absolute bottom-0 left-0 right-0 text-center'>
                More
            </div>
        </div>
    )
}

export default HeroBanner