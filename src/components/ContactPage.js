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

            // emailjs.send(serviceId, templateId, templateParams, userId)
            //    .then(response => console.log(response))
            //  .then(error => console.log(error));


            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }


    return (
        <div className='w-full  h-full'>
            <div className='flex flex-col min-h-[300px] w-full relative'>
                <div className='text-white flex mb-0 md:mb-20 h-[100px] mt-0 p-0 flex-nowrap items-center text-xl font-popp tracking-wider	 w-full bg-  uppercase '>
                    <div className='w-full overflow-clip'>
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

                <div className='bg-[#161717]/95   mt-0 mb-10'>

                    <motion.div className='flex w-[80%] p-4 mx-auto gap-10 '>
                        <AnimateSharedLayout>
                            <motion.div className='w-[50%]' layout>



                                <ContactForm name={name} email={email} message={message} submit={submit} setEmail={setEmail} setName={setName}
                                    setMessage={setMessage} emailSent={emailSent} />



                            </motion.div>
                        </AnimateSharedLayout>



                        <div className='text-white w-1/2 '>
                            <div className='mt-10 flex flex-col gap-6'>

                                <div className=' rounded p-0  '>

                                    <ul className='list-none p-4 flex flex-col gap-10 text-white'>
                                        <li className='flex gap-4 items-center '>
                                            <AiOutlineMail size={20} />
                                            <span className='text-sm'>aarif14@hotmail.com</span>
                                        </li>
                                        <li className='flex gap-4 items-center '>
                                            <AiOutlineMail size={20} />
                                            <span className='text-sm'>aarif14@hotmail.com</span>
                                        </li>
                                        <li className='flex gap-4 items-center '>
                                            <AiOutlineMail size={20} />
                                            <span className='text-sm'>aarif14@hotmail.com</span>
                                        </li>
                                        <li className='flex gap-4 items-center '>
                                            <AiOutlineMail size={20} />
                                            <span className='text-sm'>aarif14@hotmail.com</span>
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