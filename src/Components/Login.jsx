import React from 'react';

function Login(props) {
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
                                <label for="exampleInputEmail1" className='l7 ' >Username</label>
                                <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleInputPassword1" className='l7 '>Password</label>
                                <input type="password" className="form-control mt-2" id="exampleInputPassword1" />
                            </div>
                            <div className='lg8 mt-2'>
                                <input type="checkbox" className='' />
                                <label className='lg7'>Remember Me</label>
                            </div>
                            <div className='form-group mt-2'>
                                <button type="submit" className="btn-btn form-control text-white lg6  p-2 ">Login</button>
                            </div>
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