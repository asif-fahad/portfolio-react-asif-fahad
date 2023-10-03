import React, { useEffect } from 'react';
import { data } from "../data/data.js";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Work = () => {

    const project = data;

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the element's position when animation starts
            easing: 'ease-in-out', // Easing function for the animation
            once: false, // Whether to only animate elements once or on every scroll
        });
    }, []);

    return (
        <div name='work' className='w-full py-14 lg:py-14 text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid Item */}
                    {project.map((item, index) => (
                        <div data-aos="zoom-out" key={item.id} className="card w-72 mx-auto shadow-lg shadow-[#040c16] bg-[#0a192f] border hover:border-pink-600">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p><span className='font-bold'>Details:</span> {item.details}</p>
                                <p><span className='font-bold'>Technologies:</span> {item.tech}</p>
                                <div className='flex gap-1'>
                                    <div className="card-actions">
                                        <a href={item.live}><button className="btn text-white bg-[#0a192f] border-2 border-white hover:bg-pink-600 hover:border-pink-600 btn-xs">Live</button></a>
                                    </div>
                                    <div className="card-actions">
                                        <a href={item.client}><button className="btn text-white bg-[#0a192f] border-2 border-white  hover:bg-pink-600 hover:border-pink-600 btn-xs">Client</button></a>
                                    </div>
                                    <div className="card-actions">
                                        <a href={item.server}><button className="btn text-white bg-[#0a192f] border-2 border-white  hover:bg-pink-600 hover:border-pink-600 btn-xs">Server</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};


export default Work;