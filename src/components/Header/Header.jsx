import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
function Header() {
  return (
    <header className='flex items-center justify-between py-8 container-box'>
      <button className="flex items-center text-white text-[18px] font-semibold"><AiOutlineMenu /><span className='ms-3'>Меню</span></button>
      <p className='text-[36px] text-white fontm uppercase leading-[40px] font-semibold'>LANDING</p>
      <div className='flex items-center text-white'>
        <BsTelephone />
        <span className='ms-2'> +7 777 777 77 77</span>
      </div>
    </header>
  )
}

export default Header
