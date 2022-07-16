import React, { useState } from 'react'
import ServicesSect from './ServicesSect';

function AboutMe() {
    const [show, setShow] = useState(false);
    return (







        <div className='grid grid-cols-12 w-full h-full z-50  border-b border-bordergray'>

            <div className=' p-8 col-span-9  bg w-full border-r h-full border-darkgray'>

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
                    After learning enough I had decided to start a server with a friend of mine, Then I discovered Wordpress as I had to create a website for my server which lead me down to a path of discovering my passion.   </p>
            </div>



            <div className='bg-purple- col-span-3 h-full flex flex-col'>
                <div className='flex-1 p-4 border-b  border-darkgray'>

                </div>

                <div className='flex-1 p-4 border-b border-darkgray'>

                </div>

            </div>



        </div>








    )
}

export default AboutMe