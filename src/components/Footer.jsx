import { Wrapper } from '../assets/wrappers/FooterComponent';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
        <ul className="social-icons">
            <li>
                <a href='https://www.instagram.com/j7oshua' className='social-icon'>
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href='https://ca.linkedin.com/in/joshuagrimard' className='social-icon'>
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href='https://github.com/j7oshua' className='social-icon'>
                    <FaGithub />
                </a>
            </li>
        </ul>
        <p>&copy; <span></span> Joshua Grimard - All Rights Reserved</p>
    </Wrapper>
  )
}
export default Footer;