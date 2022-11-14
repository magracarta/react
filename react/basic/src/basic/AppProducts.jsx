import React ,{useState} from "react";
import Products from "./components/Products";
import './App.css';

export default function AppProducts(){
    const [showProducts, setShowProducts] = useState(true);
    return(
        <div>
            {showProducts && <Products />}
            <button onClick={()=> setShowProducts((show)=>!show)}>Toggle</button>
        </div>
    )
}