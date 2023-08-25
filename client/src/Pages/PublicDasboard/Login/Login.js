import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
const {name,user}= useContext(AuthContext);
console.log(name)

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-full p-7 md:w-2/4 lg:w-1/3'>
                <h2 className='text-xl text-center'>Login</h2>
                <form >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type your email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type your password" className="input input-bordered w-full" />
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