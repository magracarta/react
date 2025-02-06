import React from 'react';
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';
import { useAuthcontext } from '../components/context/AuthContext';

export default function useCart() {
    let {uid} = useAuthcontext();
    let queryClient = useQueryClient();

    let querygetCart = useQuery({
        queryKey:["carts", uid],
        queryFn:()=>{
            return getCart(uid)
        },
        staleTime: 1000*60*5
    });


    const queryUpdateOrAddCart = useMutation({
        mutationFn: async(product)=> await addOrUpdateToCart( uid , product ),
        onSuccess: async()=> await queryClient.invalidateQueries(['carts',uid])
    }); 

    const queryRemoveCart = useMutation({
        mutationFn: async(id)=> await removeFromCart(uid, id)
        ,onSuccess: async()=>await queryClient.invalidateQueries(['carts',uid])
    });

    const queryCartCount = (products)=>{
       return products.reduce((prev,curr)=> prev + curr.quantity, 0)
    };
    

    return {querygetCart , queryUpdateOrAddCart , queryRemoveCart , queryCartCount };
}

