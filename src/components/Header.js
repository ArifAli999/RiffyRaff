import React from 'react'

function Header() {
    return (
        <div className='sticky  top-0 md:w-[80%] mx-auto'>
            <nav className="flex items-center  gap-10 flex-wrap  mt-10 mb-5 font-os">
                <li className='list-none text-[#949494] flex-1'>Logo</li>
                <li className='list-none text-[#949494] font-thin'>About</li>
                <li className='list-none text-[#949494] font-thin'>Experience</li>
                <li className='list-none text-[#949494] font-thin'>Work</li>
                <li className='list-none text-[#949494] font-thin'>Contact</li>
            </nav>
        </div>
    )
}

export default Header