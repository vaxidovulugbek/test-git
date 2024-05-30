import { Drawer } from 'antd';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CloseOutlined } from "@ant-design/icons";
import "./Header.scss"
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki } from "react-icons/fa6";

function Header() {
  const [open,setOpen] = useState(false)

  const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

  return (
    <>
      <header className='flex items-center justify-between py-8 container-box header'>
        <button onClick={showDrawer} className="flex items-center text-white text-[18px] font-semibold"><AiOutlineMenu /><span className='ms-3'>Меню</span></button>
        <p className='text-[36px] text-white fontm uppercase leading-[40px] font-semibold'>LANDING</p>
        <div className='flex items-center text-white'>
          <BsTelephone />
          <a href="tel:+77777777777" className='ms-2'> +7 777 777 77 77</a>
        </div>
      </header>
      <Drawer
          width={500}
          placement={"left"}
          className={`drawer_view`}
          open={open}
          onClose={onClose}
          title={"Меню"}
          closable={true}
          closeIcon={<CloseOutlined className='header__close' />}
				>
          <div className='flex flex-col header__modal-block'>
            <p className='header__modal-title'>Информация</p>
            <ul className='flex flex-col'>
              <li className='header__modal-text'><a href="#">Контакты</a></li>
              <li className='header__modal-text'><a href="#">Оферта</a></li>
              <li className='header__modal-text'><a href="#">Оплата</a></li>
              <li className='header__modal-text'><a href="#">Доставка</a></li>
            </ul>
          </div>
          <div className='flex flex-col header__modal-block'>
            <p className='header__modal-title'>Контакты</p>
            <a href="#" className='header__modal-text'>+7 777 777 77 77</a>
            <p className='header__modal-text'>г Москва, ул 1-я Тверская-Ямская, д 21</p>
          </div>
          <div>
            <ul className='flex items-center gap-4'>
              <li className='header__modal-icon'><a href="#"><FaTelegramPlane /></a></li>
              <li className='header__modal-icon'><a href="#"><SlSocialVkontakte /></a></li>
              <li className='header__modal-icon'><a href="#"><FaOdnoklassniki /></a></li>
            </ul>
          </div>
        </Drawer>
    </>
  )
}

export default Header
