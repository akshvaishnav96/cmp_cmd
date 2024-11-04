import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { images } from '../imageLinks';
export default function ResizableSlider({ item }) {
    let slickSettings = {
        dots: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
    className: "center",
    centerMode: true,
    centerPadding: "60px",

    };
    return (
        <Slider className='w-[95%] m-auto  mb-20 mt-10 text-gray-900'  {...slickSettings}>

         {images.map((item)=> <img src={item.image}className='h-[40rem]'></img>)}
        </Slider>
    )
}
