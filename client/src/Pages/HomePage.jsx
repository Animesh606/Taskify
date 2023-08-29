import { Link } from 'react-router-dom';
import logo from '../Components/Assets/6914347.jpg';

const HomePage = () => {
    return (
        <>
            <div className='main-container'>
                <section className="greeting">
                    <h1>Welcome to <span>Taskify</span></h1>
                    <p>Manage all your Tasks in an efficient way</p>
                    <Link to='/dashboard'>Explore</Link>
                </section>
                <section className="img">
                    <img src={logo} alt="Welcome" />
                </section>
            </div>
        </>
    )
}

export default HomePage;