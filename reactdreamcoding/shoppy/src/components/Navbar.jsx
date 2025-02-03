import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { getAdmin, login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Navbar() {
    const [user, setUser] = useState();
    const [admin, setAdmin] = useState();
    useEffect(()=>{
        onUserStateChange(setUser);
    },[]);

    useEffect(()=>{
        getAdmin(user, setAdmin);
    },[user])
   
    return (
        <header className='flex justify-between border-b  border-gray-300 p-4'>
            <Link to="/" className='flex items-center text-4xl text-brand'>
                <FiShoppingBag />
                <h1 className='ml-2 font-bold'>Shoppy</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link className='hover:text-brand' to='/products'>Products</Link>
                {user&&<Link className='hover:text-brand' to='/carts'>Carts</Link>}
                {admin&& <Link className='hover:text-brand text-2xl' to='/products/new'><BsFillPencilFill/></Link>}
                {user&&<User user ={user}/>}
                {!user && <button onClick={login} className='hover:text-brand'>Login</button>}
                {user && <button onClick={logout} className='hover:text-brand'>Logout</button>}
            </nav>
        </header>
    );
}
