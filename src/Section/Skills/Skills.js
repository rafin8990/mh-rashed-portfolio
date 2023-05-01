import React from 'react';
import SEO from '../../Assets/skills/1 (1).png'
import SEM from '../../Assets/skills/2 (1).png'
import poster from '../../Assets/skills/3 (1).png'
import Digital from '../../Assets/skills/4 (1).png'
import SMM from '../../Assets/skills/5.png'
import Smm from '../../Assets/skills/6.png'
import './Skills.css'

const Skills = () => {
    return (
        <div className='mt-20'>
            <div>
                <h1 className='text text-4xl font-bold text-center'>MY SKILLS</h1>
            </div>
            <div>
                <h1 className='text-xl text-center font-semibold'>Digital Marketing</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5 mx-5'>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={SEO} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Search Engine Optimization</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={SEM} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Search Engine Marketing</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={poster} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Banner And Poster</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={Digital} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Digital Marketing</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={Smm} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Social Media Manager</h1>
                    </div>
                    <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src={SMM} alt="" />
                        </div>
                        <h1 className='text-xl text-center'>Social Media Marketing</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;