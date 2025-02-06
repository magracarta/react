import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Button from "../components/ui/Button";
import useCart from '../hooks/useCart';

export default function ProductDetail() {
    const {state:{product:{id, image, category ,title, price ,description ,options}}} = useLocation();
    const [selected, setSelected] = useState(options && options[0]);
    const handleSelect = (e)=>setSelected(e.target.value);
    const {queryUpdateOrAddCart} = useCart();
    const handleClick = ()=>{
        // 여기서 장바구니에 추가하면 됨!
        const product = {id, image, title , price , option:selected, quantity:1};
        queryUpdateOrAddCart.mutate(product);
    }
    return (
        <section>
            <p className='mx-12 mt-4 text-gray-700'>{category}</p>
            <section className='flex flex-col md:flex-row p-4'>
                <img className='w-full px-4 basis-7/12' src={image} alt={title}/>
                <div className='w-full flex basis-5/12 flex-col p-4'>
                    <h2 className='text-3xl font-bold py-2'>{title}</h2>
                    <p className='text-2xl font-bold py-2 border-b border-gray-400'>{price.toLocaleString("co-KR")}원</p>
                    <p className='py-4 text-lg'>{description}</p>
                    <div className='flex items-center'>
                        <label className='text-brand font-bold' htmlFor='select'>옵션: </label>
                        <select id="select" className='p-2 m-4 flex-1 border-2 border-dashed border-brand' onChange={handleSelect} value={selected}>
                            {options&&options.map((option, index)=> <option key={index}>{option}</option>)}
                        </select>
                    </div>
                    <Button text = "장바구니에 추가" onClick={handleClick} />
                </div>
            </section>
        </section>
    );
}

