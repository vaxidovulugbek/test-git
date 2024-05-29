import React from 'react'
import "./Reviews.scss"

function Reviews() {
  return (
    <section className='reviews py-[53px]'>
      <div className='container-box'>
        <p className='text-[28px] mb-4 font-semibold'>Отзывы клиентов</p>
        <div className='flex flex-wrap reviews__content'>
            <div className='flex flex-col p-[30px] rounded-2xl bg-white reviews__item'>
                <h4 className='text-[24px] font-semibold mb-3'>Анна Ковалева</h4>
                <p className='text-md text-gray-700'>Я была приятно удивлена, когда получила свои новые деревянные очки. Они выглядят стильно. Это не просто аксессуар - это заявление о моей любви к природе. Спасибо за прекрасный продукт и отличный сервис!</p>
            </div>
            <div className='flex flex-col p-[30px] rounded-2xl bg-white reviews__item'>
                <h4 className='text-[24px] font-semibold mb-3'>Михаил Громов</h4>
                <p className='text-md text-gray-700'>Когда я заказывал очки из дерева, не ожидал, что они будут настолько комфортными и качественными. Линзы защищают глаза от солнца, а рамка прекрасно сидит. Рекомендую всем, кто ценит уникальность и качество!</p>
            </div>
            <div className='flex flex-col p-[30px] rounded-2xl bg-white reviews__item'>
                <h4 className='text-[24px] font-semibold mb-3'>Вероника Сергеева</h4>
                <p className='text-md text-gray-700'>Эти деревянные очки — лучшее, что я нашла онлайн. Они идеально дополняют мой образ, и я постоянно получаю комплименты. Отдельное спасибо за экологическую упаковку и быструю доставку!</p>
            </div>
            <div className='flex flex-col p-[30px] rounded-2xl bg-white reviews__item'>
                <h4 className='text-[24px] font-semibold mb-3'>Дмитрий Николаев</h4>
                <p className='text-md text-gray-700'>Выбирал подарок для друга и наткнулся на очки из дерева. Это стало прекрасным выбором. Друг остался в восторге от подарка, а я — от сервиса магазина. Теперь планирую заказать ещё одну пару для себя!</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
