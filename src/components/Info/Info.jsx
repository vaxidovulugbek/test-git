import React from 'react'
import ph from "../../assets/imgs/ph.webp"
import "./Info.scss"
function Info() {
  return (
    <section className='py-[53px] info'>
     <div className='container-box flex'>
        <img className='w-1/2 me-8 h-[423px]' src={ph} alt="" />
        <div className='flex flex-col w-1/2'>
            <p className='text-[30px] info__text mb-8 font-semibold'>Откройте мир ярких красок с солнечными очками из дерева</p>
            <p className='text-[20px] info__subtext'>В современном мире очки - это не просто средство коррекции зрения, это стильный аксессуар, который подчеркивает вашу индивидуальность. Мы предлагаем эксклюзивную коллекцию очков, которые сочетают в себе элегантность, комфорт и качество.</p>
        </div>
     </div>
    </section>
  )
}

export default Info
