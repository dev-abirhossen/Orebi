
import React, { useState } from 'react'
import Image from '../ui/Image'

const ProductCardBox = ({ img, alt, productName, productPrice, catagory, isNew = false, isDiscount=false, discountValue=0 }) => {

    return (
        <div className='w-92.5 mt-12 '>
            <div className='relative h-92.5 bg-green-400'>
                <Image src={img} alt={alt} />
                {isNew &&
                    <span className='absolute top-5 left-5 px-7.5 py-2.5 bg-primary font-DMSans font-bold text-sm text-white'>{catagory}</span>
                }
                {isDiscount &&
                    <span className='absolute top-5 left-5 px-7.5 py-2.5 bg-primary font-DMSans font-bold text-sm text-white'>-{discountValue}%</span>
                }
            </div>
            <div className='flex justify-between items-center mt-6 mb-11.25'>
                <h4 className='font-bold font-DMSans text-primary text-xl'>{productName}</h4>
                <span className='font-normal font-DMSans text-base text-gray3'>{productPrice}</span>
            </div>
        </div>
    )
}

export default ProductCardBox