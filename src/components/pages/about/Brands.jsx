import React from 'react'
import Container from '../../common/Container'
import BreadCrumb from '../../common/BreadCrumb'
import aboutBrandImg from '../../../assets/images/aboutBrandImg.png'
import Image from '../../ui/Image'
import PrimaryBtn from '../../ui/PrimaryBtn'
import Paragraph from '../../ui/Paragraph'
const Brands = () => {
    return (
        <section>
            <Container>
                <BreadCrumb rootPage={"Home"} label={'About'} />
                <div className='flex gap-10'>
                    <div className='relative w-195 h-194 overflow-hidden bg-cover'>
                        <PrimaryBtn className={"absolute left-1/2 bottom-15.5 -translate-x-1/2 px-24.25 py-7"} text={"Our Brands"}/>
                        <Image src={aboutBrandImg} alt={"aboutBrandImg"}/>
                    </div>
                    <div className='relative w-195 h-194 overflow-hidden bg-cover'>
                        <Image src={aboutBrandImg} alt={"aboutBrandImg"}/>
                        <PrimaryBtn  className={"absolute left-1/2 bottom-15.5 -translate-x-1/2 px-24.25 py-7"} text={"Our Stores"}/>
                    </div>
                </div>
                <div>
                    <Paragraph className={"mt-42 text-[39px] font-DMSans font-normal leading-13 text-primary"} text={"Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."}/>
                </div>
                <div className='mt-39.75 mb-32.75 grid grid-cols-3'>
                    <div>
                        <h5 className='font-DMSans font-bold text-[24px] text-primary leading-9 '>Our Vision</h5>
                        <Paragraph className={"mt-2.75 font-DMSans font-normal text-base text-gray3 leading-7.5"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."}/>
                    </div>
                    <div>
                        <h5 className='font-DMSans font-bold text-[24px] text-primary leading-9 '>Our Vision</h5>
                        <Paragraph className={"mt-2.75 font-DMSans font-normal text-base text-gray3 leading-7.5"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."}/>
                    </div>
                    <div>
                        <h5 className='font-DMSans font-bold text-[24px] text-primary leading-9 '>Our Vision</h5>
                        <Paragraph className={"mt-2.75 font-DMSans font-normal text-base text-gray3 leading-7.5"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Brands