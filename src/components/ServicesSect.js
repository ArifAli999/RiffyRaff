import React from 'react'
import Carousel from './Carousel'

function ServicesSect() {
    return (
        <div className='w-full  z-50  '>

            <div className='grid md:grid-cols-3 gap-4  h-min w-[85%] mx-auto'>



                <Carousel title='Pintrest Clone.'
                    aim={<><p className='text-gray-300 text-xs'>This is a fullstack web application I built to enhance my skills with state managment in modern web apps. State managment is argubly the most important aspect of an application and I had struggled with this aspect in a previous application I worked on.</p><br />
                        <p className='text-gray-300 text-xs'>A full brief explanation of the development process, design process and learning outcomes can be found on my blog.</p></>}
                    pro={<><p className='text-gray-300 text-xs'>This application provides a lot functionality such as user authetication, dynamic post pages, user profiles, user profile settings, favourites, user bookmark, bookmark lists and much more.</p><br />
                    </>}

                    tech={<><p className='text-gray-400 text-xs border-b p-4 border-bordergray'>Next.js was used as the front end and back end.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>NextJS serverless API Routes were used to connect to Firestore using the Firestore NodeJS SDK.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>React-Query was used for cache and server state managment.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>Zustand was used throughout the application for managing global state of the application, Crucial information such as user session, user info and more were stored in the state.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>Googles Firestore was used for data managment, Firebase Storage and Authentication were also used. Firebase Cloud Functions were also used in this project.</p></>}
                    skills={<><p className='text-gray-400 text-xs p-4'>
                        This application helped me understand the concept of NoSQL databases better, I had more experience with relation databases till this project but this project was great exposure. I also learned how to effectively and efficently manage state using Zustand and I dont think I will use any other state manager for atleast my own personal projects.
                        I also realized that React query is the only library I need to make all of my data realtime instantly without any additional database config or setups.</p></>}
                />

                <Carousel title='Twitter Clone.'
                    aim={<><p className='text-gray-300 text-xs'>This is a fullstack web application I built to work on my backend skills, The aim of the project was to build an application that has all the core functionalities of twitter, In this process I would learn more about managing databases and complex databases relationships.</p><br />
                        <p className='text-gray-300 text-xs'>A full brief explanation of the development process, design process and learning outcomes can be found on my blog.</p></>}
                    pro={<><p className='text-gray-300 text-xs'>This application provides a lot of functionality such as user auth, user storage, user profile, profile settings, tweet, media tweets, like tweets, reply to tweets, delete/edit tweets, bookmark tweets, persistent layouts and much more.</p><br />
                    </>}

                    tech={<><p className='text-gray-400 text-xs border-b p-4 border-bordergray'>Next.js was used as the front end and Supabase JS SDK was used for the backend.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>The entire design and layout of the application was created from scratch using Tailwind CSS only.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>SWR was used for cache and server state managment.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>Supabase was used for the backend of the project along with an ORM known as Prisma.</p></>}
                    skills={<><p className='text-gray-400 text-xs p-4'>
                        I thought I would use something like Redux for this application but I learned another library known as React Query instead and once I implemented it, I figured out that I didnt really need any kind of global state managment. This was only due to the fact that Supabase SDK provides a hook for user session which really helped with the development.
                        This project also taught me so much more about PostgreSQL. I'm now confidently able to write my own functions and triggers which I couldn't claim prior to this project.
                        I also learned about persistent layouts and displays for NextJS, which I believe really provides an instant boost to any web applications UI and UX.</p></>}
                />


                <Carousel title='Tactical Timeout.'
                    aim={<><p className='text-gray-300 text-xs'>This is an application that was built for a gaming community I was a part of. The aim of this application was to build an application that lets users quickly find eSports fixtures.</p></>}
                    pro={<><p className='text-gray-300 text-xs'>
                        This application provides all the core functionalities of an eSports tracker, It was developed with performance as a vital and performs exceptionally well in terms of FCP and other vital web analytics.
                        The application allows users to find and track let users find and track any live, upcoming or past eSports fixture. </p><br />
                    </>}

                    tech={<><p className='text-gray-400 text-xs border-b p-4 border-bordergray'>Next.js was used as the front end.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>The entire design and layout of the application was created from scratch using vanilla CSS and Bulma.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>SWR was used for cache and server state managment.</p>
                        <p className='text-gray-400 text-xs border-b p-4 border-bordergray'>PandaScore API was used for game data.</p></>}
                    skills={<><p className='text-gray-400 text-xs p-4'>
                        This project was my first exposure to Next.js. I had started building this project in CRA but then in production I realized that my API provider is very much like Stripe and only allows calls to be made on the server.
                        This is when I found out about Next.js and decided to switch my project to Next.js I believe NextJs has filled all the gaps CRA had left, I almost instantly fell in love with the inbuilt file routing system provided by Next.js. Then I allso discovered the serverless API routes provided by NextJS which are essentially your own inbuilt servers ready and waiting as soon as you create your next app. NextJS provides you the ability to write your own production level APIs without any kind of server setup or whatsoever, which I believe in incredibly powerful.
                        NextJS is not a front end framework but a fullstack web framework. In my opinion NextJS can be used to build entire SaaS applications.
                        <br /><br />
                        Please checkout my blog for an indepth review of my experience with NextJS.</p></>}
                />









            </div>

        </div>
    )
}

export default ServicesSect