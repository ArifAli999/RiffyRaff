import React from 'react'
import ServicesSect from './ServicesSect'

function OffersSect() {
    return (
        <><div className='w-full mx-auto  min-h-[200px] z-50 flex  mb-0 relative items-center justify-center mt-10 '>
            <div className='text-lightgray flex mb-20 h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	 w-full bg-  uppercase '>
                <div className='w-full overflow-clip'>
                    <h2 className='text-4xl absolute top-0 md:text-8xl whitespace-pre -ml-14 text-lightblack borderh2'> MY <span className='diffout'>PROCESS </span>
                        MY <span className='diffout'>PROCESS </span>
                        MY <span className='text-gray-'>PROCESS</span>MY</h2>
                </div>

            </div>



        </div><div className='mt-00 mb-0 h-full w-full  p-0'>

                <ServicesSect />

            </div></>
    )
}

export default OffersSect