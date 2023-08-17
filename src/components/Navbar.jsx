import { Wrapper } from '../assets/wrappers/Navbar';
import { FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { SmallNavbar } from './index';

const Navbar = () => {
    const [showSidebar, toggleSidebar] = useState(false);

    if (showSidebar) {
        return (<SmallNavbar toggleSidebar={toggleSidebar}/>)
    }

  return (
    <Wrapper>
        <div className="nav-center">
            <div className="nav-header">
                <h4 className="logo">
                    Joshua <span className="last-name">Grimard</span>
                </h4>
                <button className="nav-btn" onClick={()=> toggleSidebar(true)}>
                    <FaBars />
                </button>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='projects'>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
    </Wrapper>
  )
}
export default Navbar;