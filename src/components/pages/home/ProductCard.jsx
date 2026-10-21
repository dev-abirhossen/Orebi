import React from 'react'
import Container from '../../common/Container'
import ProductCardBox from '../../common/ProductCardBox'
import { productCardData } from '../../../dummyData/productCardData'
const ProductCard = () => {
  return (
    <section className='mt-32 mb-29.5 '>
        <Container>
            <h3 className='font-DMSans font-bold text-[39px] text-primary'>New Arrivals</h3>    
            <div className='grid grid-cols-4 gap-10'>
                {productCardData.map((item,index)=>(
                     <ProductCardBox key={index} img={item.img} isDiscount={item.isDiscount} discountValue={item.discountValue}  isNew={item.isNew} catagory={item.catagory} alt={item.alt} productName={item.productName} productPrice={item.productPrice}/>
                ))}
            </div>
        </Container>
    </section>

)
}

export default ProductCard