import React, {useEffect,useState} from "react";

export default function Products(){
    const [poducts, setProducts] = useState([]);
    const [checked, setchChecked] = useState(false);
    const handleChange = ()=> setchChecked((prev)=> !prev); 
    useEffect(()=>{
        fetch(`data/${checked?'sale_':''}products.json`)
        .then((res) =>  res.json())
        .then((data)=>{
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setProducts(data);
        });
        return ()=>{
            console.log('🧹깨끗하게 청소하는 일들을 합니다.');
        }
    }, [checked]);
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