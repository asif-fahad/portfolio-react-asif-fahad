import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Fahad from '../assets/fahad.png'
import Resume from '../../public/Resume-of-S-M-Asif-Ibne-Hayat-Safkat.pdf'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaGoogleDrive } from 'react-icons/fa';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the element's position when animation starts
            easing: 'ease-in-out', // Easing function for the animation
            once: false, // Whether to only animate elements once or on every scroll
        });
    }, []);

    return (
        <div name='home'>
            <div className='flex flex-col lg:flex-row justify-center w-full  bg-[#0a192f]'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full py-20 lg:py-60'>
                    <p className='text-pink-600'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
                        S. M. Asif Ibne Hayat Safkat
                    </h1>
                    {/* <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
                        I'm a Front-end Developer
                    </h2> */}
                    <div>
                        <TypeAnimation
                            className="text-4xl sm:text-5xl font-bold text-[#8892b0]"
                            cursor={true}
                            sequence={["I'm a MERN Stack Developer", 1000, "I'm a React JS Developer", 1000, "I'm a Front-End Developer", 1000]}
                            repeat={Infinity}
                            wrapper='span'
                        />
                    </div>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        I’m a front-end developer specializing in building exceptional digital experiences. Currently, I’m focused on
                        building responsive full-stack web applications.
                    </p>
                    <div className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 space-x-3 w-8/12 lg:w-3/12'>
                        <h1>RESUME</h1>
                        <a href={Resume} download>
                            <button >
                                <FaDownload></FaDownload>
                            </button>
                        </a>
                        <a href="https://drive.google.com/file/d/1pBxZCnoj8RbXOsgs7wLgbNXX-c2gfzkZ/view?usp=sharing">
                            <FaGoogleDrive></FaGoogleDrive>
                        </a>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex me-5 pb-5 lg:pb-0 justify-center items-center'>
                    <img src={Fahad} className='w-60 h-60' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;