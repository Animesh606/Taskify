import { Link } from 'react-router-dom'
import logo from '../Components/Assets/6914347.jpg';
import { FaUserCircle, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({
        email : "",
        password : ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const inputData = (event) => {
        const { name, value } = event.target;
        setData((oldData) => {
            return {...oldData, [name] : value};
        })
    }
    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const result = await fetch('/login', {
                method : 'post',
                headers : {'Content-Type' : 'application/json'},
                body : {...data, remember : checked}
            });
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <>
            <div className='main-container'>
                <section className="img">
                    <img src={logo} alt="Welcome" />
                </section>
                <section className="login">
                    <h2>Log In</h2>
                    <form method="post">
                        <div className='form-group'>
                            <label htmlFor="email">
                                <FaUserCircle className='react-icon'/>
                            </label>
                            <input type="email" className='form-data' id='email' name="email" placeholder="Username" value={data.email} onChange={inputData}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">
                                <FaKey className='react-icon'/>
                            </label>
                            <input type={(showPassword) ? "text" : "password"} className='form-data' id='password' name="password" placeholder="Password" value={data.password} onChange={inputData}/>
                            {(showPassword) ? <FaEye className='react-icon' onClick={()=>setShowPassword(false)}/> : <FaEyeSlash className='react-icon' onClick={()=>setShowPassword(true)}/>}
                        </div>
                        <div className='form-remainder'>
                            <div className='form-group'>
                                <input type="checkbox" name="remember" id="remember" checked={checked} onChange={()=>setChecked(!checked)}/>
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link to='/forgotpassword'>Forgot Password?</Link>
                        </div>
                        <input className="submit-button" type="submit" value="SIGN IN" onClick={submitForm} />
                    </form>
                    <div className="form-remainder">
                        <span>Don't have an account?</span><Link to='/signup'>Sign Up</Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login;