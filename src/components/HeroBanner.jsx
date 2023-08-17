import { Wrapper } from '../assets/wrappers/HeroBanner';
import HeroImage from '../assets/images/hero-img.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <Wrapper>
        <div className='section-center hero-center'>
            <article className='hero-info'>
              <div className='underline'></div>
              <h1>I'm Joshua</h1>
              <h4>Full Stack Developer</h4>
              <Link to='contact' className='btn hero-btn'>Get In Touch</Link>
              <ul className="social-icons hero-icons">
                <li>
                    <a href='http://www.twitter.com' className='hero-icon'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='http://www.twitter.com' className='hero-icon'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href='http://www.twitter.com' className='hero-icon'>
                        <FaGithub />
                    </a>
                </li>
            </ul>
            </article>
            <article className='hero-img'>
                <img src={HeroImage} alt='hero' className='hero-photo'/>
            </article>
        </div>
    </Wrapper>
  )
}
export default HeroBanner;