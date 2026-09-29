import React, { useState } from 'react'
import Container from '../common/Container'
import { NavLink } from 'react-router-dom'
import { MenuData } from '../../dummyData/MenuData'
import { shopData } from '../ui/shopData'
import { helpData } from '../../dummyData/helpData'
import Paragraph from '../ui/Paragraph'
import Image from '../ui/Image'
import logo from "../../assets/images/logo.png"
import { footerIcon } from '../../dummyData/footericon'

const Footer = () => {
  const fotheadClss = `font-bold font-DMSans uppercase text-base text-primary leading-7 `

  const current = new Date().getFullYear()

  return (
    <footer className='bg-gray1 pt-13.75 pb-13'>
      <Container>
        <div>
          <div className='grid grid-cols-2'>
            <div className='flex gap-35.25 '>
              <div>
                <span className={fotheadClss}>MENU</span>
                <ul className='flex flex-col gap-1.5 mt-4.25'>
                  {
                    MenuData.map((item, index) => (
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
                      shopData.map((item, index) => (
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
                      helpData.map((item, index) => (
                        <li key={index}>
                          <NavLink className={"text-sm font-normal text-gray5 font-DMSans leading-5.75"} to={item.url}>{item.label}</NavLink>
                        </li>

                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className='flex gap-64'>
              <div >
                <div className='flex flex-col'>
                  <span className={fotheadClss}>(052) 611-5711</span>
                  <span className={fotheadClss}>company@domain.com</span>
                  <Paragraph className={"text-gray5 text-base font-normal font-DMSans leading-5.75 mt-4"} text={"575 Crescent Ave. Quakertown, PA 18951"} />
                </div>
              </div>

              <div>
                <Image src={logo} />
              </div>
            </div>

          </div>
        </div>
        <div className='mt-16.25 flex justify-between'>
          <ul className='flex gap-6'>
            {
              footerIcon.map((item, index) => (
                <li key={index}>
                  <NavLink className={"text-xl"} to={item.url}>{item.icon}</NavLink>
                </li>
              ))
            }
          </ul>
          <div>
            <span>{current} Orebi Minimal eCommerce Figma Template by Adveits</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
