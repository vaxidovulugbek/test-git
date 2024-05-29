import React from 'react'
import "./Gallery.scss"
import one from "../../assets/imgs/one.webp"
import two from "../../assets/imgs/two.webp"
import three from "../../assets/imgs/three.webp"
import four from "../../assets/imgs/four.webp"
import five from "../../assets/imgs/five.webp"

function Gallery() {
  return (
    <section className='py-[53px] gallery'>
        <div className='container-box'>
            <p className='text-[28px] mb-4 font-semibold'>Наша галерея</p>
            <ul className='gallery__list flex flex-wrap'>
                <li className='gallery__item'><img className='w-full h-[234px]' src={one} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={two} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={three} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={one} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={four} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={five} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={four} alt="" /></li>
                <li className='gallery__item'><img className='w-full h-[234px]' src={five} alt="" /></li>
            </ul>
        </div>
    </section>
  )
}

export default Gallery
