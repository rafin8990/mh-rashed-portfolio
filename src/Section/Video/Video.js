import React from 'react';

const Video = () => {
    return (
        <div className='lg:my-20'>
             <h1 className='text-4xl text-center font-bold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-900'>
                Promo
            </h1>
            <div className='flex justify-center items-center'>
                <iframe src="https://player.vimeo.com/video/822737737?h=8f5ea3cd95&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1080" height="700" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="GiG Video for Fiverr by MH Rashed"></iframe>
            </div>
        </div>
    );
};

export default Video;