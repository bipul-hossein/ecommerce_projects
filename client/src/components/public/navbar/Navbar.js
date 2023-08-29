import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    console.log(user)

    const handleSignOut = () => {
        LogOut()
    }

    const menuItems = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">dashboard</Link></li>

        {/*    {!isAdmin && !isSeller && user &&
            <li><Link to="/myorders">My Orders</Link></li>
        }

        {isAdmin &&
            <li><Link to="/admin_dashboard/">Admin Dashboard</Link></li>
        }
        {isSeller &&
            <li><Link to="/Seller_dashboard/">Seller Dashboard</Link></li>
        }
        */}
        {user?.uid ?
            <>
                <li><Link to="/myorders">My Orders</Link></li>
                <li><p>{user?.displayName}</p></li>
                <li> <Link onClick={handleSignOut} >logOut</Link></li>
            </>
            : <li>< Link to="login">Login</Link></li>
        }


    </>

    const websiteName = 'Ecommerce'
    return (
        <div className='bg-stone-200'>
            <div className='navbar flex justify-between mx-auto w-11/12'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="" className="pr-3 text-4xl">{websiteName}</Link>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-xl">
                            {menuItems}
                        </ul>
                    </div>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;