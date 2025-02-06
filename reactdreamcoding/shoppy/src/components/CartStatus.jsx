import React  from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from '../hooks/useCart';


export default function CartStatus() {
    const { querygetCart:{ isLoading, error, data:products} , queryCartCount } = useCart();

    return (
        <div className='relative'>
            <AiOutlineShoppingCart className='text-4xl' />
            {products &&  <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-3 '>{queryCartCount(products)}</p>}
        </div>
    );
}

