import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { bannerImgData } from '../../../dummyData/bannerImgData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "react-slick";
const Slider = SliderComponent.default || SliderComponent;
import Image from '../../ui/Image';

const Banner = () => {
  const [dotActive, setdotActive] = useState(0)

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setdotActive(next),
    appendDots: dots => (
      <div
        style={{
          padding: "10px",
          position: 'absolute',
          width: "0px",
          top: "50%",
          left: "20px",
          bottom: "unset",
          transform: "translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
        i===dotActive?
        {  width: "30px",
          borderRight: "2px black solid",
          color: "black"
        }
        :
        {  width: "30px",
          color: "transparent",
          borderRight: "2px white solid"
        }  
        }
      >
        0{i + 1}
      </div>
    )

  };
  return (
    <section className='w-full overflow-hidden '>
      <div className='bg-gray6/30 h-4'></div>

      {/* Slider wrapper container set kora hoyeche */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-container mx-auto relative'>
          <Slider {...settings}>
            {bannerImgData.map((item, index) => (
              <NavLink className="outline-none block w-full" key={index} to={item.url}>
                <div className="flex justify-center items-center w-full">
                  <Image
                    className="overflow-hidden bg-center mx-auto block max-w-full h-auto"
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Banner