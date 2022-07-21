import React from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { BsPatchCheck } from 'react-icons/bs'
function ThankYou() {
    return (
        <AnimatePresence>
            <motion.div
                layout
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, x: 0, }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, delay: 0.2, type: 'easeIn' }}
                className='bg-black p-6 h-full rounded border border-bordergray shadow-md shadow-black/80'
            >
                <div className='flex items-center gap-10 flex-col h-full '>
                    <div className='text-white flex gap-4 items-center p-6'>

                        <p className='text-bold text-gray-300 font-os text-xl uppercase'>Thank you</p>
                    </div>

                    <div className='p-6 text-gray-400 font-popp text-thin text-center text-sm '>
                        Thank you for your time. <br />
                        I'll be in touch at the earliest possible.
                    </div>


                    <div className='p-0 text-gray-200 font-popp text-thin text-center text-xs'>
                        - Arif
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThankYou