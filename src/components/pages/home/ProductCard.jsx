import React from 'react'
import Container from '../../common/Container'
import ProductCardImg from '../../../assets/images/cardimg.jpg'
import ProductCardBox from '../../common/ProductCardBox'
const ProductCard = () => {
  return (
    <section className='mt-32 mb-29.5 '>
        <Container>
            <h3 className='font-DMSans font-bold text-[39px] text-primary'>New Arrivals</h3>    
            <ProductCardBox img={ProductCardImg} alt={"ProductImg"} productName={"Basic Crew Neck Tee"} productPrice={"$44.00"}/>
        </Container>
    </section>

)
}

export default ProductCard