import React from 'react'
import Container from '../../common/Container'
import { compitentData } from '../../../dummyData/compitentData'

const OurCompitent = () => {
  return (
    <section className='py-7.5 '>
        <Container>
            <div className='flex justify-between'>
                {compitentData.map((item,index)=>(
                    <div key={index} className='flex gap-4 items-center'>
                         <span className='text-2xl font-bold text-primary'>{item.icon}</span>
                         <h5 className='font-normal text-base font-DMSans text-gray5'>{item.label}</h5>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default OurCompitent