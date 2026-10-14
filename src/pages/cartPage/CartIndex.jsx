import React, { useState } from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import { cartHeadData } from '../../dummyData/cartHeadData'
import { IoMdArrowDropdown } from "react-icons/io";
import { cartSizeData } from '../../dummyData/cartSize';


const CartIndex = () => {
    const [size, setsize] = useState(false)

    const handleSize = (e) => {
        setsize(e)
    }
    return (
        <section className='py-31'>
            <Container>
                <BreadCrumb rootPage={"Home"} label={"Cart"} />
                <div className='w-full h-12.5 bg-gray1 grid grid-cols-4 items-center'>
                    {cartHeadData.map((item, index) => (
                        <span className='font-DMSans text-base leading-6 font-bold' key={index}>{item.label}</span>
                    ))}
                </div>

                <div className='h-40'>
                    
                </div>
                <div className='w-full bg-cuponCol  flex justify-between items-center'>
                    <div className='flex gap-5.75 items-center'>
                        <div onClick={() => handleSize(!size)} className='flex relative cursor-pointer text-base font-normal text-gray3 font-DMSans uppercase w-63.75 h-12.5 justify-between px-5 py-2.5 items-center border border-gray4'>
                            <span>Size</span>
                            <IoMdArrowDropdown />
                            <ul className='absolute flex flex-col -bottom-1 right-0 translate-y-full bg-white shadow-2xl  '>
                                {size &&
                                    cartSizeData.map((item, index) => (
                                        <li className='border-b border-b-gray3 last:border-0 px-4 py-2' key={index}>{item.label}</li>
                                    ))}
                            </ul>
                        </div>
                        <span className='font-bold font-DMSans text-sm text-primary'>Apply Coupon</span>
                    </div>
                    <div className='font-bold font-DMSans text-sm text-primary mr-5 cursor-pointer'>Updated Cart </div>
                </div>
            </Container>
        </section>
    )
}

export default CartIndex