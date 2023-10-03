import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the element's position when animation starts
            easing: 'ease-in-out', // Easing function for the animation
            once: false, // Whether to only animate elements once or on every scroll
        });
    }, []);


    return (
        <div name='about' className='w-full  bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full py-20 lg:py-60'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div data-aos="fade-right" className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm S. M. Asif Ibne Hayat Safkat, nice to meet you. Please take a look around.</p>
                    </div>
                    <div data-aos="fade-left">
                        <p>I am passionate about building an excellent website that improves the lives of those around me. I specialize in creating websites for clients ranging from individuals and small businesses all the way to large enterprise corporations. What would you do if you had a website expert available at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;