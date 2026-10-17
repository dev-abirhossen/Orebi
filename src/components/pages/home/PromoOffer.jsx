import React from 'react'
import Container from '../../common/Container'
import Image from '../../ui/Image'
import promo1 from '../../../assets/images/promo1.png'
import promo2 from '../../../assets/images/promo2.png'
import promo3 from '../../../assets/images/promo3.png'
import { NavLink } from 'react-router-dom'

const PromoOffer = () => {
  return (
    <section className='mt-35'>
        <Container>
            <div className='flex gap-10'>
                <NavLink to={"#"} className='size-195 object-cover bg-center overflow-hidden'><Image src={promo1} alt={"promoOffer"}/></NavLink>
                <div className='flex flex-col gap-10'>
                    <NavLink to={"#"} className='w-196 h-92.5 '><Image src={promo2} alt={"promoOffer"}/></NavLink>
                    <NavLink to={"#"} className='w-196 h-92.5 '><Image src={promo3} alt={"promoOffer"}/></NavLink>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default PromoOffer