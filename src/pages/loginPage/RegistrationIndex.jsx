import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Paragraph from '../../components/ui/Paragraph'
import Input from '../../components/ui/Input'

const RegistrationIndex = () => {

    const desClss = `max-w-161 mb-15.5 font-DMSans font-normal leading-7.5 text-base text-gray3`
    const headingClss = `text-primary font-bold font-DMSans text-[39px] pt-14`
    const formHead = `font-bold text-base text-primary font-DMSans`
    const fromInput =  `outline-none`


    return (
        <section>
            <Container>
                <div>
                    <BreadCrumb rootPage={"Home"} label={"Registration"} />
                    <Paragraph className={desClss} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
                    <h3 className={headingClss}>Your Personal Details</h3>
                    <form className='grid grid-cols-2 gap-10 mt-10.5 mb-32'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">First Name</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='First Name ' />
                            </div >
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">Email Address</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Enter a Email' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div  className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">Last Name</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Last Name ' />
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">Telephone </label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Your phone number' />
                            </div>
                        </div>
                        <h3 className={headingClss}>New Customer</h3>
                    </form>
                    <form className='grid grid-cols-2 gap-10 mt-10.5 mb-32'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">Address 1</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='4279 Zboncak Port Suite 6212' />
                            </div >
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">City</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='Your city' />
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label for="selectDivision" className={formHead} htmlFor="">Division</label>
                                <select id="selectDivision">
                                    <option value="dhaka">Dhaka</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div  className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">Address 2</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='_' />
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">Post Code </label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="text" placeholder='05521' />
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">District </label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="checkbox" placeholder='Please Select District' />
                            </div>
                        </div>
                    </form>
                    <h3 className={headingClss}>Your Password</h3>
                     <form className='grid grid-cols-2 gap-10 mt-10.5 mb-32'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">Password</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="password" placeholder='******** ' />
                            </div >
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div  className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">Repeat Password</label>
                                <Input className={"outline-0 py-2.5 border-b border-b-gray4 "} type="password" placeholder='******** ' />
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default RegistrationIndex