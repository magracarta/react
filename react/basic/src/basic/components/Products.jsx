import React, {useEffect,useState} from "react";
import useProducts from "../../hooks/use-products";

export default function Products(){
    const [checked, setchChecked] = useState(false);
    const [loading, error, poducts] = useProducts({salesOnly : checked});
    const handleChange = ()=> setchChecked((prev)=> !prev); 


    if(loading) return <p>Loading...</p>

    if(error) return <p>{error}</p>
    return(
        <>
        <input id='chenckbox' type="checkbox" value={checked} onChange={handleChange}></input>
        <label htmlFor="chenckbox">Show Only 🔥 sale</label>
            <ul>
                {poducts.map((product)=>{
                    return <li key = {product.id} data-set = {product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                })}
            </ul>
        </>
    )
}