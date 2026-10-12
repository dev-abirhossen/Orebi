import React, { useState } from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Paragraph from '../../components/ui/Paragraph'
import Input from '../../components/ui/Input'
import PrimaryBtn from '../../components/ui/PrimaryBtn'

const RegistrationIndex = () => {

    const desClss = `max-w-161 mb-15.5 font-DMSans font-normal leading-7.5 text-base text-gray3`
    const headingClss = `text-primary font-bold font-DMSans text-[39px] pt-14`
    const formHead = `font-bold text-base text-primary font-DMSans`
    const fromInput = `outline-none`

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
    
      const [formdata, setformdata] = useState({
        email: "", password: "", firstName: "", lastName: "", telephone: "", address1: "", address2: "", city: "", postCode: "", confirmPassword: ""
      })
      const [error, seterror] = useState({
        email: "", password: "", firstName: "", lastName: "", telephone: "", address1: "", address2: "", city: "", postCode: "", confirmPassword: ""
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
        // first name check
        if(formdata.firstName.trim() === ""){
            validationError.firstName = "First Name is Required"
        }
        // last Name Check 
        if(formdata.lastName.trim() === ""){
            validationError.lastName = "Last Name is Required"
        }
        // email check
        if(!formdata.email.trim()){
          validationError.email = "Email is Required "
        }else if(!emailRegex.test(formdata.email.trim())){
          validationError.email = "Please Enter a valid Email"
        }
        // telephone check
        if(!formdata.telephone.trim()){
          validationError.telephone = "Telephone is Required "
        }
        // password check
        if(!formdata.password.trim()){
          validationError.password = "Password is Required "
        }else if(formdata.password.length < 6){
          validationError.password = "Password Can be Must Minimum 6 Character"
        }
        // confirm password check
        if(!formdata.confirmPassword.trim()){
          validationError.confirmPassword = "Confirm Password is Required "
        }else if(formdata.confirmPassword !== formdata.password){
          validationError.confirmPassword = "Confirm Password Does Not Match"
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
        console.log(validationError)
      }

    return (
        <section>
            <Container>
                <div>
                    <BreadCrumb rootPage={"Home"} label={"Registration"} />
                    <Paragraph className={desClss} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
                    <h3 className={headingClss}>Your Personal Details</h3>
                    <form onSubmit={handleIndex}>
                        <div className='grid grid-cols-2 gap-10 mt-10.5 mb-32'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead}>First Name</label>
                                <Input onChange={handleChange} name="firstName" value={formdata.firstName} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='First Name ' />
                                <span className='text-red-500'>{error.firstName}</span>
                            </div >
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} >Email Address</label>
                                <Input onChange={handleChange} name="email" value={formdata.email} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Enter a Email' />
                                <span className='text-red-500'>{error.email}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} >Last Name</label>
                                <Input onChange={handleChange} name="lastName" value={formdata.lastName} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Last Name ' />
                                <span className='text-red-500'>{error.lastName}</span>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead}>Telephone </label>
                                <Input onChange={handleChange} name="telephone" value={formdata.telephone} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Your phone number' />
                                <span className='text-red-500'>{error.telephone}</span>
                            </div>
                        </div>
                        <h3 className={headingClss}>New Customer</h3>
                    </div>
                    <div className='grid grid-cols-2 gap-10 mt-10.5 mb-32'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} >Address 1</label>
                                <Input onChange={handleChange} name="address1" value={formdata.address1} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='4279 Zboncak Port Suite 6212' />
                                <span className='text-red-500'>{error.address1}</span>
                            </div >
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} >City</label>
                                <Input onChange={handleChange} name="city" value={formdata.city} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Your city' />
                                <span className='text-red-500'>{error.city}</span>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead}>Division</label>
                                <select id="selectDivision">
                                    <option value="dhaka">Dhaka</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead}>Address 2</label>
                                <Input onChange={handleChange} name="address2" value={formdata.address2} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='_' />
                                <span className='text-red-500'>{error.address2}</span>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} >Post Code </label>
                                <Input onChange={handleChange} name="postCode" value={formdata.postCode} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='05521' />
                                <span className='text-red-500'>{error.postCode}</span>
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                 <label  className={formHead}>District</label>
                                <select id="selectDistrict">
                                    <option value="dhaka">Dhaka</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <h3 className={headingClss}>Your Password</h3>
                    <div className='grid grid-cols-2 gap-10 mt-10.5 mb-32'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} >Password</label>
                                <Input onChange={handleChange} name="password" value={formdata.password} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="password" placeholder='******** ' />
                                <span className='text-red-500'>{error.password}</span>
                            </div >
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead}>Repeat Password</label>
                                <Input onChange={handleChange} name="confirmPassword" value={formdata.confirmPassword} className={"outline-0 py-2.5 border-b border-b-gray4 "} type="password" placeholder='******** ' />
                                <span className='text-red-500'>{error.confirmPassword}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-px bg-gray4' />
                        <div className='flex flex-row gap-2.5 mt-15'>
                            <input type="checkbox" />
                            <label className='text-gray3 text-sm font-DMSans font-normal'>I have read and agree to the Privacy Policy</label>
                        </div>
                        <div className='flex flex-row items-center gap-10 mt-6'>
                            <span className='text-gray3 text-sm font-DMSans font-normal'>Subscribe Newsletter</span>
                            <div className='flex flex-row gap-2'>
                                <Input name={"yes"} type={"radio"} />
                                <label className='text-gray3 text-sm font-DMSans font-normal' >Yes</label>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <Input name={"yes"} type={"radio"} />
                                <label className='text-gray3 text-sm font-DMSans font-normal' >No</label>
                            </div>
                        </div>
                        <PrimaryBtn type="submit" className={"mt-7 mb-45"} text={"Log In"}/>
                    </form>
                    </div>
            </Container>
        </section>
    )
}

export default RegistrationIndex