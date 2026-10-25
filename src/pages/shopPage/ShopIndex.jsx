import React from 'react'
import ShopSideBar from '../../components/pages/shop/ShopSideBar'
import ShopProductView from '../../components/pages/shop/ShopProductView'
import Container from '../../components/common/Container'

const ShopIndex = () => {
  return (
    <section >
      <Container>
        <div className='grid grid-cols-[343px_auto] gap-10 mt-32.5'>
          <ShopSideBar />
          <ShopProductView />
        </div>
      </Container>
    </section>
  )
}

export default ShopIndex
