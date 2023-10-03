import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { skills } from '../data/skills';

const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the element's position when animation starts
            easing: 'ease-in-out', // Easing function for the animation
            once: false, // Whether to only animate elements once or on every scroll
        });
    }, []);

    return (
        <div name='skills' className='w-full py-40 lg:py-24 bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div data-aos="zoom-in" className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skills.map((skill, index) => (
                        <div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={skill.icon} alt={`${skill.label} icon`} />
                            <p className='my-4'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
