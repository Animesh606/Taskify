import logo from './../Assets/6914347.jpg';

const HomePage = () => {
    return (
        <>
            <div className='main-container'>
                <section className="greeting">
                    <h1>Welcome to <span>Taskify</span></h1>
                    <p>Manage all your Tasks in efficient way</p>
                    <button>Explore</button>
                </section>
                <section className="img">
                    <img src={logo} alt="Welcome" />
                </section>
            </div>
        </>
    )
}

export default HomePage;