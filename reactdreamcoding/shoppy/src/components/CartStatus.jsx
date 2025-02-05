import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCart } from '../api/firebase';


export default function CartStatus({uid}) {
    const {data:products} = useQuery({
        queryKey:["carts"],
        queryFn:()=>getCart(uid)
    });
    return (
        <div className='relative'>
            <AiOutlineShoppingCart className='text-4xl' />
            {products &&  <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-3 '>{products.length}</p>}
        </div>
    );
}

