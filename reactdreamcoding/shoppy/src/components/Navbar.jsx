import React  from 'react';
import { Link } from 'react-router';
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import User from './User';
import Button from './ui/Button';
import { useAuthcontext } from './context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
    const {user, login, logout} = useAuthcontext();
    return (
        <header className='flex justify-between border-b  border-gray-300 p-4'>
            <Link to="/" className='flex items-center text-4xl text-brand'>
                <FiShoppingBag />
                <h1 className='ml-2 font-bold'>Shoppy</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link className='hover:text-brand' to='/products'>Products</Link>
                {user&&<Link className='hover:text-brand' to='/carts'><CartStatus uid= {user.uid}/></Link>}
                {user&&user.isAdmin&&<Link className='hover:text-brand text-2xl' to='/products/new'><BsFillPencilFill/></Link>}
                {user&&<User user ={user}/>}
                {!user && <Button onClick={login} text={"Login"}/>}
                {user && <Button onClick={logout} text={"Logout"}/>}
            </nav>
        </header>
    );
}
