import React, { useEffect, useRef, useState } from 'react'
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
import { IoCloseSharp } from "react-icons/io5";
import { profileData } from '../../dummyData/ProfileData'
import { catagoryData } from '../../dummyData/CatagoryData'
import { MdLogin } from "react-icons/md";




const Navbar = () => {
    const [dropDown, setdropDown] = useState(false)
    const [userdrop, setuserdrop] = useState(false)
    const [islogin, setislogin] = useState(false)
    const pathName = useLocation().pathname
    const dropDwonref = useRef(null)
    const userdropdownref = useRef(null)


    useEffect(() => {
        const handleClickOutSide = (event) => {
            const dropDwonrefCrr = dropDwonref.current
            if (dropDwonrefCrr && !dropDwonrefCrr.contains(event.target))
                setdropDown(false)
        }
        document.addEventListener("mousedown", handleClickOutSide)
    }, [dropDown])


    useEffect(() => {
        const handleClickOutside = (event) => {
            const userdropdownrefCrr = userdropdownref.current
            if (userdropdownrefCrr && !userdropdownrefCrr.contains(event.target))
                setuserdrop(false)
        }
        document.addEventListener('mousedown', handleClickOutside)

    }, [userdrop])

    return (
        <div className='pt-8'>
            <Container>
                <nav className='flex justify-between items-center pb-8'>
                    <NavLink to={'/'}><Image src={logoImg} alt={"logo.png"} /></NavLink>
                    <div>
                        <ul className='flex gap-10'>
                            {
                                MenuData.map((item, index) => (
                                    <li key={item.id}>
                                        <NavLink className={`${item.url == pathName ? 'text-red-500 font-semibold' : 'text-black font-semibold'}`} to={item.url}>{item.label} </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </nav>
            </Container>
            <div className=' bg-gray1 py-6.25'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2.5 items-center'>
                            <div ref={dropDwonref} className='relative'>
                                {
                                    dropDown == false ?
                                        <HiOutlineBars3BottomLeft onClick={() => setdropDown(!dropDown)} className='text-3xl cursor-pointer' />
                                        : <IoCloseSharp onClick={() => setdropDown(!dropDown)} className='text-3xl cursor-pointer' />

                                }
                                <div>
                                    {dropDown &&
                                        <ul className='absolute -bottom-1 left-0 translate-y-full w-40 bg-white shadow-2xl'>
                                            {catagoryData.map((item, index) => (
                                                <NavLink className='py-2.5 border-b text-base last:border-b-0 px-8 block' to={item.url}>{item.label}</NavLink>
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
                            {islogin ?
                                <div ref={userdropdownref} onClick={() => setuserdrop(!userdrop)} className='flex items-center gap-2.5 relative'>
                                    <BsFillPersonFill className='text-2xl cursor-pointer' />
                                    <BsFillCaretDownFill className='cursor-pointer' />
                                    <div>
                                        {
                                            userdrop &&
                                            <ul className='absolute w-50  shadow-2xl bg-white right-0 -bottom-2 translate-y-full '>
                                                {profileData.map((item, index) => (
                                                    <NavLink className='py-2.5 border-b text-base last:border-b-0 px-8 block' to={item.url}>{item.label}</NavLink>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                </div>
                                :
                                <NavLink className={"text-2xl"} to={"/login"}>
                                    <MdLogin />
                                </NavLink>
                            }
                            <FaShoppingCart className='text-2xl cursor-pointer' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar
