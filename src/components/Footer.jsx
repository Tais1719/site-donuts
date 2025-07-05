import Logo from '../assets/Logo.svg'; 
import { BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="footer-wapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo donuts" /> 
        </div>
        <div className='footer-icons'>
          <BsTwitter/>
          <SiLinkedin/>
          <BsYoutube/>
          <BsInstagram/>
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-colums'>
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Nossa Marca</span>
          <span>Carreira</span>
          <span>Avaliação</span>
          <span>Nosso Trabalho</span>
        </div>
        <div className='footer-section-colums'>
          <span>11-3222-1234</span>
          <span>ola@donuts.food.com</span>
          <span>midiadonts@food.com</span>
          <span>contato@food.com</span>
        </div>
        <div className='footer-section-colums'>
          <span>Termos e Condições</span>
          <span>Política</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
