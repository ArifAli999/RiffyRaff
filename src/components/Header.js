import React from 'react'
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className='  top-0 md:w-[80%] mx-auto '>
            <nav className="flex items-center justify-between w-full  gap-10 flex-wrap  mt-10 mb-5 font-os">
                <div className='flex-1'>
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
                        <li className='list-none text-purple-500 flex-1 font-popp text-sm font-semibold hover:underline hover:underline-offset-4 hover:decoration-white'>WHO</li>
                    </Link>
                </div>
                <div className='w-fit'>
                    <Link to="work"
                        spy={true}
                        smooth={true}>
                        <li className='list-none text-purple-500 flex-1 font-popp text-sm font-semibold hover:underline hover:underline-offset-4 hover:decoration-white'>WORK</li>
                    </Link>
                </div>
                <div className='w-fit'>
                    <Link to="contact"
                        spy={true}
                        smooth={true}>
                        <li className='list-none text-purple-500 flex-1 font-popp text-sm font-semibold hover:underline hover:underline-offset-4 hover:decoration-white'>LETS WORK</li>
                    </Link>
                </div>


            </nav>
        </div>
    )
}

export default Header