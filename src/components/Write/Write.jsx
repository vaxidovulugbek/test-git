import React from 'react'
import "./Write.scss"
function Write() {
  return (
    <section className='py-[53px]'>
      <div className="container-box">
        <p className='text-[28px] mb-4 font-semibold text-center' >Напишите нам</p>
        <form className='flex flex-col justify-center w-[680px] mx-[auto]'>
            <input className='send-input' type="text" placeholder='Имя*' />
            <input className='send-input' type="text" placeholder='Телефон' />
            <input className='send-input' type="text" placeholder='Почта*' />
            <textarea className='area-input' name="" id="" placeholder='Комментарий'></textarea>
            <button className='send-btn'>Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default Write
