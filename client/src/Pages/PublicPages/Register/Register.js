import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import axios from "axios";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    const userData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
    };
    
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result)
        if (result?.user?.email) {
            axios
              .post(`${process.env.REACT_APP_ServerUrl}/api/user`, userData)
              .then((response) => {
                 toast.success('Register Successfully')
              })
              .catch((error) => {
                console.log(error);
                toast.error("Something went wrong");
              
              });
          }
            const userUpdateInfo = {
          displayName: data?.firstName + " " + data?.lastName,
        };
        updateUser(userUpdateInfo)
        .then((result) => {
           // toast.success("Register Successful");
            //saveUser(data.name, data.email)
            console.log(result)
        })
          .catch((e) => {
            console.error(e);
        });
    })
      .catch((err) => {
        console.error(err);
        toast.error( 'Register Unsuccess' );
      });
  };

  return (
    <div className="h-full mb-10 flex justify-center items-center">
      <div className="w-full p-7 md:w-2/4 lg:w-1/3">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First Name is Required" })}
              placeholder="Type your First Name"
              className="input input-bordered w-full"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last Name is Required" })}
              placeholder="Type your Last Name"
              className="input input-bordered w-full"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is Required" })}
              placeholder="Type your email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              {...register("password", { required: "Password is Required" })}
              placeholder="Type your password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button className="btn btn-outline w-full mt-3">Submit</button>
        </form>
        <p className="md:mt-2">
          Don't have a Account ? Please{" "}
          <Link className="text-primary" to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;


// const handleSignUp = (data) => {
//     // console.log(data.role)

//     createUser(data.email, data.password)
//         .then(result => {
//             // console.log(result.user)

//             const userUpdateInfo = {
//                 displayName: data.name
//             }
//             updateUser(userUpdateInfo)
//                 .then(result => {
//                     toast.success('Register Successfully.')
//                     saveUser(data.name, data.email, data.role)
//                 }).catch(e => {
//                     console.error(e)

//                 }
//                 )

//         })
//         .catch(err => {
//             console.error(err)
//             toast.error('Google Register Unsuccess')
//         })
// }

// const saveUser = (name, email, role) => {
//     const user = { name, email, role };
//     fetch('https://server-side-assignment12.vercel.app/users', {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     }).then(res => res.json())
//         .then(data => {
//             // console.log(data, "user add database")
//             setCreatedUserEmail(email);
//         }).catch(e => console.error(e))
// }
