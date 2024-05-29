import React from 'react'
import bg from "../../assets/imgs/bg.webp"
import "./Hero.scss"

function Hero() {
  return (
    <div className='flex flex-col container-box hero'>
      <picture>
          <div className='w-full absolute top-0 left-0 z-[-1] h-[881px] hero__bg'></div>
          <img className='w-full absolute top-0 left-0 z-[-2] h-[881px]' src={bg} alt="" />
      </picture>
      <div className='pt-[123px] pb-[214px]'>
        <h1 className='text-white text-[64px] mb-8 font-semibold w-4/5 leading-normal hero__title'>Натуральный стиль и экологичность: очки из дерева</h1>
        <p className='text-white w-2/3 text-[24px] mb-6 leading-normal'>Откройте для себя уникальность деревянных очков. Созданные с заботой о природе и вашем комфорте, наши очки - это сочетание инновационного дизайна и природных материалов. Каждая пара очков ручной работы является отражением вашей любви к планете и стремления к оригинальности.</p>
        <a className='rounded-md inline-flex items-center text-white text-[19px] hero__link' href="#">Узнать подробнее</a>
      </div>
    </div>
  )
}

export default Hero
