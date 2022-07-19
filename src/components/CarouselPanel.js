import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { motion } from "framer-motion"




function CarouselPanel({ text, title, no }) {
    return (
        <Disclosure>
            {({ open }) => (
                <>

                    <Disclosure.Button className="flex w-full justify-between border-b items-center border-lightgray p-4 text-left text-sm font-medium text-white focus:outline-none  focus-visible:ring-opacity-75 group">
                        <div className='flex gap-6 items-center'>
                            <div className='w-5 h-5  border  border-gray-500 bg-darkgray leading-normal flex justify-center text-purple-500 font-black text-center rounded-full p-4 items-center'>
                                {no}
                            </div>
                            <div className='whitespace-wrap max-w-[80%]'>
                                {title}
                            </div>
                        </div>
                        <BiChevronDown
                            className={`${open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-purple-500 group-hover:rotate-90 transform transition-all duration-100 ease-in`}
                        />
                    </Disclosure.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-5 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className=" mb-0 flex text-sm text-gray-500 border-b border-lightgray"

                        >
                            {text}



                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}

export default CarouselPanel