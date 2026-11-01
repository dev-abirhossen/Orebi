import React from 'react'
import Container from '../../common/Container'
import Image from '../../ui/Image'
import yearPromoOfferImg from '../../../assets/images/yearPromoOffer.png'
import Paragraph from '../../ui/Paragraph'
import PrimaryBtn from '../../ui/PrimaryBtn'
const YearPromoOffer = () => {
  return (
    <section className='py-32.5'>
        <Container>
            <div className='grid grid-cols-2 gap-12.5 items-center bg-[#f3f3f3]'>
                <Image src={yearPromoOfferImg}/>
                <div className=''>
                    <h4 className='font-DMSans font-bold text-primary text-[39px]'>Phone of the year</h4>
                    <Paragraph className={"max-w-127.75 mt-9.5 mb-12.25 text-base text-primary font-DMSans font-normal leading-7.5"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."}/>
                    <PrimaryBtn text={"Shop Now"}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default YearPromoOffer