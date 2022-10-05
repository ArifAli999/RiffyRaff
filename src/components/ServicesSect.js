import React from 'react'
import Carousel from './Carousel'
import { motion } from "framer-motion"


function ServicesSect() {

    const container = {
        hidden: { opacity: 0, transition: { when: "afterChildren" } },

        show: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.5,
                staggerDirection: 1,
                type: 'easeIn'


            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <div className='w-full  z-50  mt-0 md:mt-16 md:p-0 p-6 '>

            <motion.div

                className=''>


                <motion.ul
                    variants={container}
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    initial="hidden"
                    className='list-none grid md:grid-cols-3 gap-4 mt-10  h-min md:w-[85%] mx-auto'>
                    <motion.li variants={item}>
                        <Carousel title='Pintrest Clone.'
                            aim={<><p className='text-gray-300 text-xs p-4'>This is a fullstack web application I built to enhance my skills with state managment in modern web apps. State managment is argubly the most important aspect of an application and I had struggled with this aspect in a previous application I worked on.
                                <p className='mt-4 text-gray-500'>A full brief explanation of the development process, design process and learning outcomes can be found on my blog.</p></p></>}
                            pro={<><p className='text-gray-300 text-xs px-4 py-4'>This application provides a lot functionality such as user authetication, dynamic post pages, user profiles, user profile settings, favourites, user bookmark, bookmark lists and much more.</p><br />
                            </>}
                            github={'https://github.com/ArifAli999/PintrestClone'}
                            link={'https://pintrest-clone-beta.vercel.app/'}
                            tech={<div className='flex flex-col'>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Next.js was used as the front end and back end.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>NextJS serverless API Routes were used to connect to Firestore using the Firestore NodeJS SDK.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>React-Query was used for cache and server state managment.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Zustand was used throughout the application for managing global state of the application, Crucial information such as user session, user info and more were stored in the state.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Googles Firestore was used for data managment, Firebase Storage and Authentication were also used. Firebase Cloud Functions were also used in this project.</p></div>}
                            skills={<><p className='text-gray-400 text-xs p-4'>
                                This application helped me understand the concept of NoSQL databases better, I had more experience with relation databases till this project but this project was great exposure. I also learned how to effectively and efficently manage state using Zustand and I dont think I will use any other state manager for atleast my own personal projects.
                                I also realized that React query is the only library I need to make all of my data realtime instantly without any additional database config or setups.</p></>}
                        />
                    </motion.li>

                    <motion.li variants={item}>
                        <Carousel title='Twitter Clone.'
                            aim={<><p className='text-gray-300 text-xs p-4'>This is a fullstack web application I built to work on my backend skills, The aim of the project was to build an application that has all the core functionalities of twitter, In this process I would learn more about managing databases and complex databases relationships.</p><br />
                            </>}
                            pro={<><p className='text-gray-300 text-xs p-4'>This application provides a lot of functionality such as user auth, user storage, user profile, profile settings, tweet, media tweets, like tweets, reply to tweets, delete/edit tweets, bookmark tweets, persistent layouts and much more.</p><br />
                            </>}
                            github={'https://github.com/ArifAli999/TwitterClone'}
                            link={'https://twitter-clone-roan-two.vercel.app'}
                            tech={<div className='flex flex-col'><p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Next.js was used as the front end and Supabase JS SDK was used for the backend.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>The entire design and layout of the application was created from scratch using Tailwind CSS only.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>SWR was used for cache and server state managment.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Supabase was used for the backend of the project along with an ORM known as Prisma.</p></div>}
                            skills={<><p className='text-gray-400 text-xs p-4'>
                                I thought I would use something like Redux for this application but I learned another library known as React Query instead and once I implemented it, I figured out that I didnt really need any kind of global state managment. This was only due to the fact that Supabase SDK provides a hook for user session which really helped with the development.
                                This project also taught me so much more about PostgreSQL. I'm now confidently able to write my own functions and triggers which I couldn't claim prior to this project.
                                I also learned about persistent layouts and displays for NextJS, which I believe really provides an instant boost to any web applications UI and UX.</p></>}
                        />
                    </motion.li>

                    <motion.li variants={item}>

                        <Carousel title='Tactical Timeout.'
                            aim={<><p className='text-gray-300 text-xs p-4'>This is an application that was built for a gaming community I was a part of. The aim of this application was to build an application that lets users quickly find eSports fixtures.</p></>}
                            pro={<><p className='text-gray-300 text-xs p-4'>
                                This application provides all the core functionalities of an eSports tracker, It was developed with performance as a vital and performs exceptionally well in terms of FCP and other vital web analytics.
                                The application allows users to find and track let users find and track any live, upcoming or past eSports fixture. </p><br />
                            </>}
                            github={'#'}
                            link={'https://mytactic.vercel.app/'}
                            tech={<div className='flex flex-col'><p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Next.js was used as the front end.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>The entire design and layout of the application was created from scratch using vanilla CSS and Bulma.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>SWR was used for cache and server state managment.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>PandaScore API was used for game data.</p></div>}
                            skills={<><p className='text-gray-400 text-xs p-4'>
                                This project was my first exposure to Next.js. I had started building this project in CRA but then in production I realized that my API provider is very much like Stripe and only allows calls to be made on the server.
                                This is when I found out about Next.js and decided to switch my project to Next.js I believe NextJs has filled all the gaps CRA had left, I almost instantly fell in love with the inbuilt file routing system provided by Next.js. Then I allso discovered the serverless API routes provided by NextJS which are essentially your own inbuilt servers ready and waiting as soon as you create your next app. NextJS provides you the ability to write your own production level APIs without any kind of server setup or whatsoever, which I believe in incredibly powerful.
                                NextJS is not a front end framework but a fullstack web framework. In my opinion NextJS can be used to build entire SaaS applications.
                                <br /><br />
                                Please checkout my blog for an indepth review of my experience with NextJS.</p></>}
                        />

                    </motion.li>

                    <motion.li variants={item}>
                        <Carousel title='eCommerce Application.'
                            aim={<><p className='text-gray-300 text-xs p-4'>An eCommerce application I built as per the provided requirements, The client was looking for a low cost alternative to Shopify but still maintain the core and essential features of an eCommerce. I provided a low cost solution by implenting a free headless eCommerce and saving the client over $200 annually.</p></>}
                            pro={<><p className='text-gray-300 text-xs p-4'>
                                This application provides all the core functionalities of a traditional eCommerce app, It was developed with performance as a vital and performs exceptionally well in terms of FCP and other vital web analytics as all my other applications.
                                The application lets users place an order, lets admin manage inventory and stock, pictures, variants, orders and so much more. </p><br />
                            </>}
                            github={'https://github.com/ArifAli999/swetstore'}
                            link={'https://sweet-store.vercel.app/'}
                            tech={<div className='flex flex-col'>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Next.js was used at the front end of the application, Tailwind CSS was used for the front end development along with Framer motion to add animation.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>React Context API was used for managing state.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Commerce.js - A headless eCommerce platform was selected as the low cost alternative to Shopify and was used for the entirety of this project.</p></div>}
                            skills={<><p className='text-gray-400 text-xs p-4'>
                                This was one of my first real freelance gigs so I was very excited going into this, I hadn't built applications of this scale previous to this so I believe this was a perfect learning and invaluable experience.

                                <br /><br />
                                This application helped me learn how to implement and integrate Stripe API for developing SaaS products, I also mastered the Context API while working on this project casue that was massively used throughout.
                                I gained some invaluable experience with developing modern aesthetic and user friendly UI's. I also started learning a new animation library known as Framer due to this project.</p></>}
                        />
                    </motion.li>

                    <motion.li variants={item}>
                        <Carousel title='Self Checkout System.'
                            aim={<><p className='text-gray-300 text-xs p-4'>This was a fulstack web application developed along with a team of 3 other developers, We worked in an agile process to implement a self checkout system for a restaurant based in Newcastle during the pandemic.</p></>}
                            pro={<div className='flex flex-col'>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Lets customers scan a QR code and access the menu of the restaurant and make an order directly.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Stripe payment integration along with Apple pay.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Admin - Live current orders, past orders, food inventory, dish availability, reservation managment, payment history, recepits.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Reservation System - Users can book a table at the restaurant in advance, admins also have the right to edit/delelete reservations..</p>
                            </div>}
                            github={'https://github.com/Domas112/KV6002-Team-Project/tree/main'}
                            link={'#'}
                            tech={<div className='flex flex-col'>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray w-full'>OOP PHP was used mainly for the core of the application.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray w-full'>Bootstrap was used for the styling and user interface development of the application. jQuery was also used to implement certain features.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray w-full'>Stripe for payments and processing orders.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray w-full'>Vanilla Javascript was used throughout the entirety of the application.</p>
                            </div>}
                            skills={<><p className='text-gray-400 text-xs p-4'>
                                This appication was a really good learning experience especially as I got to work along side a bunch of talented developers and its always nice to look at things from a different fresh perspective.

                                <br />
                                This application gave me confidence in my abilities to implement a full stack web application without the use of any kind of web frameworks.</p></>}
                        />
                    </motion.li>

                    <motion.li variants={item}>
                        <Carousel title='Notes Mobile App.'
                            aim={<><p className='text-gray-300 text-xs p-4'>
                                This was my first project I built to learn and explore React Native, This project helped me gained experience and familarity designing UIs and UX for mobile applications,
                                The aim was to basically learn and explore mobile development.


                            </p></>}
                            pro={<div className='flex flex-col'>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>
                                    This application provides most of the functionatily one would expect from a Notes application, Users can create profiles and then create notees, users are
                                    provided with functionality to edit their notes at any moment, users can also delete a note and the note is retained in Recently Deleted which can be used to retrive or permanently delete a note.
                                    The application also provides features such as Usernames, ability to change email, username and password.
                                    The application also provides stack navigation, modal navigations, tabs and many custom navigations.</p>
                            </div>}
                            github={'https://github.com/ArifAli999/Native_app'}
                            link={'https://twitt-apii.vercel.app/'}
                            tech={<div className='flex flex-col'>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>React Native and Expo Framework was used to setup and get to development quickly</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>React Native Navigation was used for creating and implementing all kinds of Navigation functionalities</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Google Firebase was used for the backend, Firestore Databas and Firebase Auth were used.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Tailwind CSS was used to develop the design and UI</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>React Query was used to make sure everything on the application is always Real Time.</p>
                                <p className='text-gray-400 text-xs border-b p-4 border-lightgray'>Zustand was used for global state managment of the application.</p>

                            </div>}
                            skills={<><p className='text-gray-400 text-xs p-4'>
                                This application gave me tremendous experiece and confidence in developing modernn mobile applications that run smoothly on any device,
                                I realized my skills from using React on the web could be easily transferred over and I was able to quickly develop advanced features such as adding real time features, developing complex UI features such as Modal Navigation, Stack Navigation and more.

                            </p></>}
                        />
                    </motion.li>

                </motion.ul>
            </motion.div>

        </div>
    )
}

export default ServicesSect