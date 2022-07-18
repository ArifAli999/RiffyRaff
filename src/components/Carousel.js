import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'

export default function Carousel({ title, aim, pro, tech, skills }) {
    return (
        <div className="h-min">
            <div className="flex-1 flex  w-full flex-col  shadow-md shadow-black/80 h-full border border-bordergray border-b-0">
                <div className=' p-4 border-b border-bordergray  bg-black flex-1' >
                    <h2 className='text-white text-base font-os tracking-wider	 font-[600] '>
                        {title}                          </h2>
                </div>

                <div className=' bg-black h-full w-full  flex flex-col'>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between border-b items-center border-bordergray p-4 text-left text-sm font-medium text-white hover:bg-bordergray focus:outline-none  focus-visible:ring-opacity-75">
                                    <div className='flex gap-6 items-center'>
                                        <div className='w-10 h-10 border  border-bordergray bg-darkgray leading-normal flex justify-center text-white font-black text-center rounded-full p-2'>
                                            1
                                        </div>
                                        <div>What was the aim of this project?
                                        </div>
                                    </div>
                                    <BiChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b border-bordergray"

                                >
                                    {aim}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between items-center border-b border-bordergray p-4 text-left text-sm font-medium text-white hover:bg-bordergray focus:outline-none  focus-visible:ring-opacity-75">
                                    <div className='flex gap-6 items-center'>
                                        <div className='w-10 h-10 border  border-bordergray bg-darkgray leading-normal flex justify-center text-white font-black text-center rounded-full p-2'>
                                            2
                                        </div>
                                        <div>Functionality of the application?
                                        </div>
                                    </div>
                                    <BiChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b border-bordergray">
                                    {pro}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between items-center border-b border-bordergray p-4 text-left text-sm font-medium text-white hover:bg-bordergray focus:outline-none  focus-visible:ring-opacity-75">
                                    <div className='flex gap-6 items-center'>
                                        <div className='w-10 h-10 border  border-bordergray bg-darkgray leading-normal flex justify-center text-white font-black text-center rounded-full p-2'>
                                            3
                                        </div>
                                        <div>What tech stack was used for this project?
                                        </div>
                                    </div>
                                    <BiChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className=" text-sm text-gray-500 border-b border-bordergray p-0">
                                    {tech}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between items-center border-b border-bordergray p-4 text-left text-sm font-medium text-white hover:bg-bordergray focus:outline-none  focus-visible:ring-opacity-75">
                                    <div className='flex gap-6 items-center'>
                                        <div className='w-10 h-10 border  border-bordergray bg-darkgray leading-normal flex justify-center text-white font-black text-center rounded-full p-2'>
                                            4
                                        </div>
                                        <div>What valuable skills were gained from this project?
                                        </div>
                                    </div>
                                    <BiChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b border-bordergray">
                                    {skills}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <div className=' border-b border-bordergray  bg-black flex-1 flex w-full justify-between items-center' >
                        <div className=''>
                            <button className='text-gray-300   font-bold font-os text-sm border-r  border-bordergray hover:bg-mediumgray   transition-all duration-300 ease-linear px-5 py-3 uppercase'>Demo</button>
                        </div>

                        <div className=''>
                            <button className='text-gray-300   font-bold font-os text-sm border-l border-bordergray  hover:opacity-80 hover:bg-bordergray  transition-all duration-300 ease-linear px-5 py-3 uppercase'>More</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}