import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e5m2sce', 'template_cwn4zlq', form.current, 'TNUd14aACwPKU9FT1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div name='contact' className='w-full py-20 lg:py-14 bg-[#0a192f] flex justify-center items-center p-4'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                <div className='pt-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - asif123fahad@gmail.com</p>
                </div>
                <label>Name</label>
                <input className='bg-[#ccd6f6] p-2' type="text" name="from_name" placeholder='name' />
                <label>Email</label>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name="from_email" placeholder='email' />
                <label>Message</label>
                <textarea className='bg-[#ccd6f6] p-2' rows="10" placeholder='Message' name="message" />
                <input className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;