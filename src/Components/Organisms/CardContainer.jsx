import React from 'react'
import { ProductCard } from '../Modules/ProductCard'

export const CardContainer = () => {
  return (
    <>
      <div style={{backgroundColor:'#BED9DD'}} className="grid grid-cols-4 gap-x-2 gap-y-2 ">
        {/* dummy list should render with 8 product cards */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>


    </div>
    </>
  )
}
