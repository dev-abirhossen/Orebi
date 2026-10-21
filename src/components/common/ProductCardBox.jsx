
import React, { useState } from 'react'
import Image from '../ui/Image'
import { FaHeart } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";



const ProductCardBox = ({ img, alt, productName, productPrice, catagory, isNew = false, isDiscount = false, discountValue = 0 }) => {

    return (
        <div className='w-92.5 mt-12 '>
            <div className='group relative h-92.5 overflow-hidden bg-green-400'>
                <Image className={"relative overflow-hidden object-center w-full"} src={img} alt={alt} />
                {isNew &&
                    <span className='absolute top-5 left-5 px-7.5 py-2.5 bg-primary font-DMSans font-bold text-sm text-white'>{catagory}</span>
                }
                {isDiscount &&
                    <span className='absolute top-5 left-5 px-7.5 py-2.5 bg-primary font-DMSans font-bold text-sm text-white'>-{discountValue}%</span>
                }
                <div className='absolute group-hover:translate-y-0 transition-all duration-300 bg-gray-50 w-full px-7.5 py-5 left-0 bottom-0 right-0 flex justify-end translate-y-full '>
                    <div className='flex justify-end flex-col'>
                        <button className='flex justify-end gap-2 items-center text-base font-normal font-DMSans text-gray3 cursor-pointer hover:text-primary transition-all duration-200 '>
                            Add Fto Wish List
                            <FaHeart className='text-primary'/>
                        </button>
                        <button className='flex  justify-end gap-2 items-center text-base font-normal font-DMSans text-gray3 cursor-pointer hover:text-primary transition-all duration-200'>
                            Compare
                            <IoMdRefresh className='text-primary'/>
                        </button>
                        <button className='flex gap-2  justify-end items-center text-base font-normal font-DMSans text-gray3 cursor-pointer hover:text-primary transition-all duration-200'>
                            Add to Cart
                            <FaCartShopping className='text-primary'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-6 mb-11.25'>
                <h4 className='font-bold font-DMSans text-primary text-xl'>{productName}</h4>
                <span className='font-normal font-DMSans text-base text-gray3'>{productPrice}</span>
            </div>
        </div>
    )
}

export default ProductCardBox