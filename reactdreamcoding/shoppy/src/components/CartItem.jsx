import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';


const ICONCLASS = "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";
export default function CartItem({product,product:{id, image, category ,title, price ,quantity ,option},uid}) {
    const handleMinus = ()=>{
        if(quantity < 2 )return;
        addOrUpdateToCart(uid, {...product, quantity: quantity-1} );
    }
    const handlePlus = ()=> addOrUpdateToCart(uid, {...product, quantity: quantity+1} );
    const handleDelete=()=> removeFromCart(uid, id);
    return (
        <li className='flex justify-between my-2 items-center'>
            <img className='w-24 md:w-40 rounded-lg' src={image} alt={title}/>
            <div className='flex-1 justify-between ml-4'>
                <div className='basis-3/5'>
                    <p className='text-lg'>{title}</p>
                    <p className='text-xl font-bold text-brand'>{option}</p>
                    <p className=''>{price.toLocaleString("co-KR")} 원</p>
                </div>
                <div className='text-2xl flex items-center'>
                    <AiOutlinePlusSquare className={ICONCLASS} onClick={handlePlus}/>
                    <span>{quantity}</span>
                    <AiOutlineMinusSquare className={ICONCLASS} onClick={handleMinus}/>
                    <RiDeleteBin5Fill className={ICONCLASS} onClick={handleDelete}/>
                </div>
            </div>
        </li>
    );
}

