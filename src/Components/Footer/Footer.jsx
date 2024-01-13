import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import{BsWhatsapp} from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-above">
      <div className="footer-logo"><a href="#"><img src={logo} alt="logo" /></a></div>
      <div className="for-clients">
        <p className='footer-text'>For Clients</p>
        <li >About</li>
        <li href="#">For corporate clients</li>
        <li href="#">Return Policy of monetary funds</li>
        <li href="#">Loyalty Program</li>
        <li href="#">Terms and Conditions</li>



      </div>
      <div className="contact-us">
<p className='footer-text'>Contact us</p>
<p className='footer-text'> Fizuli str.
 </p>
 <h3>+994 50 226 16 63</h3>
 <span className='whatsapp-chat'>Whatsapp Chat <BsWhatsapp/></span> 
 <p className='footer-text'>Neftchiler ave. </p>
 <h3>+994 50 226 16 67 </h3>
 <span className='whatsapp-chat'>Whatsapp Chat <BsWhatsapp/></span>
 <p>info@lilac.az</p>

      </div>
      <div className="follow-us">
        <p className='footer-text'>Follow Us</p>
        <a href="https://en-gb.facebook.com/">Facebook</a>
        <a href="https://www.instagram.com/">Instargram</a>
        <a href="https://www.youtube.com/watch?v=7s_P4KJTQK4">Youtube</a>
        <a href="https://gb.linkedin.com/">LinkedIn</a>
      </div></div>
      <div className="footer-bottom">
      © 2021 Lilac
      <span> <a href="https://play.google.com/store/apps/details?id=com.frazec.onlinestore.lilac&hl=en_US&gl=US">Google Play</a></span>
      <span><a href="https://apps.apple.com/az/app/lilac-az/id1535781509">App Store</a></span>

      </div>
    </footer>
    </>
  )
}

export default Footer
