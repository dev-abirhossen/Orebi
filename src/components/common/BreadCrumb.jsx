import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'

const BreadCrumb = ({label, rootPage }) => {
    return (
        <div className='mt-30 mb-38.5'>
            <span className='font-bold text-primary text-[49px] font-DMSans '>{label}</span>
            <div className='flex items-center gap-1'>
                <p  className="text-gray2 text-[12px] font-normal font-DMSans">{rootPage} </p>
                <MdOutlineChevronRight />
                <p  className="text-gray2 text-[12px] font-normal font-DMSans">{label} </p>
            </div>
        </div>
    )
}

export default BreadCrumb
