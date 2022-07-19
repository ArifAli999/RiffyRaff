import autoprefixer from 'autoprefixer';
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"

function HeroBanner() {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 1 })

    const animation = useAnimation();



    useEffect(() => {
        if (isInView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'easeIn', duration: 0.2, bounce: 0.3
                }
            })
        }
        if (!isInView) {
            animation.start({ opacity: 0 })
        }
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return (
        <div className='bg- w-full min-h-[100vh] mx-auto p- mt-4 grid justify-content-center items-center relative '>



            <div

                className=' max-w-[100%] text-white mx-auto relative flex  w-[85%] items-center justify-center'>

                <motion.p
                    animate={animation}
                    initial={{ x: -100, opacity: 0 }}

                    transition={{ duration: 0.4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    ref={ref}
                    className='text-gray-300/90    mt-2 font-popp leading-normal font-extrabold text-lg md:text-[3vw] tracking-wide	 transition-all duration-200 ease-linear  group-hover:text-gray-300 relative' >Let's build the
                    <motion.p
                        animate={{ rotate: 0 }}
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: 8 }}
                        transition={{ duration: 2.5, delay: 1, ease: [0.17, 0.67, 0.83, 0.67] }}
                        className='bg-purple-600 rotate-10   px-2 md:px-4 py-2 font-extrabold mr-2 ml-2 display: inline-block'>product</motion.p> you have been dreaming of.
                </motion.p>



            </div>

            <div className='absolute bottom-0 left-0 right-0 text-center'>

            </div>
        </div>
    )
}

export default HeroBanner