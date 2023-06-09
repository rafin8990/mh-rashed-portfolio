import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FcCallback, FcFaq, FcReading } from 'react-icons/fc';

const Contact = () => {
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_5wxgg7f', 'template_gr81czq', form.current, 'XPHcAxBRjVKuXN6Sx')
            .then((result) => {
                console.log(result.text);
                form.reset()
                alert("SUCCESS!");

            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });
    };
    return (
        <div className='my-20 lg:mx-20'>
            <div>
                <h1 className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-900'>GET IN TOUCH</h1>
            </div>
            <div className='md:flex mt-5'>
                <div>
                    <h1 className='text-2xl font-bold'>DON'T BE SHY !</h1>
                    <p className='text-lg text-gray-500 w-1/2'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center mt-5'>
                            <div className='mr-5'>
                                <p className='text-2xl'>
                                    <FcReading></FcReading>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl'>ADDRESS POINT</p>
                                <p className='text-xl '>Dhaka , Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <div className='mr-5'>
                                <p className='text-2xl'>
                                    <FcFaq></FcFaq>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl'>Mail Me:</p>
                                <p className='text-xl'>the.mh.rashed@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <div className='mr-5'>
                                <p className='text-2xl'>
                                    <FcCallback></FcCallback>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl'>Call Me :</p>
                                <p className='text-xl'>+880-1972051101</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" placeholder="Your Name" name="user_name" required className="input input-bordered w-full mt-5" />
                            <input type="text" placeholder="Your Email" name="user_email" required className="input input-bordered w-full mt-5" />
                            <input type="text" placeholder="Enter Your Subject" required className="input input-bordered w-full mt-5 text-black" />
                            <textarea className="textarea textarea-bordered w-full mt-5 text-black" name="message" required placeholder="Text Here"></textarea>

                            <div id='btn' className='rounded-xl w-44 mt-5'>
                                <button id='text' type='submit' value="Send">
                                    <div className='flex items-center'>
                                        <p className='mx-5'>Send Message</p>
                                        <p className='bg-cyan-500 rounded-full '><HiArrowNarrowRight></HiArrowNarrowRight></p>
                                    </div>

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='mt-20 '>
<p className='text-red-500 text-center'>Copyright @mh_rashed || All Rights Reserved
</p>
            </div>
        </div>
    );
};

export default Contact;