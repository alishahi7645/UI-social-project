import React from 'react';
import phoneheader from '../../assets/phone-header-bg.png'
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
          <small>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ . با استافاده از </small>
          <div className="header-btn">
            <a href="" className='btn btn-dark'>بیاین شروع کنید</a>
            <a href="" className='btn btn-light'>چجوری کار میکنیم</a>
          </div>
        </div>
        <div className="header-left">
          <img src={phoneheader} alt="" srcset="" />
        </div>
      </div>
    </section>
  )
};

export default Header;
