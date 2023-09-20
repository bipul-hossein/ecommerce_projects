import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/public/navbar/Navbar';

const AdminLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1400px] px-[2px] md:px-2 mx-auto mt-[60px] md:mt-0">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;