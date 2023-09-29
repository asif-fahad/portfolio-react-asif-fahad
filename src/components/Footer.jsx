import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#0a192f]'>
            <footer className="footer items-center p-4 text-neutral-content bg-[#0a192f]">
                <div className="items-center grid-flow-col">
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-lg'>Contacts</h1>
                        <p><span className='font-bold'>Address:</span> Dhaka, Bangladesh</p>
                        <p><span className='font-bold'>Email:</span> asif123fahad@gmail.com</p>
                    </div>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='https://www.linkedin.com/in/s-m-asif-ibne-hayat-safkat-b422a7257/'><FaLinkedin size={30}></FaLinkedin></a>
                    <a href='https://github.com/asif-fahad'><FaGithub size={30}></FaGithub></a>
                    <a href='https://www.facebook.com/foxtrot.fahad'><FaFacebook size={30}></FaFacebook></a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-gray-500">
                <div>
                    <p>Copyright © 2023 - All right reserved by S. M. Asif Ibne Hayat Safkat</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;