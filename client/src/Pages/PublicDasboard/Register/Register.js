import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';


const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleSignUp = (data) => {
       // console.log(data)

        createUser(data.email, data.password)
            .then(result => {
             console.log(result.user)

               /*  const userUpdateInfo = {
                    displayName: data.name
                }
                updateUser(userUpdateInfo) */
                   /*  .then(result => {
                        toast.success('Register Successfully.')
                        saveUser(data.name, data.email) 
                    }).catch(e => {
                        console.error(e)

                    }
                    )*/

            })
            .catch(err => {
                console.error(err)
                /* toast.error('Google Register Unsuccess') */
            })
    }

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-full p-7 md:w-2/4 lg:w-1/3'>
                <h2 className='text-xl text-center'>Register</h2>
                <form onSubmit={handleSubmit((handleSignUp))}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is Required" })} placeholder="Type your Full Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
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
                <p>Don't have a Account ? Please <Link className='text-secondary' to="/login">LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;