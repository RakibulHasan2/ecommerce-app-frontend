import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Images/logo.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-200 flex justify-around p-6">
            <div className="">
                <a href='/' className="btn btn-ghost normal-case text-2xl text-bold">Exclusive Wear</a>
                <img className='mx-3' src={logo} alt="" style={{height: "40px"}}/>
            </div>
            <div className='text-lg gap-5'>
                <Link><p>Home</p></Link>
                <Link><p>Categories</p></Link>
                <Link><p>Products</p></Link>
                <Link><p>About Us</p></Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered border-b-4" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <FaUserAlt></FaUserAlt>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/' className="justify-between">
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href='/'>Settings</a></li>
                        <li><a href='/'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;