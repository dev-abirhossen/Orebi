import React from 'react'
import { NavLink } from 'react-router-dom'
import { bannerImgData } from '../../../dummyData/bannerImgData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "react-slick";
const Slider = SliderComponent.default || SliderComponent;
import Image from '../../ui/Image';

const Banner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <section>
      <div className='bg-gray6/30 h-4'></div>
      <Slider {...settings}>
      {bannerImgData.map((item, index) => (
        <NavLink key={index} to={item.url}>
          <Image src={item.img} alt={item.alt} />
        </NavLink>
        ))}
        </Slider>
    </section>
  )
}

export default Banner
