import React from 'react'
import './footer.scss';
import FacebookIcon from '@assets/icon-facebook.svg';
import PinterestIcon from '@assets/icon-pinterest.svg';
import InstagramIcon from '@assets/icon-instagram.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__hills">
      </div>
      <div className="footer__icons">
        <div className="footer__ icon facebook">
          <a href="#">
            <img src={FacebookIcon} alt="" />
          </a>
        </div>
        <div className="footer__ icon pinterest">
          <a href="#">
            <img src={PinterestIcon} alt="" />
          </a>
        </div>
        <div className="footer__ icon instagram">
          <a href="#">
            <img src={InstagramIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}
