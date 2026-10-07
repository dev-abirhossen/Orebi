import React, { useState } from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import Input from '../../ui/Input'
import PrimaryBtn from '../../ui/PrimaryBtn'

const ContactForm = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i


    const [formData, setformData] = useState({
        name:"",
        email: "",
        msg: "",
    });

    const [formError, setformError] = useState({
        name:"",
        email: "",
        msg: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        // setformError({})
    };
    const handleClick = () => {
        if (!formData.name) {
            setformError((prevError) => ({
                ...prevError,
                email: "Name is required"
            }));
        }
        if (!formData.email) {
            setformError((prevError) => ({
                ...prevError,
                name: "Email is required"
            }));
        } else if (!emailRegex.test(formData.email)) {
            setformError((prevError) => ({
                ...prevError,
                email: "Invalid email format"
            }));
        }
        else {
            setformError((prevError) => ({
                ...prevError,
                email: ""
            }));
        }
        if (!formData.msg) {
            setformError((prevError) => ({
                ...prevError,
                msg: "Message is required"
            }));
        } else {
            setformError((prevError) => ({
                ...prevError,
                msg: ""
            }));
        }
    };

    return (
        <section>
            <div>
                <BreadCrumb label={"Contacts"} rootPage={"Home"} />
                <h3 className='font-bold text-[39px] font-DMSans text-primary'>Fill up a Form</h3>
                <div className='grid grid-cols-1 mt-10.5 gap-6'>
                    <div className='flex flex-col gap-2.5 pb-5 '>
                        <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Name</label>
                        <Input onChange={handleChange} name="name" className={"outline-none py-2.5 text-lg border-b border-b-gray4 "} type={"text"} id={"name"} placeholder={"Enter Your Name"} />
                        {
                            formError.name &&
                            <span className='text-red-500 text-sm'>{formError.name}</span>
                        }
                    </div>
                    <div className='flex flex-col gap-2.5 pb-5'>
                        <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Email Address</label>
                        <Input onChange={handleChange} name="email" className={"outline-none py-2.5 text-lg border-b border-b-gray4 "} type={"email"} id={"email"} placeholder={"Enter Your Email"} />
                        {
                            formError.email &&
                            <span className='text-red-500 text-sm'>{formError.email}</span>
                        }
                    </div>
                    <div className='flex flex-col gap-2.5 pb-5'>
                        <label className='font-bold font-DMSans text-primary text-base leading-5.75' htmlFor="">Message</label>
                        <textarea onChange={handleChange} name="msg" className={"outline-none min-h-20 py-2.5 border-b border-b-gray4 "} type={"password"} id={"msg"} placeholder={"Enter Your Message"} />
                        {
                            formError.msg &&
                            <span className='text-red-500 text-sm'>{formError.msg}</span>
                        }
                    </div>
                </div>
                <div className='pb-17.5 '>
                    <PrimaryBtn onClick={handleClick} className={"mt-7.25 cursor-pointer"} text={"Login"} />
                </div>
            </div>
        </section>
    )
}

export default ContactForm