import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence, useAnimation } from "framer-motion"
import emailjs from 'emailjs-com'
import { AiOutlineSend, AiOutlineMail } from 'react-icons/ai'
import ContactForm from './ContactForm';


function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {


            const serviceId = 'service_ld9oz3i';
            const templateId = 'template_456y09e';
            const userId = 'V6o39mWLuIeY1izAZ';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));


            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    const container = {
        hidden: { opacity: 0, transition: { when: "afterChildren" } },

        show: {
            opacity: 1,
            transition: {

                staggerChildren: 5.5,




            }
        }
    }

    const item = {
        hidden: { opacity: 0, transition: { duration: 2 } },
        show: { opacity: 1, transition: { duration: 2 } }
    }



    return (
        <div className='w-full h-full mb-6' id='contact'>
            <div className='flex flex-col  w-full relative'>
                <div className='text-white flex mb-0 md:mb- h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	 w-full bg-  uppercase '>
                    <div className='w-full overflow-clip '>
                        <motion.h2
                            initial={{ opacity: 0.7, x: -300 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 4.6 }}
                            className='text-4xl absolute top-0 md:text-8xl whitespace-pre -ml-14 text-lightblack borderh2 mt-6'> LETS WORK <span className='diffout'>TOGETHER </span>
                            BUILD YOUR<span className='diffout'> DREAMS </span>
                            LETS <span className='diffout'>WORK </span>START
                            <span className='text-gray-'>LETS </span>WORK </motion.h2>
                    </div>




                </div>

                <div className='bg-[#161717] z-50 min-h-[550px]  -mt-2 mb-10'>

                    <motion.div className='flex w-[80%] md:flex-row flex-col p-4 mx-auto gap-10 '>
                        <AnimateSharedLayout>
                            <motion.div className='md:w-[50%] ' layout>



                                <ContactForm name={name} email={email} message={message} submit={submit} setEmail={setEmail} setName={setName}
                                    setMessage={setMessage} emailSent={emailSent} />



                            </motion.div>
                        </AnimateSharedLayout>



                        <div className='text-white md:w-1/2  mb-10'>
                            <div className='mt-10 flex flex-col gap-6 items-center md:items-start'>

                                <div className=' rounded p-0  flex flex-col justify-between'>

                                    <motion.ul
                                        variants={container}
                                        whileInView="show"
                                        initial="hidden"
                                        className='list-none flex-wrap md:p-4 flex md:flex-col gap-10 justify-center text-white'>
                                        <li className='flex md:gap-4 items-center  ' variants={item}>
                                            <AiOutlineMail size={20} />
                                            <a className='text-sm'>aarif14@hotmail.com</a>
                                        </li>
                                        <li className='flex md:gap-4 items-center ' variants={item}>
                                            <AiOutlineMail size={20} />
                                            <a className='text-sm hover:text-purple-500 transition-all duration-300 ease-linear' href='https://www.linkedin.com/in/ali-arif-a58bb8240/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        </li>
                                        <li className='flex md:gap-4 items-center ' variants={item}>
                                            <AiOutlineMail size={20} />
                                            <a className='text-sm hover:text-purple-500 transition-all duration-300 ease-linear' href='https://github.com/ArifAli999' target="_blank" rel="noopener noreferrer">Github</a>
                                        </li>

                                    </motion.ul>

                                    <ul className='list-none flex-wrap md:p-4  mt-10 flex md:flex-col gap-10 text-white justify-center'>
                                        <li className='flex md:gap-4 items-center '>
                                            <AiOutlineMail size={20} />
                                            <a className='text-sm'>Blog</a>
                                        </li>

                                    </ul>

                                </div>


                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage