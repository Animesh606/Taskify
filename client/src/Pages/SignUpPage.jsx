import { Link } from 'react-router-dom'
import logo from '../Components/Assets/6914347.jpg';
import { FaUserCircle, FaKey, FaMobileAlt, FaExclamation } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { PiPasswordFill } from "react-icons/pi";
import { MdVisibility, MdVisibilityOff, MdDoneAll } from "react-icons/md";
import { useState } from 'react';

const SignUp = () => {
    const [data, setData] = useState({
        fName : "",
        lName : "",
        email : "",
        password : "",
        cpassword : ""
    })
    const [showPassword, setShowPassword] = useState(false);

    const inputData = (event) => {
        const { name, value } = event.target;
        setData((oldData) => {
            return {...oldData, [name] : value};
        })
    }
    const validateForm = () => {
        return false;
    }
    const submitForm = async (event) => {
        event.preventDefault();
        if(!validateForm()){
            console.log(data);
            return;
        }
        try {
            const datatext = await data.json();
            const result = await fetch('/login', {
                method : 'post',
                headers : {'Content-Type' : 'application/json'},
                body : datatext
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
                    <h2>Registration</h2>
                    <form method="post">
                        <div className='form-group'>
                            <label htmlFor="fName">
                                <FaUserCircle className='react-icon'/>
                            </label>
                            <input type="text" className='form-data' id='fName' name="fName" placeholder="First Name" value={data.fName} onChange={inputData} required/>
                        </div>
                        <div className='errorMessage'></div>
                        <div className='form-group'>
                            <label htmlFor="lName">
                                <FaUserCircle className='react-icon'/>
                            </label>
                            <input type="text" className='form-data' id='lName' name="lName" placeholder="Last Name" value={data.lName} onChange={inputData} required/>
                        </div>
                        <div className='errorMessage'></div>
                        <div className='form-group'>
                            <label htmlFor="email">
                                <GrMail className='react-icon'/>
                            </label>
                            <input type="email" className='form-data' id='email' name="email" placeholder="Email Id" value={data.email} onChange={inputData} required/>
                        </div>
                        <div className='errorMessage'></div>
                        <div className='form-group'>
                            <label htmlFor="contact">
                                <FaMobileAlt className='react-icon'/>
                            </label>
                            <input type="phone" className='form-data' id='contact' name="contact" placeholder="Mobile No." value={data.contact} onChange={inputData} required/>
                        </div>
                        <div className='errorMessage'></div>
                        <div className='form-group'>
                            <label htmlFor="password">
                                <FaKey className='react-icon'/>
                            </label>
                            <input type={(showPassword) ? "text" : "password"} className='form-data' id='password' name="password" placeholder="Password" value={data.password} onChange={inputData} required/>
                            {(showPassword) ? <MdVisibility className='react-icon' onClick={() => setShowPassword(false)}/> : <MdVisibilityOff className='react-icon' onClick={()=>setShowPassword(true)}/>}
                        </div>
                        <div className='errorMessage'></div>
                        <div className='form-group'>
                            <label htmlFor="cpassword">
                                <PiPasswordFill className='react-icon'/>
                            </label>
                            <input type={(showPassword) ? "text" : "password"} className='form-data' id='cpassword' name="cpassword" placeholder="Confirm Password" value={data.cpassword} onChange={inputData} required/>
                               {(data.cpassword !== "") ? ((data.password === data.cpassword) ? <MdDoneAll className='react-icon' fill='green' style={{height : "2rem", width : "2rem"}} /> : <FaExclamation className='react-icon' fill='red'/>) : ""}
                        </div>
                        <input className="submit-button" type="submit" value="SIGN UP" onClick={submitForm} />
                    </form>
                    <div className="form-remainder">
                        <span>Already have an account?</span><Link to='/login'>Login</Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SignUp;