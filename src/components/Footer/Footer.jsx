import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki } from "react-icons/fa6";
import "./Footer.scss"

function Footer() {
  return (
    <footer className='footer py-[53px]'>
        <div className="container-box">
            <p className='text-[36px] mb-10 font-semibold text-center fontm uppercase leading-[40px] font-semibold'>Landing</p>
            <ul className='flex items-center justify-center'>
                <li className='px-[33px] text-2xl footer__icon'><a href="#"><FaTelegramPlane /></a></li>
                <li className='px-[33px] text-2xl footer__icon'><a href="#"><SlSocialVkontakte /></a></li>
                <li className='px-[33px] text-2xl footer__icon'><a href="#"><FaOdnoklassniki /></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
