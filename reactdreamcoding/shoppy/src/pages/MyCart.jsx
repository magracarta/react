import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from "react-icons/fa";
import CartItem from '../components/CartItem';
import { useAuthcontext } from '../components/context/AuthContext';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;
export default function MyCart() {
    const {uid} = useAuthcontext();
    const {querygetCart:{isLoading , data:products}} = useCart();
    
    if(isLoading) return <p>Loading...</p>

    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce((prev, current)=> prev+parseInt(current.price)*current.quantity ,0);

    return (
        <section className='p-8 flex flex-col'>
            <p className='text-2xl text-center font-bold pb-4  border-b border-gray-300'>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
            {hasProducts && <>
                <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
                    {products.map(product=><CartItem key={product.id} product={product} uid={uid} />)}
                </ul>
                <div className='flex justify-between items-center px-2 mb-6 md:p-8 lg:px-16'>
                    <PriceCard text="상품 총개" price={totalPrice} />
                    <BsFillPlusCircleFill className='shrink-0'/>
                    <PriceCard text="배송액" price={SHIPPING}/>
                    <FaEquals  className='shrink-0'/>
                    <PriceCard text="총가격" price={totalPrice+SHIPPING}/>
                </div>
                <Button text="주문하기"/>
            </>}
        </section>
    );
}

