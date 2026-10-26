import React, { useState } from 'react'
import Container from '../../common/Container'
import { CgMicrosoft } from "react-icons/cg";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { productCardData } from '../../../dummyData/productCardData';
import ProductCardBox from '../../common/ProductCardBox';
import productCardImg from '../../../assets/images/cardImg.jpg'


const ShopProductView = () => {
  const [isactive, setisactive] = useState(null)
  const handleClick = (sectionName)=>{
    setisactive((prevData)=>{
      return prevData === sectionName ? null : sectionName
    })
  }

  // const [grid, setgrid] = useState(true)
  // const [col, setcol] = useState(true)

  return (
    <section>
      <div className='flex justify-between '>
        <div className='flex gap-5'>
          <button onClick={()=>setgrid(true)} className='px-2 py-2 bg-black text-white text-xl cursor-pointer'><CgMicrosoft /></button>
          <button onClick={()=>setcol(true)} className='px-2 py-2 bg-white text-gray6 text-xl cursor-pointer'><BsReverseListColumnsReverse /></button>
        </div>
        <div className='flex gap-10'>
          <div>
          <div className='flex gap-3.5'>
            <span className='font-DMSans font-normal text-base text-gray3 leading-7.5'>Sort by:</span>
            <div className='relative'>
              <div onClick={() => handleClick("shortBy")} className='flex justify-between items-center px-2.5 cursor-pointer w-59.75 border border-[#737373]'>
                <span className='font-DMSans font-normal text-base text-gray3 leading-7.5'>Catagory</span>
                <span><TiArrowSortedDown /></span>
              </div>
              {isactive === "shortBy" &&
                <div className='absolute left-0 bottom-0 translate-y-full flex flex-col gap-2.5 z-50'>
                  {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <div className='w-59.75 border-b border-b-gray3 last:border-b-0' key={index}>
                      <span className='font-DMSans text-sm font-normal text-gray3 leading-7.5'>Catagory{item}</span>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
          <div>
          <div className='flex gap-3.5'>
            <span className='font-DMSans font-normal text-base text-gray3 leading-7.5'>Show:</span>
            <div className='relative'>
              <div onClick={()=>handleClick("show")} className='flex justify-between items-center cursor-pointer w-59.75  px-2.5  border border-[#737373]'>
                <span className='font-DMSans font-normal text-base text-gray3 leading-7.5'>Catagory</span>
                <span><TiArrowSortedDown /></span>
              </div>
              {isactive === "show" &&
                <div className='absolute left-0 bottom-0 translate-y-full flex flex-col gap-2.5 z-50'>
                  {[36, 38, 40, 42, 44, 46].map((item, index) => (
                    <div className='w-59.75 border-b border-b-gray3 last:border-b-0' key={index}>
                      <span className='font-DMSans text-sm font-normal text-gray3 leading-7.5'>{item}</span>
                    </div>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {productCardData.map((item,index)=>(
          <div>
            <ProductCardBox img={productCardImg}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShopProductView