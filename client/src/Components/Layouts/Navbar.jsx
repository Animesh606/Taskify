import { Link, Outlet } from 'react-router-dom';
import logo from '../../logo.svg';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <span id='appName'>Taskify</span>
                </div>
                <div className={`navLinks ${(show) ? 'responsive' : ''}`}>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/login'>Log In</Link>
                        </li>
                    </ul>
                </div>
                <FaBars className={`react-icon bar ${(show) ? 'responsive' : ''}`} title='Menu' onClick={() => setShow(!show)}/>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;