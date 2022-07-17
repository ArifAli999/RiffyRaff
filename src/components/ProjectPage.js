import React from 'react'
import ProjectComp from './ProjectComp'

function ProjectPage() {
    return (
        <div className='mt-20  w-full  mb-20 relative'>
            <div className='text-lightgray flex  h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	mb-10 w-full bg-  uppercase '>
                <div className='w-full overflow-clip'>
                    <h2 className='text-4xl absolute top-0 md:text-8xl whitespace-pre -ml-14 text-lightblack borderh2'> PROJECTS <span className='diffout'>WORK </span>
                        PROJECTS <span className='diffout'>WORK </span>
                        PROJECTS <span className='text-gray-'>WORK</span>PROJECTS</h2>
                </div>

            </div>

            <div className='grid md:grid-cols-3 gap-8 mt-20 mb-10 w-[85%] mx-auto'>
                <ProjectComp title='Twitter Clone.' desc='This is a fullstack application I built for the purpose of expanding my skillset to the back end as well.
                   My aim was to learn more in depth about PostgreSQL and Prisma' />

                <ProjectComp title='Pintrest Clone.'
                    desc='This is another full stack application built from the ground up to gain valuable working experience with state managers. This application contains all the necessary features such as authentication, user storage, databases, caching and revalidation of data and much more.  ' />
                <ProjectComp title='eSports Game Tracker.'
                    desc='This is an application I built for a client, This client was looking for an eSports tracker for his game community, This modern web application was built which lets users track any upcominng, live or past eSports games. Future plans of developing a mobile application.' />
                <ProjectComp title='Self Checkout System.'
                    desc='This was a project on which I worked in an agile team to develop a self checkout system for a restaurant. We implemented a fully functioning self checkout system that lets customers make orders by scanning the QR codes on their tables, The app was bundled with loads of features such as a reservation managment system, user feed back system, Stripe integration, Inventory managment, admin panels and more.' />
                <ProjectComp title='eCommerce application.'
                    desc='An eCommerce application I built as per the provided requirements, The client was looking for a low cost alternative to Shopify but still maintain the core and essential features of an eCommerce. I provided a low cost solution by implenting a free headless eCommerce and saving the client over $200 annually.' />
                <ProjectComp title='Blog.'
                    desc='An eCommerce application I built as per the provided requirements, The client was looking for a low cost alternative to Shopify but still maintain the core and essential features of an eCommerce. I provided a low cost solution by implenting a free headless eCommerce and saving the client over $200 annually.' />
                <ProjectComp title='Global warming tracker.'
                    desc='This is a project I did to get familiar with Cloud architecture and deployment, For this project Twitter and Google Maps API were used to build the project, The application was deployed on a virtual machine on Google Cloud with custom setup. ' />












            </div>
        </div>
    )
}

export default ProjectPage