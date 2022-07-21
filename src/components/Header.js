import React from 'react'
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className=' w-full md:w-[80%] mx-auto '>
            <nav className="flex items-center justify-center md:justify-between w-full  gap-10 flex-wrap  mt-10 mb-5 font-os">
                <div className='md:flex-1 hidden md:block'>
                    <Link to="techstack"
                        spy={true}
                        smooth={true}>
                        <li className='list-none text-white flex-1 '></li>
                    </Link>
                </div>
                <div className='w-fit'>
                    <Link to="about"
                        spy={true}
                        smooth={true}>
                        <li className='list-none text-purple-500 flex-1  font-popp text-sm font-semibold cursor-pointer hover:underline underline-offset-4 underline decoration-purple-600 decoration-4	 hover:decoration-white transition-all duration-300 ease-linear '>WHO</li>
                    </Link>
                </div>
                <div className='w-fit'>
                    <Link to="work"
                        spy={true}
                        smooth={true}>
                        <li className='list-none text-purple-500 flex-1  font-popp text-sm font-semibold cursor-pointer hover:underline underline-offset-4 underline decoration-purple-600 decoration-4	 hover:decoration-white transition-all duration-300 ease-linear'>WORK</li>
                    </Link>
                </div>
                <div className='w-fit'>
                    <Link to="contact"
                        spy={true}
                        smooth={true}>
                        <li className='list-none text-purple-500 flex-1  font-popp text-sm font-semibold cursor-pointer hover:underline underline-offset-4 underline decoration-purple-600 decoration-4	 hover:decoration-white transition-all duration-300 ease-linear'>LETS WORK</li>
                    </Link>
                </div>


            </nav>
        </div>
    )
}

export default Header