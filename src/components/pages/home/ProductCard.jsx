import React from 'react'
import Container from '../../common/Container'
import ProductCardBox from '../../common/ProductCardBox'
import { productCardData } from '../../../dummyData/productCardData'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductCard = () => {

    return (
        <section className='mt-32 mb-29.5 '>
            <Container>
                <h3 className='font-DMSans font-bold text-[39px] text-primary'>New Arrivals</h3>
                <div className='relative  gap-10'>
                    <button className='prev-arrow absolute size-16 text-white bg-gray6 hover:bg-black transition-all duration-300 rounded-full cursor-pointer top-1/2 left-0 -translate-y-1/2 z-50 flex justify-center items-center'><FaLongArrowAltLeft className='text-2xl' /></button>
                    <button className='next-arrow absolute size-16 text-white  bg-gray6 hover:bg-black transition-all duration-300 rounded-full cursor-pointer top-1/2 right-0 -translate-y-1/2 z-50 flex justify-center items-center'><FaLongArrowAltRight className='text-2xl' /></button>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        pagination={false}
                        modules={[Navigation]}
                        loop={true}
                        navigation={{
                            nextEl: '.next-arrow',
                            prevEl: '.prev-arrow'
                        }}
                        className="mySwiper"
                    >{productCardData.map((item, index) => (
                        <SwiperSlide>
                            <div key={index}>
                                <ProductCardBox img={item.img} isDiscount={item.isDiscount} discountValue={item.discountValue} isNew={item.isNew} catagory={item.catagory} alt={item.alt} productName={item.productName} productPrice={item.productPrice} />
                            </div>
                        </SwiperSlide>
                    ))}</Swiper>
                </div>
            </Container>
        </section>

    )
}

export default ProductCard