import React from 'react';
import { HiArrowNarrowRight, HiPhone, HiArrowCircleDown } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaDribbble ,FaTwitter, FaInstagram} from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import profile from '../../Assets/profile.jpg'
import './Home.css'
import resume from '../../Assets/Resume-mh-Rashed.pdf'

const Home = () => {
    return (
        <div>
            <div className=' md:flex justify-center items-center lg:mt-10'>
                <div className='ml-5 md:ml-0 flex items-center'>
                    <div className=' flex justify-center'>
                        <img id='img' src={profile} alt="" />
                    </div>
                </div>
                <div className='md:ml-10 md:w-1/3 p-5 md:p-0'>
                    <h1 className='text-4xl font-bold'>HI</h1>
                    <h1 className='text-4xl font-bold'>I AM <span className=' text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-900'>MH Rashed</span></h1>
                    <div id='text'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'Digital Marketing Expert',
                                2000,
                                'Social Media Manager',
                                2000,
                                'Keyword,Tag & Meta Tag Researcher',
                                2000,
                                'Banner And Poster Designer',
                                2000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                    </div>

                    <p className='text-gray-500 mt-5'>
                        My areas of expertise include <br />
                        • Search Engine Optimization (SEO) <br />
                        • Search Engine Marketing (SEM) <br />
                        • Social Media Marketing <br />
                        • Social Media Management <br />
                        • Designing Banners and Posters
                    </p>
                    <div className='flex flex-col md:flex-row'>
                        <div id='btn' className=' rounded-3xl  w-44 mt-5'>
                            <a to='/about'><button id='text'>
                                <div className='flex items-center'>
                                    <p className='mx-5'>More About Me</p>
                                    <p className='bg-cyan-500 rounded-full '><HiArrowNarrowRight></HiArrowNarrowRight></p>
                                </div>

                            </button></a>
                        </div>
                        <div id='btn' className='w-60 rounded-2xl mt-5 ml-0 md:ml-5 '>
                            <a href={resume} download>

                                <button id='text' >
                                    <div className='flex items-center'>
                                        <p className='mx-5'>DOWNLOAD RESUME</p>
                                        <p className='bg-cyan-500 rounded-full text-xl'><HiArrowCircleDown></HiArrowCircleDown></p>
                                    </div>

                                </button>
                            </a>
                        </div>
                    </div>
                    <div className=' flex mt-5 '>
                        <p className='text-4xl ml-5'> <a href=" tel:+8801972051101"><HiPhone></HiPhone></a></p>
                        <p className='text-4xl ml-5'> <a href="https://twitter.com/the_mh_rashed"><FaTwitter></FaTwitter></a></p>
                        <p className='text-4xl ml-5'> <a href="https://dribbble.com/mh_Rashed"><FaDribbble></FaDribbble></a></p>
                        <p className='text-4xl ml-5'> <a href="https://www.instagram.com/themhrashed/"><FaInstagram></FaInstagram></a></p>
                        <p className='text-4xl ml-5'> <a href="https://www.facebook.com/themhrashed/"><FaFacebook></FaFacebook></a></p>
                        <p className='text-4xl ml-5'> <a href="https://www.linkedin.com/in/themhrashed/"><FaLinkedin></FaLinkedin></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;