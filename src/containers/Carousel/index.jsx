import { PropTypes } from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SocialIcon from "../../components/SocialIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import "./Carousel.css";

const Carousel = ({ skills }) => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: (
      <div>
        <div className='h-full'>
          <ChevronRightIcon className='fill-stone-900 dark:fill-stone-100 h-full max-w-10 ' />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className='h-full'>
          <ChevronLeftIcon className='fill-stone-900 dark:fill-stone-100 h-full max-w-10' />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container px-8 pb-4'>
      <Slider {...settings}>
        {skills.map(({ name, icon }, index) => (
          <figure
            key={index}
            className='flex flex-col items-center justify-center text-center w-4 px-8'
          >
            <span className='p-2'>
              <SocialIcon
                className='h-32 w-32 fill-stone-900s dark:fill-stone-100'
                icon={icon}
              />
            </span>
            <span>{name}</span>
          </figure>
        ))}
      </Slider>
    </div>
  );
};
Carousel.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Carousel;
