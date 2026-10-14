import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import { cartHeadData } from '../../dummyData/cartHeadData'
import { IoMdArrowDropdown } from "react-icons/io";
import { cartSizeData } from '../../dummyData/cartSize';
import { RxCross2 } from "react-icons/rx";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import PrimaryBtn from '../../components/ui/PrimaryBtn';
import axios from 'axios';
import Image from '../../components/ui/Image';




const CartIndex = () => {
    const [size, setsize] = useState(false)
    const [products, setproducts] = useState([])

    const ApiUrl = `https://dummyjson.com/products`

    useEffect(()=>{
       async function Fetch(){
        const data = await axios.get(ApiUrl)
        setproducts(data.data.products)
       } 
       Fetch()
    },[products])
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

                <div className='h-40 grid grid-cols-4 items-center'>
                    <div className='flex gap-5 items-center'>
                        <RxCross2 className='text-xl' />
                        <div className='size-25 bg-green-500 overflow-hidden'></div>
                        <span className='text-primary font-bold font-DMSans text-base'>Product name</span>
                    </div>
                    <div className=''>
                        <span className='text-primary font-bold font-DMSans text-7.5'>$44.00</span>
                    </div>
                    <div>
                        <div className=' inline-flex border border-gray4 px-5 py-1 items-center gap-8.75'>
                            <button className='cursor-pointer'>
                                <TiMinus />
                            </button>
                            <span>1</span>
                            <button className='cursor-pointer'>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-primary font-bold font-DMSans text-7.5'>$44.00</span>
                    </div>
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
                <div className='w-full flex justify-end mt-13.5'>
                    <div>
                        <div className='w-161.5 '>
                            <div className='flex justify-end'>
                                <span className='font-bold font-DMSans text-5 '>Cart totals</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 items-center border border-gray4 mt-6'>
                            <div className='border-r border-r-gray4'>
                                <h5 className='font-DMSans font-bold text-base leading-6 px-5 py-4 border-b border-b-gray4'>Subtotal</h5>
                                <h5 className='font-DMSans font-bold text-base leading-6 px-5 py-4'>Subtotal</h5>
                            </div>
                            <div className='border-b border-b-gray4 '>
                                <p className='px-5 py-4 border-b border-b-gray4'>389.99 $</p>
                                <p className='px-5 py-4 '>389.99 $</p>

                            </div>
                        </div>
                        <div className='flex justify-end mt-7.5'>
                            <PrimaryBtn text={"Proceed to Checkout"} />
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default CartIndex