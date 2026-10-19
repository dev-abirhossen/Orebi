
import React from 'react'
import Image from '../ui/Image'

const ProductCardBox = ({img, alt, productName, productPrice}) => {
    return (
        <div className='w-92.5 mt-12 '>
            <div className='h-92.5 bg-green-400'> 
                <Image src={img} alt={alt}/>
            </div>
            <div className='flex justify-between items-center mt-6 mb-11.25'>
                <h4 className='font-bold font-DMSans text-primary text-xl'>{productName}</h4>
                <span className='font-normal font-DMSans text-base text-gray3'>{productPrice}</span>
            </div>
        </div>
    )
}

export default ProductCardBox