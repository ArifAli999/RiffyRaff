import { Disclosure } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import CarouselPanel from './CarouselPanel'
import { AiFillGithub } from 'react-icons/ai'
import { GoLinkExternal } from 'react-icons/go'
import { Switch, Route, Link } from 'react-router-dom';


export default function Carousel({ title, aim, pro, tech, skills, github, link }) {
    return (
        <div className="h-min">
            <div className="flex-1 flex  w-full flex-col  shadow-md shadow-black/80 h-full border-t-4  border-purple-500 border-b-0">
                <div className=' p-4 border-lightgray  bg-darkgray flex-1 flex w-full items-center justify-between gap-4 ' >
                    <div className='flex-1'>
                        <h2 className='text-white text-base font-os tracking-wider	 font-[600] '>
                            {title}                          </h2>
                    </div>

                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size={20} className='text-gray-300/70' />
                    </a>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <GoLinkExternal size={20} className='text-gray-300/70' />
                    </a>
                </div>

                <div className=' bg-darkgray pt-0 p-0 h-full w-full  flex flex-col'>
                    <CarouselPanel text={aim} title='What was the aim of this project?' no='1' />
                    <CarouselPanel text={pro} title='What was the main functionality of the project' no='2' />
                    <CarouselPanel text={tech} title='What was the tech stack used in this project' no='3' />
                    <CarouselPanel text={skills} title='What skills and experience was gained from this project?' no='4' />








                </div>
            </div>
        </div>
    )
}