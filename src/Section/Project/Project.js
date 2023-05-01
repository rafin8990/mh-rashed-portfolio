import React from 'react';
import picture1 from '../../Assets/project/6.png'
import picture2 from '../../Assets/project/Screenshot 2023-05-01 134100.png'
import picture3 from '../../Assets/project/pinterest design pin design pintertest pin design professional pin custom pins (12).png'
import picture4 from '../../Assets/project/pinterest design pin design pintertest pin design professional pin custom pins (3).png'
import picture6 from '../../Assets/project/pinterest design pin design pintertest pin design professional pin custom pins (1) (Small).png'
import picture5 from '../../Assets/project/pinterest design pin design pintertest pin design professional pin custom pins (5).png'
import picture7 from '../../Assets/project/pinterest design pin design pintertest pin design professional pin custom pins (6).png'
import picture8 from '../../Assets/project/Screenshot 2023-05-01 192622.png'

const Project = () => {
    return (
        <div className='my-20'>
            <h1 className='text-4xl text-center font-bold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-900 my-10'>
                Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-5'>
                <div>
                    <img src={picture1} alt="" />
                </div>
                <div>
                    <img src={picture2} alt="" />
                </div>
                <div>
                    <img src={picture3} alt="" />
                </div>
                <div>
                    <img src={picture4} alt="" />
                </div>
                <div>
                    <img src={picture5} alt="" />
                </div>
                <div>
                    <img src={picture6} alt="" />
                </div>
                <div>
                    <img src={picture7} alt="" />
                </div>
                <div>
                    <img src={picture8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;