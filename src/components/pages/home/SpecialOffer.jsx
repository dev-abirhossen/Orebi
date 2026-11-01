import React from 'react'
import { productCardData } from '../../../dummyData/productCardData'
import ProductCardBox from '../../common/ProductCardBox'
import Container from '../../common/Container'

const SpecialOffer = () => {
  return (
    <section>
            <Container>
                <h3 className='font-DMSans font-bold text-[39px] text-primary'>Special Offers</h3>
                <div className='relative gap-10 grid grid-cols-4'>
                    {productCardData.slice(0, 4).map((item, index) => (
                        <div key={index}>
                            <ProductCardBox img={item.img} isDiscount={item.isDiscount} slag={item.slag} discountValue={item.discountValue} isNew={item.isNew} catagory={item.catagory} alt={item.alt} productName={item.productName} productPrice={item.productPrice} />
                        </div>
                    ))}
            </div>
        </Container>
        </section >
  )
}

export default SpecialOffer