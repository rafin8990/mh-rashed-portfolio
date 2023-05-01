import React from 'react';
import resume from '../../Assets/Resume-mh-Rashed.pdf'
import { HiArrowCircleDown } from 'react-icons/hi';

const About = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-900'>ABOUT ME</h1>
                <div>
                    <div className=' md:flex mt-5 md:mx-20 lg:mx-44 '>
                        <p className='text-gray-500 p-5 md:p-0 lg:w-2/3'>
                            As a digital marketing expert, I bring a range of skills and expertise to help businesses thrive in the online
                            world. With a Bachelor's degree in English, I have a strong command of language and communication,
                            which I leverage to create effective marketing strategies and engaging content. <br />
                            My areas of expertise include <br />
                            • Search Engine Optimization (SEO) <br />
                            • Search Engine Marketing (SEM) <br />
                            • Social Media Marketing <br />
                            • Social Media Management <br />
                            • Designing Banners and Posters <br />
                            My design skills are also a valuable asset. I have experience creating banners, posters, and other visual
                            aids that help businesses stand out and communicate their message effectively. From typography to color
                            theory, I understand practical design principles and can apply them to create eye-catching visuals that
                            capture attention and drive engagement. <br />
                            I'm a versatile and adaptable digital marketing expert who can help businesses succeed in the fast-paced
                            online world. If you want to improve your online presence, drive traffic, and build your brand, I invite
                            you to explore my portfolio and see how I can help you achieve your goals.



                        </p>
                        <p id='divider' className='hidden md:block'></p>
                        <p id='divider1' className='mx-20 md:hidden'></p>
                        <p className='text-gray-500 p-5 md:p-0 lg:w-2/3 lg:ml-10'>

                            Whether you're looking to improve your website's visibility in search results, drive traffic through paid
                            advertising, or build a solid social media presence, I can help. With my comprehensive understanding of
                            digital marketing trends and techniques, I can tailor my approach to meet your goals and deliver
                            measurable results. <br />
                            One of my areas of expertise is search engine optimization (SEO), which involves optimizing website
                            content and structure to improve its visibility in search engine results pages (SERPs).  <br />
                            Through careful
                            research, analysis, and implementation of on-page and off-page optimization techniques, I can help
                            businesses improve their search engine rankings and attract more organic traffic.
                            Another area where I excel is search engine marketing (SEM), which involves running paid advertising
                            campaigns to drive traffic to a website. From keyword research to ad copywriting, targeting, and bid
                            management, I use my skills and expertise to create and manage successful SEM campaigns that deliver a
                            high return on investment (ROI). <br />
                            Social media marketing is another area where I have extensive experience. With a deep understanding of
                            the major social media platforms, their audiences, and the latest trends and best practices, I can build and
                            execute social media strategies that help businesses boost their brand. <br />
                            In addition to marketing, I'm also adept at social media management. From content creation to scheduling
                            and posting, I can help businesses maintain an active and engaging social media presence that keeps their
                            followers informed and entertained. <br />
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-20 lg:mx-44'>
                        <div className='mt-5'>
                            <h3 className='text-2xl text-cyan-900 ml-5 md:ml-0'>Personal Info ______________</h3>

                            <div className=' hidden md:flex justify-between '>
                                <div>
                                    <p><span className='text-xl font-bold'>First Name</span>: MH </p>
                                    <p><span className='text-xl font-bold'>Age</span>: 24</p>
                                    <p><span className='text-xl font-bold'>Address</span>: Dhaka, Bangladesh</p>


                                </div>
                                <div>
                                    <p><span className='text-xl font-bold'>Last Name</span>: Rashed</p>
                                    <p><span className='text-xl font-bold'>Nationality</span>: Bangladeshi</p>
                                    <p><span className='text-xl font-bold'>Mobile</span>: +880-1972051101</p>
                                    <p><span className='text-xl font-bold'>Language</span>: English , Bangla, Hindi</p>
                                </div>
                            </div>
                            <div className='md:hidden ml-5'>
                                <p><span className='text-xl font-bold'>Name</span>: Rafin Hossain</p>
                                <p><span className='text-xl font-bold'>Age</span>: 22</p>
                                <p><span className='text-xl font-bold'>Nationality</span>: Bangladeshi</p>
                                <p><span className='text-xl font-bold'>Address</span>: Dhaka , Bangladesh</p>
                                <p><span className='text-xl font-bold'>Language</span>: English , Bangla</p>
                            </div>
                            <div id='btn' className='w-60 rounded-2xl mt-5 ml-5 md:ml-0'>
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
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5 mx-3 md:mx-0'>
                            <div className='border border-cyan-900 rounded-xl p-10shadow-2xl'>
                                <h1 className='text-2xl font-bold flex items-center justify-center'>100 +</h1>
                                <div className='flex items-center justify-center'>
                                    <p>___</p>
                                    <h3 className='text-xl ml-5'>Completed <br /> Project</h3>
                                </div>
                            </div>
                            <div className='border border-cyan-900 rounded-xl p-10  shadow-2xl'>
                                <h1 className='text-2xl font-bold text-center'>BA (HON'S) in English</h1>
                                <div className='flex items-center justify-center'>
                                    <p>___</p>
                                    <h3 className='text-xl ml-5'>Completed <br />2019-2023</h3>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;