import React from 'react'
import ochki from "../../assets/imgs/ochki.webp"
import "./Catalog.scss"

function Card({prosent, title, price, sale_price}) {
  return (
    <div className='rounded-lg overflow-hidden w-[228px]'>
      <div className='relative mb-2'>
        <span className='absolute top-0 left-0 z-[1] rounded catalog__card-percentage'>-{prosent}%</span>
        <img className='w-full h-[228px] z-[-2]' src={ochki} alt="" />
      </div>
      <div className='mx-2'>
        <h3 className='text-gray-500 leading-normal line text-[16px] mb-4'>{title}</h3>
        <p className='text-gray-500 leading-normal line text-[18px] mb-2 line-through'>{sale_price}</p>
        <p className='leading-normal line text-[28px] mb-4 font-semibold'>{price}</p>
        <button className='leading-normal w-full rounded-md line text-[16px] font-semibold catalog__card-btn text-white'>Заказ в один клик</button>
      </div>
    </div>
  )
}

export default Card
