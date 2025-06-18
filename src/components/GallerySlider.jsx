import React from 'react';
import Slider from 'react-slick';
import cImage1 from '../assets/Crane-Images/c1.jpg';
import cImage2 from '../assets/Crane-Images/c2.jpg';
import cImage3 from '../assets/Crane-Images/c3.jpg';
import cImage4 from '../assets/Crane-Images/c4.jpg';

const IMAGES = [cImage1, cImage2, cImage3, cImage4];

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-8xl mx-auto px-2 py-6">
      <Slider {...settings}>
        {IMAGES.map((image, index) => (
          <div key={index} className="p-3">
            <img
              src={image}
              alt={`Crane ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-2xl  border-gray-300 shadow-lg shadow-slate-500"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
