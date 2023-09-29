import React, { useEffect, useState } from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // const [project, setProject] = useState();

    // console.log(project)

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setProject(data));

    // }, [])



    const project = data;

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

                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div key={item.id} className="card w-72 mx-auto shadow-lg bg-[#0a192f] border hover:border-green-900">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p><span className='font-bold'>Details:</span> {item.details}</p>
                                <p><span className='font-bold'>Technologies:</span> {item.tech}</p>
                                <div className='flex gap-1'>
                                    <div className="card-actions">
                                        <a href={item.live}><button className="btn bg-white text-black btn-xs">Live</button></a>
                                    </div>
                                    <div className="card-actions">
                                        <a href={item.client}><button className="btn bg-white text-black btn-xs">Client</button></a>
                                    </div>
                                    <div className="card-actions">
                                        <a href={item.server}><button className="btn bg-white text-black btn-xs">Server</button></a>
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