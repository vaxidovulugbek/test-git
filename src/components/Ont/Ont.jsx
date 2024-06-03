import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki } from "react-icons/fa6";
import "./Contacts.scss";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Ont() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <section className="contacts py-[53px]">
      <div className="container-box">
        <div className="flex items-center gap-9">
          <div className="w-1/2 h-[422px] overflow-hidden">
            {/* <GoogleMapReact
            className="w-full h-full h-[422px]"
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
        className="w-full h-full h-[422px]"
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact> */}
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="text-[27px] font-semibold text-gray-700 tracking-wide mb-5">Наши контакты</p>
            <a className="text-[26px] mb-1 line text-gray-700" href="tel:+77777777777">+7 777 777 77 77</a>
            <a className="text-[26px] mb-3 line text-gray-700" href="#">sun_glasses@insales.ru</a>
            <p className="text-md text-gray-600 mb-8">г Москва, ул 1-я Тверская-Ямская, д 21</p>
            <ul className="flex items-center gap-3">
              <li className="contacts__link">
                <a href="#">
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="contacts__link">
                <a href="#">
                  <SlSocialVkontakte />
                </a>
              </li>
              <li className="contacts__link">
                <a href="#">
                  <FaOdnoklassniki />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ont;
