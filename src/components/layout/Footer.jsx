import React from 'react'
import Container from '../common/Container'
import { NavLink } from 'react-router-dom'
import { MenuData } from '../../dummyData/MenuData'
import { shopData } from '../ui/shopData'
import { helpData } from '../../dummyData/helpData'
import Paragraph from '../ui/Paragraph'
import Image from '../ui/Image'
import logo from "../../assets/images/logo.png"

const Footer = () => {
  const fotheadClss = `font-bold font-DMSans uppercase text-base text-primary leading-7 `
  return (
    <footer className='bg-gray1 pt-13.75 pb-13'>
      <Container>
        <div className='flex justify-between'>
          <div>
            <span className={fotheadClss}>MENU</span>
            <ul className='flex flex-col gap-1.5 mt-4.25'>
              {
                MenuData.map((item,index)=>(
              <li key={index}>
                <NavLink className={"text-sm font-normal text-gray5 font-DMSans leading-5.75"} to={item.url}>{item.label}</NavLink>
              </li>
                  
                ))
              }
            </ul>
          </div>
          <div>
            <span className={fotheadClss}>Shop</span>
            <div>
              <ul className='flex flex-col gap-1.5 mt-4.25 '>
                {
                  shopData.map((item,index)=>(
                <li key={index}>
                  <NavLink className={"text-sm font-normal text-gray5 font-DMSans leading-5.75"} to={item.url}>{item.label}</NavLink>
                </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div>
            <span className={fotheadClss}>Help</span>
            <div>
              <ul className='flex flex-col gap-1.5 mt-4.25'>
                {
                  helpData.map((item,index)=>(
                <li key={index}>
                  <NavLink className={"text-sm font-normal text-gray5 font-DMSans leading-5.75"} to={item.url}>{item.label}</NavLink>
                </li>

                  ))
                }
              </ul>
            </div>
          </div>

          <div >
            <div className='flex flex-col'>
              <span className={fotheadClss}>(052) 611-5711</span>
            <span className={fotheadClss}>company@domain.com</span>
            <Paragraph className={"text-gray5 text-base font-normal font-DMSans leading-5.75 mt-4"} text={"575 Crescent Ave. Quakertown, PA 18951"}/>
            </div>
          </div>

          <div>
            <Image src={logo}/>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer
