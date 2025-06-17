import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cImage1 from '../assets/Crane-Images/c1.jpg'
import cImage2 from '../assets/Crane-Images/c2.jpg'
import cImage3 from '../assets/Crane-Images/c3.jpg'
import cImage4 from '../assets/Crane-Images/c4.jpg'

const IMAGES = [
  cImage1,
  cImage2,
  cImage3,
  cImage4
]

const ImageSlider = () => {
   const settings = {
    dots: false,
    fade:true,
    autoplay:true,
    autoplaySpeed:3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    pauseOnHover:false
  }



  return (
    <div className='relative w-full max-h-[600px] '>
    <Slider {...settings}>
        {
          
          IMAGES.map((img,index)=> (
              <div key={index}>
                <img src={img} className='w-full h-[600px] object-cover' />
              </div>
              
          )
          )
          
        }
      </Slider>
       <div className="absolute top-0 left-0 w-full h-full bg-black/40 " />
      <div className="absolute inset-0 flex items-center justify-center z-40">
    <h1 className="text-white text-4xl font-bold text-center">
      Reliable & Heavy-Duty Crane Rentals You Can Trust<br />
      <span className="text-yellow-400 font-medium">Serving Safety & Strength 24/7</span>
    </h1>
  </div>
    </div>
  )
}

export default ImageSlider