import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, Autoplay, EffectCreative} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import {Box,} from "@mui/material";

function importAll(r:any) {
    let images:any = {};
    r.keys().map((item:any, index:number) => { images[item.replace('./', '')] = r(item); });
    return images;
}


const Slider = () => {
    const images = importAll(require.context('./images/slide', true, /\.(png|jpe?g|svg)$/));

    return (
        <Box sx={{maxHeight: "60vh", display: {xs:"none", md:"block"}}}>
            <Swiper
                style={{height: "100%", width:"90%", marginTop:"24px", border:"8px solid #896310 "}}
                modules={[ Scrollbar, Autoplay, EffectCreative]}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                scrollbar={{draggable: true}}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
            >
                    {Object.keys(images).map((key, value)=>{
                        const image = images[key]
                        return(
                            <SwiperSlide><img src={image} alt="img" className="slider-img"/></SwiperSlide>
                        )
                    })}



            </Swiper>
        </Box>

    );
};

export default Slider;
