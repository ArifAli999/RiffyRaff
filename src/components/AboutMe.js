import React, { useState } from 'react'
import ServicesSect from './ServicesSect';

function AboutMe() {
    const [show, setShow] = useState(false);
    return (
        <><div className='mx-auto gap-8 justify-between  z-50  w-[85%] h-[100%] p-2  relative group mt-6  '>






            <div className='flex flex-1 items-center p-4  md:w-full rounded max-h-fit z-50  transition-all duration-300 ease-linear'>

                <div className=' p-6 rounded'>

                    <p className='text-white/80 leading-loose font-popp mx-auto w-[100%] font-light text-base    transition-all duration-100 ease-linear mb-8'>
                        Hey there, my name is <span className='text-violet-600 font-bold'>Arif.</span></p>


                    <p className='text-gray-300/80 font-popp mt-6 leading-loose font-extralight text-lg	 mx-auto w-[90%]'>
                        I'm a front end web developer with a passion for building highly performant, reliable and scalable web applications. In simple terms, I'm a problem solver.
                        I specialize in front end development but I'm also in the process of constantly learning
                        and enhancing my knowledge of the backend technologies as well. I have worked with a wide range of technologies so far and always looking to expore more.
                        I also specialize in crafting highly perfomant secure web applications using the <a className='text-pink-500  hover:text-purple-600 transition-all duration-300 ease-linear' href='https://jamstack.org/'>JAMstack architecture.</a>
                    </p>

                    <p className='text-gray-300/80 font-popp mt-2 leading-loose font-extralight text-lg	 mx-auto w-[90%]'>
                        My interest in software and web development started back when I was 15 and was playing GTA San Andreas multiplayer, I discovered people were expanding and adding more to the game and decided I had to try it for myself, I started learning <a className='text-blue-400  underline-offset-2 hover:text-purple-600 transition-all duration-300 ease-linear' href='https://jamstack.org/'>LUA</a> which was used to write the scripts for the game,
                        After learning enough I had decided to start a server with a friend of mine, Then I discovered Wordpress as I had to create a website for my server which lead me down to a path of discovering my passion.   </p>
                </div>



            </div>







        </div>

        </>
    )
}

export default AboutMe