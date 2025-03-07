import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = ()=>{
    setChecked(prev=>!prev);
  }
  
  useEffect(()=>{
    fetch(`data/${checked?'products.json':'sale_products.json'}`)
    .then(res => res.json())
    .then(data => {
      console.log("뜨근한 데이터를 네트워크에서 받아옴");
      setProducts(data);
    })
    return ()=>{
        console.log("clean");
    }
  },[checked]);


  return (
    <>
    <input id='checkbox' type="checkbox" value={checked} onChange={handleChange}/>
    <label htmlFor='checkbox'>Show Only Sales</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
