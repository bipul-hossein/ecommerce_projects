import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                toast.success('Login successfully')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message)
                toast.error(/* 'Google Register Unsuccess', */loginError)
                setLoginError(err.message)
            })
    }


    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-full p-7 md:w-2/4 lg:w-1/3'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit((handleSignIn))}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email is Required" })} placeholder="Type your email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" {...register("password", { required: "Password is Required" })} placeholder="Type your password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <button className="btn btn-outline w-full mt-3">Submit</button>
                </form>
                <p>Don't have a Account ? Please <Link className='text-secondary' to="/register">Register</Link></p>
                <div className="divider">OR</div>
                <button /* onClick={handleGoogleLogin} */ className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;