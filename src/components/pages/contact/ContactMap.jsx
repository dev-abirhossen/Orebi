import React, { useState } from 'react'
import Image from '../../ui/Image'
import mapImg from "../../../assets/images/map.png"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { mapAccordionData } from '../../../dummyData/mapAccordionData';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";



const ContactMap = () => {

  const [activeIndex, setactiveIndex] = useState()

  const handleIndex = (id)=>{
    if(activeIndex === id){
      setactiveIndex("")
    }else{
      setactiveIndex(id)
    }
  }

  return (
    <section>
      <div className='relative'>
        <Image src={mapImg} alt={"mapImg"} className={"w-full h-full object-cover"} />
        <div className='w-112.5 bg-white absolute top-1/2 -translate-y-1/2 left-20'>
          <Accordion allowZeroExpanded>
            {mapAccordionData.map((item) => (
              <AccordionItem className='py-7.5  px-5 flex flex-col gap-2.5' key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton onClick={()=>handleIndex(item.id)}  className='flex justify-between items-center text-primary font-DMSans font-bold text-base leading-5.75'>
                    {item.title} {activeIndex === item.id? <FaMinus /> :  <FaPlus /> }
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul>
                  {
                    item.desc.map((descItem, descIndex)=>(
                      <li key={descIndex} className='text-primary/75'>{descItem}</li>
                      ))
                    }
                    </ul>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default ContactMap