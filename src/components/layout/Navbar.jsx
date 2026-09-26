import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Image from '../ui/Image'
import logoImg from "../../assets/images/logo.png"
import { NavLink, useLocation } from 'react-router-dom'
import { MenuData } from '../../dummyData/MenuData'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Paragraph from '../ui/Paragraph'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
    const [dropDown, setdropDown] = useState(false)
    const [userdrop, setuserdrop] = useState(false)
    const location = useLocation()
    const [pathColor, setpathColor] = useState(location.pathname)
    useEffect(()=>{
        const path = location.pathname
        setpathColor(path)

    },[location.pathname])

    return (
        <nav className='pt-8'>
            <Container>
                <div className='flex justify-between items-center pb-8'>
                    <NavLink to={'/'}><Image src={logoImg} alt={"logo.png"} /></NavLink>
                    <div>
                        <ul className='flex gap-10'>
                            {
                                MenuData.map((item, index) => (
                                    <li key={item.id}>
                                        <NavLink className={`${item.url == pathColor? 'text-red-500': 'text-black'}`} to={item.url}>{item.label} </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </Container>
            <div className=' bg-[#F5F5F3] py-6.25'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='relative'>
                                <HiOutlineBars3BottomLeft onClick={()=>setdropDown(!dropDown)} className='text-3xl cursor-pointer' />
                                <div>
                                    {dropDown &&
                                        <ul className='absolute -bottom-1 left-0 translate-y-full w-40 bg-white shadow-2xl'>
                                            {[0, 1, 2, 3, 4, 5].map((item, index) => (
                                                <li className='py-2.5 border-b last:border-b-0 px-4'>Catagory 1</li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </div>
                            <Paragraph className={"font-DMSans text-3.5 font-normal text-primary"} text={"Shop by Category"} />
                        </div>
                        <div className='w-150 relative'>
                            <input className='w-full py-4 text-lg px-5 bg-white' type="text" placeholder='Search Products' />
                            <FaSearch className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer ' />
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-2.5 relative'>
                                <BsFillPersonFill onClick={()=>setuserdrop(!userdrop)}  className='text-2xl cursor-pointer' />
                                <BsFillCaretDownFill  onClick={()=>setuserdrop(!userdrop)} className='cursor-pointer' />
                                    <div>
                                { 
                                    userdrop &&
                                    <ul className='absolute w-50  shadow-2xl bg-white right-0 -bottom-2 translate-y-full '>
                                        {[0,1,2,3,4,5].map((item,index)=>(
                                            <li className='py-2.5 border-b last:border-b-0 px-4'>catagory 1</li>
                                        ))}
                                    </ul>
                                    }
                                    </div>
                            </div>
                            <FaShoppingCart className='text-2xl cursor-pointer' />
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar
