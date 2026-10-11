import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import Paragraph from '../../components/ui/Paragraph'
import { MdOutlineChevronRight } from "react-icons/md";
import BreadCrumb from '../../components/common/BreadCrumb';
import Input from '../../components/ui/Input';
import PrimaryBtn from '../../components/ui/PrimaryBtn';


const LoginIndex = () => {
  const headingClss = `text-primary font-bold font-DMSans text-[39px]`
  const desClss = `max-w-161 mb-15.5 font-DMSans font-normal leading-7.5 text-base text-gray3`
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i

  const [formdata, setformdata] = useState({
    email: "", password: ""
  })
  const [error, seterror] = useState({
    email: "", password: ""
  })

  const handleChange = (event) => {
      const {name, value} = event.target
      setformdata((prevdata) =>(
        {...prevdata,
          [name]:value,
        }
      ))
      seterror((preverror)=>({
        ...preverror,
        [name]:""
      }))
  }

  const validation = ()=>{
    const validationError = {}
    if(!formdata.email.trim()){
      validationError.email = "Email is Required "
    }else if(!emailRegex.test(formdata.email.trim())){
      validationError.email = "Please Enter a valid Email"
    }
    if(!formdata.password.trim()){
      validationError.password = "Password is Required "
    }else if(formdata.password.length < 6){
      validationError.password = "Password Can be Must Minimum 6 Character"
    }
    return validationError
  }
  
  const handleIndex = (e) => {
    e.preventDefault()
    const validationError = validation()
    seterror(validationError)
    if(Object.keys(validationError).length>0){
      return;
    }
    console.log("Form Data :", formdata)
  }

  return (
    <div>
      <Container>
        <BreadCrumb label={"Login"} rootPage={"Home"} />
        <Paragraph className={desClss} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
        <form onSubmit={handleIndex} className='pt-14.25'>
          <span className={headingClss}>Returning Customer</span>
          <div className='grid grid-cols-2 mt-10.5 gap-10.75'>
            <div className='flex flex-col gap-2.5 pb-5'>
              <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Email Address</label>
              <Input onChange={handleChange} name={"email"} value={formdata.email} className={"outline-none py-2.5 text-lg border-b border-b-gray4 "} type={"text"} placeholder={"Enter Your Email"} />
              <span className='text-red-500'>{error.email}</span>
              <span className='text-red-500 '>{ }</span>
            </div>
            <div className='flex flex-col gap-2.5 pb-5'>
              <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Password</label>
              <Input onChange={handleChange} name="password" value={formdata.password} className={"outline-none py-2.5 text-lg border-b border-b-gray4  "} type={"password"} id={"password"} placeholder={"Enter Your Password"} />
              <span className='text-red-500'>{error.password}</span>
            </div>
          </div>
          <div className='pb-17.5 border-b border-b-gray4'>
            <PrimaryBtn type="submit" className={"mt-7.25 cursor-pointer"} text={"Login"} />
          </div>
        </form>
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

