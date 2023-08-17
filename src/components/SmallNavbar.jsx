import { Aside } from '../assets/wrappers/SmallNavbar';
import { FaTimes, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SmallNavbar = ({toggleSidebar}) => {
  return (
    <Aside>
        <div>
            <button className='close-btn' onClick={() => toggleSidebar(false)}>
                <FaTimes />
            </button>
            <ul className="sidebar-links">
                <li>
                    <NavLink to='/' onClick={() => toggleSidebar(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='about' onClick={() => toggleSidebar(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to='projects' onClick={() => toggleSidebar(false)}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='contact' onClick={() => toggleSidebar(false)}>Contact</NavLink>
                </li>
            </ul>
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
        </div>
    </Aside>
  )
}
export default SmallNavbar;