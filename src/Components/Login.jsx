import React, { useEffect, useState } from 'react';
import { useFetcher, useNavigate } from "react-router-dom";
import Home from '../Pages/Home'
import toast, { Toaster } from 'react-hot-toast';


function Login(props) {
    const [formData, setFormData] = useState();
    const [User, setUser] = useState(null);
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();


    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitForm = async (e) => {
        e.preventDefault();
        login(formData);
    }

    const login = async (formData) => {
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`https://qb.flitsync.com/api/login.php?email=${formData.email}&password=${formData.password}`, option);
        const user = await response.json();
        setUser(user)
        console.log(user.token)
        if (response.ok) {
            toast.success("logged in successfully")
            navigate('/home');
         sessionStorage.setItem("user", user.token);  
              
        } 
        
        else {
            setMessage("Something went wrong, please try again.")
        }
    }

   


  

    return (
        <div className='jl2'>
            <div className='jl1'>
                <p className='lg2 text-center'>Demeter Fragrances </p>
                <div className="card" >
                    <div className="card-body">
                        <form className='lg5 '>
                            <h3 className='lg3 text-center pt-2'>Login to Your Account</h3>
                            <p className='lg4 text-secondary text-center'>Enter your username & password to login</p>
                            <div className="form-group  ">
                                <label for="exampleInputEmail1" className='l7'  >Email</label>
                                <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name='email' />
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleInputPassword1" className='l7'  >Password</label>
                                <input type="password" className="form-control mt-2" id="exampleInputPassword1" onChange={handleChange} name='password' />
                            </div>
                            <div className='lg8 mt-2'>
                                <input type="checkbox" className='' />
                                <label className='lg7'>Remember Me</label>
                            </div>
                            <div className='form-group mt-2'>
                                <button type="submit" className="btn-btn form-control text-white lg6  p-2" onClick={submitForm}>Login</button>

                            </div>

                            {/* <div className="message">{Message ? <p>{Message}</p> : null}</div> */}
                            <p className="card-text mt-2 text-center">
                                <a href="#" className='  l6'>Forgot password?</a>
                            </p>
                        </form>



                    </div>
                </div>
            </div>


        </div>

    );
}

export default Login;