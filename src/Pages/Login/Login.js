import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import img from '../../Assets/Images/output.png'
import './Login.css'
import { AuthContext } from './../../context/AuthProvider';
import { toast } from 'react-hot-toast';
const Login = () => {
    const [active, setActive] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, signInPopUp, updateUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        // console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
                toast.success('Logged In Successfully.')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const googleSignIn = () => {
        setLoginError('');
        signInPopUp()
            // console.log(signInPopUp)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: user.displayName,
                    email: user.email,
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(user.displayName, user.email)
                        toast.success('Logged In Successfully.')
                        navigate(from, { replace: true });
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        // console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save user',data)
                setLoginUserEmail(email)
            })
    }
    const signInPage = () => {
        setActive(!active);
    }
    return (
        <div className='flex justify-center items-center' style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", height: "800px", backgroundSize: "cover", opacity: "0.8" }}>
            <div className='lg:p-12 p-5 bg-white rounded-2xl' >
                <div className='flex justify-evenly mb-5'>
                    <Link to='/signup'><h2 className='text-3xl text-center font-bold hover:text-gray-400'>Register</h2></Link>
                    <Link to='/login'><h2 className='text-3xl text-center font-bold hover:text-gray-400' onClick={signInPage}
                        style={{ color: active ? "black" : "rgba(27, 16, 146, 0.916)" }}>Sign In</h2></Link>
                </div>
                <hr className='solid border mb-5' />
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs  mx-auto">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs  mx-auto">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className='mb-5 flex mx-auto lg:ml-10 mt-2'>
                        <input className='btn btn-outline mt-4' value="Login" type="submit" />
                        {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                        <input className='mt-4 ml-6' type="checkbox" />
                        <p className='mt-7 ml-3'>Remember Me</p>
                    </div>
                    <hr className='solid border mb-5' style={{ border: "1px solid rgb(66, 63, 63)" }} />
                    <p className='text-center mb-5'>or sign in with</p>
                    <div className='flex lg:flex-row lg:justify-normal flex-col justify-center'>
                        <button onClick={googleSignIn} className='btn btn-outline mr-4 lg:mb-0 mb-5 w-full lg:w-auto'><FcGoogle className='mr-2'></FcGoogle>Login With Google</button>
                        <button className='btn btn-outline '><FaFacebookSquare className='mr-2 text-blue-900 text-lg'></FaFacebookSquare>Login With Facebook</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;