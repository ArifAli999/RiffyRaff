import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { AnimateSharedLayout } from "framer-motion"
import ThankYou from './ThankYou'

function ContactForm({ submit, email, name, message, setName, setEmail, setMessage, emailSent }) {
    return (


        <AnimatePresence>

            <motion.div layout
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -500, delay: 10 }}
                className='text-black flex flex-col p-8 gap-4 mt-5 w-[100%]'>

                {emailSent && <ThankYou />}

                {emailSent ? null : (<>
                    <input
                        type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}
                        className='bg-lightblack text-base  p-4 placeholder-white font-os font-light outline-none focus:ring-purple-500 ring-purple-500 focus:ring-2 text-white' /><input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
                            className='bg-lightblack text-base  p-4 placeholder-white font-os font-light outline-none focus:ring-purple-500 ring-purple-500 focus:ring-2 text-white' /><textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}
                                className='bg-lightblack text-base  p-4 placeholder-white font-os font-light outline-none focus:ring-purple-500 ring-purple-500 focus:ring-2 text-white min-h-[190px]'></textarea><div className='flex w-full  justify-between mt-6 items-center'>
                        <div>
                            <button onClick={submit} className=' bg-purple-600 px-5 py-3 shadow-sm shadow-black/60 items-center justify-center gap-2 hover:border-purple-500 uppercase font-popp  font-medium rounded mx-auto  text-white group transition-all ease-linear duration-150'>
                                <span className='text-base'>
                                    &gt;
                                    <span className='group-hover:ml-2 transition-all duration-300 ease-in-out'> Send your inquiry</span>
                                </span>

                            </button>
                        </div>


                        <div>
                            <p>Hey</p>
                        </div>

                    </div></>)}



            </motion.div>

        </AnimatePresence>




    )
}

export default ContactForm