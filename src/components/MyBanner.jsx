import React from 'react';

const MyBanner = () => {
    return (

        <div className="relative h-0 overflow-hidden" style={{ paddingBottom: '56.25%', borderRadius: '18px' }}>
            <img
                src="/img/HeroSection_Image_2.png"
                alt="Event Poster"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
        </div>

    );
};

export default MyBanner;
