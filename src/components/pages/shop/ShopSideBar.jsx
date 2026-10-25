import React, { useState } from 'react'
import Container from '../../common/Container'
import { shopSliderBrand, shopSliderCatagoryData, shopSliderColor, shopSliderPrice } from '../../../dummyData/shopSliderData'
import { IoMdArrowDropdown } from "react-icons/io";



const ShopSideBar = () => {

    const [isClick, setisClick] = useState(null)

    const handleClick = (sectionName)=>{
        setisClick((prevData)=>{
            return prevData === sectionName? null : sectionName
        })
    }

  return (
    <section className=''>
            <div className='flex flex-col gap-10'>
                <div>
                <div onClick={()=>handleClick("catagory")} className='flex justify-between items-center cursor-pointer'>
                    <h5  className=' text-xl text-primary font-bold font-DMSans'>Shop By Catagory</h5>
                    <span className='text-xl'><IoMdArrowDropdown /></span>
                </div>
                {isClick === 'catagory' &&
                
                <div>
                    {shopSliderCatagoryData.map((item,index)=>(
                        <div className='w-92.75 h-12.25 mt-8.75' key={index}>
                            <span className=' text-gray3 text-base font-DMSans font-normal leading-7.5'>{item.label}</span>
                        </div>
                    ))}
                </div>
                }
            </div>
            <div>
                <div onClick={()=>handleClick("color")} className='flex justify-between items-center cursor-pointer'>
                    <h5  className=' text-xl text-primary font-bold font-DMSans'>Shop By Color</h5>
                    <span className='text-xl'><IoMdArrowDropdown /></span>
                </div>
                {isClick === "color" &&
                
                <div>
                    {shopSliderColor.map((item,index)=>(
                        <div className='w-92.75 h-12.25 mt-8.75 flex gap-2.5 items-center' key={index}>
                            <div className={`size-2.75 rounded-full ${item.color}`}/>
                            <span className=' text-gray3 text-base font-DMSans font-normal leading-7.5'>{item.label}</span>
                        </div>
                    ))}
                </div>
                }
            </div>
            <div>
                <div onClick={()=>handleClick("brand")} className='flex justify-between items-center cursor-pointer'>
                    <h5  className=' text-xl text-primary font-bold font-DMSans'>Shop By Brand</h5>
                    <span className='text-xl'><IoMdArrowDropdown /></span>
                </div>
                {isClick === "brand" &&
                
                <div>
                    {shopSliderBrand.map((item,index)=>(
                        <div className='w-92.75 h-12.25 mt-8.75' key={index}>
                            <span className=' text-gray3 text-base font-DMSans font-normal leading-7.5'>{item.label}</span>
                        </div>
                    ))}
                </div>
                }
            </div>
            <div>
                <div onClick={()=>handleClick("price")} className='flex justify-between items-center cursor-pointer'>
                    <h5  className=' text-xl text-primary font-bold font-DMSans'>Shop By Price</h5>
                    <span className='text-xl'><IoMdArrowDropdown /></span>
                </div>
                {isClick === "price" &&
                
                <div>
                    {shopSliderPrice.map((item,index)=>(
                        <div className='w-92.75 h-12.25 mt-8.75' key={index}>
                            <span className=' text-gray3 text-base font-DMSans font-normal leading-7.5'>{item.label}</span>
                        </div>
                    ))}
                </div>
                }
            </div>
            </div>
    </section>
  )
}

export default ShopSideBar