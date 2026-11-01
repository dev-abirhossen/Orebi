import React from 'react'
import Container from '../../../components/common/Container'
import Paragraph from '../../../components/ui/Paragraph'
import { FaStar } from "react-icons/fa";
import cardImg from "../../../assets/images/cardImg.jpg"
import Image from '../../../components/ui/Image';


const SingleProduct = () => {
  return (
    <section className='mt-38'>
        <Container>
            <div className='grid grid-cols-2'>
              <div className='w-195 h-195 bg-green-300 bg-cover '>
                <Image className={"w-full"} src={cardImg} alt={"img"}/>
              </div>
              <div className='w-195 h-195 bg-green-300'>
                <Image className={"w-full"} src={cardImg} alt={"img"}/>
              </div>
            </div>
            <div className='mt-10 grid grid-cols-2'>
              <div className='w-195 h-195 bg-green-300'>
                <Image className={"w-full"} src={cardImg} alt={"img"}/>
              </div>
              <div className='w-195 h-195 bg-green-300'>
                <Image className={"w-full"} src={cardImg} alt={"img"}/>
              </div>
            </div>
            <div className='mt-12.25'>
              <h4 className='font-DMSans font-bold text-[39px] text-primary'>Product</h4>
              <ul className='flex'>
                {[0,1,2,3,4,5].map((item,index)=>(
                  <li className='text-yellow-400'><FaStar /></li>
                ))}
                <span className='text-sm ml-2.5 text-gray3 font-DMSans font-normal'>1 Review</span>
              </ul>
              <div className='flex gap-5.5 mt-2.5'>
                <span className='text-base text-gray3 font-DMSans font-normal '>$88.00</span>
                <span className='font-DMSans font-bold text-primary text-xl'>$44.00</span>
              </div>
              <div className='flex gap-14.25 mt-14.25'>
                <h5 className='font-DMSans font-bold text-base uppercase text-primary leading-6'>Color:</h5>
                <ul className='flex gap-3.75'>
                  {[0,1,2,3,4].map((item,index)=>(
                   <li className='size-5 bg-red-300 rounded-full'></li>
                ))}
                </ul>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default SingleProduct