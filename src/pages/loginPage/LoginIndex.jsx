import React from 'react'
import Container from '../../components/common/Container'
import Paragraph from '../../components/ui/Paragraph'
import { MdOutlineChevronRight } from "react-icons/md";
import BreadCrumb from '../../components/common/BreadCrumb';
import Input from '../../components/ui/Input';
import PrimaryBtn from '../../components/ui/PrimaryBtn';


const LoginIndex = () => {
  const headingClss = `text-primary font-bold font-DMSans text-[39px]`
  const desClss = `max-w-161 mb-15.5 font-DMSans font-normal leading-7.5 text-base text-gray3`
  return (
    <div>
      <Container>
        <BreadCrumb label={"Login"} rootPage={"Home"} />
        <Paragraph className={desClss} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
        <div className='pt-14.25'>
          <span className={headingClss}>Returning Customer</span>
          <div className='grid grid-cols-2 mt-10.5 gap-10.75'>
            <div className='flex flex-col gap-2.5 border-b border-b-gray4 pb-5'>
              <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Email Address</label>
              <Input className={"outline-none py-2.5 text-lg"} type={"email"} id={"email"} placeholder={"Enter Your Email"} />
            </div>
            <div className='flex flex-col gap-2.5 border-b border-b-gray4 pb-5'>
              <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Password</label>
              <Input className={"outline-none py-2.5"} type={"password"} id={"password"} placeholder={"Enter Your Password"} />
            </div>
          </div>
        </div>
        <div className='pb-17.5 border-b border-b-gray4'>
          <PrimaryBtn className={"mt-7.25"} text={"Login"} />
        </div>
        <div className='mb-35'>
          <span className={headingClss}>New Customer</span>
          <Paragraph className={desClss} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
          <PrimaryBtn text={"Continue"} />
        </div>


      </Container>
    </div>
  )
}

export default LoginIndex

