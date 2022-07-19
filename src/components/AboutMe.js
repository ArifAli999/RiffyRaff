import React, { useState } from 'react'
import ServicesSect from './ServicesSect';
import { motion } from "framer-motion"

function AboutMe() {
    const [show, setShow] = useState(false);
    return (






        <div className='mt-20  w-full  mb-20 relative'>
            <div className='text-lightgray flex mb-20 h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	 w-full bg-  uppercase '>
                <div className='w-full overflow-clip'>
                    <motion.h2
                        initial={{ opacity: 0.7, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2.5 }}
                        className='text-4xl absolute top-0 md:text-8xl whitespace-pre -ml-14 text-lightblack borderh2'> ABOUT <span className='diffout'>ME </span>
                        ABOUT<span className='diffout'> ME </span>
                        ABOUT <span className='diffout'>ME </span>ABOUT
                        <span className='text-gray-'> ME </span>ABOUT </motion.h2>
                </div>

            </div>

            <motion.div
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.8 }}
                initial={{ opacity: 0 }}

                className='flex  w-[80%]  h-full z-50 mx-auto justify-content-center '>




                <div
                    className=' p-8 col-span-8  bg w-full '>

                    <p className='text-white/80 leading-loose font-popp mx-auto w-[90%] font-light text-base    transition-all duration-100 ease-linear mb-6'>
                        Hey there, my name is <span className='text-violet-600 font-bold'>Arif.</span></p>


                    <p className='text-gray-300/80 font-popp mt-4 leading-loose font-extralight text-base	 mx-auto w-[90%]'>
                        I'm a front end web developer with a passion for building highly performant, reliable and scalable web applications. In simple terms, I'm a problem solver.
                        I specialize in front end development but I'm also in the process of constantly learning
                        and enhancing my knowledge of the backend technologies as well. I have worked with a wide range of technologies so far and always looking to expore more.
                        I also specialize in crafting highly perfomant secure web applications using the <a className='text-pink-500  hover:text-purple-600 transition-all duration-300 ease-linear' href='https://jamstack.org/'>JAMstack architecture.</a>
                    </p>

                    <p className='text-gray-300/80 font-popp mt-2 leading-loose font-extralight text-base	 mx-auto w-[90%]'>
                        My interest in software and web development started back when I was 15 and was playing GTA San Andreas multiplayer, I discovered people were expanding and adding more to the game and decided I had to try it for myself, I started learning <a className='text-blue-400  underline-offset-2 hover:text-purple-600 transition-all duration-300 ease-linear' href='https://jamstack.org/'>LUA</a> which was used to write the scripts for the game,
                        After learning enough I had decided to start a server with a friend of mine, Then I discovered Wordpress as I had to create a website for my server which lead me down to a path of discovering my passion.</p>
                </div>







            </motion.div></div>








    )
}

export default AboutMe