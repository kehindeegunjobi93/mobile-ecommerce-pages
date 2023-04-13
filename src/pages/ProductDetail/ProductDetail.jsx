import React from 'react'
import DetailHeader from './component/DetailHeader/DetailHeader'
import DetailFooter from './component/DetailFooter/DetailFooter'
import Detail from './component/Detail/Detail'

const ProductDetail = () => {
  return (
    <div className='product-detail'>
      <DetailHeader/>
      <Detail/>
      <DetailFooter/>
    </div>
  )
}

export default ProductDetail