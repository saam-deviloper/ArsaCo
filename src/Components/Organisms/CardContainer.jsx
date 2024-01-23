import React from 'react'
import { ProductCard } from '../Modules/ProductCard'

export const CardContainer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-1">
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
