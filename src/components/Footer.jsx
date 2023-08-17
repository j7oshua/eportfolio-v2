import { Wrapper } from '../assets/wrappers/FooterComponent';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
        <ul className="social-icons">
            <li>
                <a href='http://www.twitter.com' className='social-icon'>
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href='http://www.twitter.com' className='social-icon'>
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href='http://www.twitter.com' className='social-icon'>
                    <FaGithub />
                </a>
            </li>
        </ul>
        <p>&copy; <span></span> Joshua Grimard - All Rights Reserved</p>
    </Wrapper>
  )
}
export default Footer;