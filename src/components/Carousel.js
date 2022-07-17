import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'

export default function Carousel() {
    return (
        <div className="h-min">
            <div className="flex-1 flex  w-full flex-col  shadow-md shadow-black/80 h-full border border-bordergray border-b-0">
                <div className=' p-4 border-b border-bordergray  bg-black flex-1' >
                    <h2 className='text-white text-2xl font-popp tracking-wider	 font-[600] uppercase'>
                        DESIGN                          </h2>
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
                                        <div>What is your refund policy?
                                        </div>
                                    </div>
                                    <BiChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
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
                                        <div>What is your refund policy?
                                        </div>
                                    </div>
                                    <BiChevronDown
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}