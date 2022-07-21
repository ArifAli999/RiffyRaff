import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { AnimateSharedLayout } from "framer-motion"
import ThankYou from './ThankYou'

function ContactForm({ submit, email, name, message, setName, setEmail, setMessage, emailSent }) {
    return (


        <AnimatePresence>


            <motion.div layout
                initial={{ opacity: 0.7, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                exit={{ x: 500 }}
                className='text-black flex flex-col md:p-8 gap-4 mt-5 w-[100%] h-full'>

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




                    </div></>)}



            </motion.div>

        </AnimatePresence >





    )
}

export default ContactForm