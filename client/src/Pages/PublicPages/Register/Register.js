import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import axios from 'axios';


const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSignUp = (data) => {
        const userData = {
            name: data?.name,
            email: data?.email,
        };
         createUser(data.email, data.password)
            .then(result => {
                if(result?.user?.email){
                    axios.post(`http://localhost:5000/api/user`, userData)
                    .then((response)=> {
                        toast.success('Register Successfully')
                      })
                      .catch((error)=> {
                        console.log(error);
                        toast.error('Something went wrong')
                      })

                }

                const userUpdateInfo = {
                    displayName: data.name
                }
                updateUser(userUpdateInfo)
                    .then(result => {
                        toast.success('Register Successfully.')
                        //saveUser(data.name, data.email)
                    }).catch(e => {
                        console.error(e)
                    })
            })
            .catch(err => {
                console.error(err)
                toast.error(/* 'Google Register Unsuccess', */ err.message)
            })
    }

    /* const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log(data, "user add database")
                //  setCreatedUserEmail(email);
            }).catch(e => console.error(e))
    }
 */

    return (
        <div className='h-full mb-10 flex justify-center items-center'>
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
                <p className='md:mt-2'>Don't have a Account ? Please <Link className='text-primary' to="/login">LogIn</Link></p>
            </div>
        </div>
    );
};

export default Register;