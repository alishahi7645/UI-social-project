import React from 'react';
import phoneheader from '../../assets/phone-header-bg.png';
import {BsMouse} from 'react-icons/bs'
import './Header.css'
const Header = () => {
  return (
    <section id="header">
      <div className="container header">
        <div className="header-right">
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ . با استافاده از </p>
          <div className="header-btn">
            <a href="" className='btn btn-dark'>بیاین شروع کنید</a>
            <a href="" className='btn btn-light'>چجوری کار میکنیم</a>
          </div>
        </div>
        <div className="header-left">
          <img src={phoneheader} alt="" srcset="" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="">
          <BsMouse color={'#fff'} size={25} className='mouse'/>
        </a>
      </div>
    </section>
  )
};

export default Header;
