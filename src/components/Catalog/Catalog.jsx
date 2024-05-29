import React from 'react'
import Card from './Card'
import "./Catalog.scss"

function Catalog() {
  return (
    <div className='py-[53px] catalog'>
        <div className='container-box'>
            <p className='text-[28px] mb-4 font-semibold'>Каталог</p>
            <div className='flex justify-between'>
                <Card prosent={29} title={"Солнечные очки с дужками из бука"} sale_price={"3 500 ₽"} price={"2 500 ₽"} />
                <Card prosent={12} title={"Солнечные очки american policeman"} sale_price={"2 500 ₽"} price={"2 250 ₽"} />
                <Card prosent={3} title={"Солнечные очки из светлого дерева"} sale_price={"3 500 ₽"} price={"3 230 ₽"} />
                <Card prosent={6} title={"Солнечные очки с дужками из бука"} sale_price={"3 500 ₽"} price={"2 600 ₽"} />
                <Card prosent={11} title={"Солнечные очки из красного дерева"} sale_price={"2 500 ₽"} price={"1 800 ₽"} />
            </div>
        </div>
    </div>
  )
}

export default Catalog
