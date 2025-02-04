import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

export default function ProductList() {
    const {isLoading, error, data:products} = useQuery({
        queryKey:["products"],
        queryFn:getProducts,
        staleTime : 1000*60*5
    })
    if(isLoading) return <p className='text-2xl mx-auto my-7'>상품을 불러오는 중입니다.</p>
    if(error) return <p className='text-2xl mx-auto my-7'>무언가 잘못되었습니다. 관리자에게 문의 하세요.</p>
    return (
        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {products&&products.map(p=>
               <ProductCard key={p.id} product={p}/>
            )}
        </ul>
    );
}


/*

category
: 
"여성"
description
: 
"스타일 원피스"
id
: 
"4e962735-1f31-4eaf-ae09-a9104a8ca1d0"
image
: 
"http://res.cloudinary.com/drbzggsks/image/upload/v1738656717/6_pvkjnh.webp"
options
: 
(3) ['S', 'M', 'L']
price
: 
50000
title
: 
"스타일 원피스"

*/