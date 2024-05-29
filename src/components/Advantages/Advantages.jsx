import React from 'react'
import "./Advantages.scss"
import icon1 from "../../assets/imgs/icon1.webp"
import icon2 from "../../assets/imgs/icon2.webp"
import icon3 from "../../assets/imgs/icon3.webp"
import icon4 from "../../assets/imgs/icon4.webp"
import icon5 from "../../assets/imgs/icon4.webp"
import icon6 from "../../assets/imgs/icon6.webp"

function Advantages() {
  return (
    <section className='py-[53px] advantages'>
      <div className="container-box">
        <p className='text-[28px] mb-4 font-semibold'>Наши преимущества</p>
        <ul className='advantages__list flex flex-wrap'>
            <li className='flex items-center advantages__item rounded bg-white p-3'><img className='me-2 w-[32px] h-[32px]' src={icon1} alt="" /><span>Большой ассортимент цветов</span></li>
            <li className='flex items-center advantages__item rounded bg-white p-3'><img className='me-2 w-[32px] h-[32px]' src={icon2} alt="" /><span>Цены дешевле чем у конкурентов</span></li>
            <li className='flex items-center advantages__item rounded bg-white p-3'><img className='me-2 w-[32px] h-[32px]' src={icon3} alt="" /><span>Легкий и быстрый заказ</span></li>
            <li className='flex items-center advantages__item rounded bg-white p-3'><img className='me-2 w-[32px] h-[32px]' src={icon4} alt="" /><span>Доставка по всему миру</span></li>
            <li className='flex items-center advantages__item rounded bg-white p-3'><img className='me-2 w-[32px] h-[32px]' src={icon5} alt="" /><span>Доставка на дом</span></li>
            <li className='flex items-center advantages__item rounded bg-white p-3'><img className='me-2 w-[32px] h-[32px]' src={icon6} alt="" /><span>Гибкая кредитная система</span></li>
        </ul>
      </div>
    </section>
  )
}

export default Advantages
