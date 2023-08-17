import { Link, Outlet } from 'react-router-dom';
import logo from './../logo.svg';
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <span id='appName'>Taskify</span>
                </div>
                <div className='navLinks'>
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
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar;