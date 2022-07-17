import React from 'react'

function ServicesSect() {
    return (
        <div className='w-[85%] mx-auto  z-50  '>

            <div className='flex md:flex-row flex-col gap-6 h-full'>

                <div className='flex-1 flex  w-full flex-col  shadow-md shadow-black/80 h-full customb'>
                    <div className=' p-6 py-4 bg-black' >
                        <h2 className='text-white text-xl font-popp tracking-wider	 font-[300] uppercase'>
                            DOCUMENT
                        </h2>
                    </div>

                    <div className='border-r border-darkgray bg-black h-full px-6 py-2 mb-0'>
                        <p className='text-gray-500 font-light text-sm leading-normal mb-4'>
                            This is the first stage, This is where we lay down the client and user requirements and conduct all the necessary research regarding the project.
                            <br /><br />
                            During this stage the client is briefed about the project procedure and the team members involved, The client is also provided with an estimate timeframe and cost of the project so they can make a
                            well informed conclusive decision.
                        </p>
                    </div>


                </div>

                <div className='flex-1 flex  w-full flex-col mt-10 shadow-md shadow-black/80 h-full'>
                    <div className=' p-4 bg-purple-500 border-r border-purple-600 border-b-purple-800 border-b-4 '>
                        <h2 className='text-white text-xl font-popp tracking-wider	 font-[300] uppercase'>
                            DESIGN
                        </h2>
                    </div>

                    <div className='border-r border-darkgray bg-tonedblack h-full p-6'>
                        <p className='text-gray-500 font-light text-sm leading-normal'>
                            This is the first stage, This is where we lay down the client and user requirements and conduct all the necessary research regarding the project.
                            <br /><br />
                            During this stage the client is briefed about the project procedure and the team members involved, The client is also provided with an estimate timeframe and cost of the project so they can make a
                            well informed conclusive decision.
                        </p>
                    </div>


                </div>

                <div className='flex-1 flex  w-full flex-col  shadow-md shadow-black/80 h-full'>
                    <div className=' p-4 bg-purple-500 border-r border-purple-600 border-b-purple-800 border-b-4 '>
                        <h2 className='text-white text-xl font-popp tracking-wider	 font-[300] uppercase'>
                            DEVELOP
                        </h2>
                    </div>

                    <div className='border-r border-darkgray  bg-tonedblack h-full p-6'>
                        <p className='text-gray-500 font-light text-sm leading-normal'>
                            This is the first stage, This is where we lay down the client and user requirements and conduct all the necessary research regarding the project.
                            <br /><br />
                            During this stage the client is briefed about the project procedure and the team members involved, The client is also provided with an estimate timeframe and cost of the project so they can make a
                            well informed conclusive decision.
                        </p>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default ServicesSect