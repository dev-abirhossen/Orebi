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


    const handleInput = (e)=>{
        console.log(e.target)
    }

    return (
        <section>
            <Container>
                <div>
                    <BreadCrumb rootPage={"Home"} label={"Registration"} />
                    <Paragraph className={desClss} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} />
                    <h3 className={headingClss}>Your Personal Details</h3>
                    <form className='grid grid-cols-2 gap-10 mt-10.5'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">First Name</label>
                                <Input onChange={handleInput} type="text" placeholder='First Name ' />
                            </div >
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">Email Address</label>
                                <Input type="text" placeholder='Enter a Email' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div  className='flex flex-col gap-2.5'>
                                <label className={formHead} htmlFor="">Last Name</label>
                                <Input type="text" placeholder='Last Name ' />
                            </div>
                            <div className='flex flex-col gap-2.5'>
                                <label  className={formHead} htmlFor="">Telephone </label>
                                <Input type="text" placeholder='Your phone number' />
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default RegistrationIndex