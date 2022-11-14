import React, {useState} from "react";
import './AppXY.css'

export default function AppXY(){
    const [position, setPosition]= useState({x:0, y:0});
    // let [muse, setMouse]= useState();
    return(
        <div className="container" onPointerMove={(e)=>{ 
            // setPosition({x:e.pageX, y:e.pageY });
            setPosition(prev => ({...prev, x:e.clientX}));
        }}>
            <div className="pointer" style={{transform :`translate(${position.x}px , ${position.y}px)`}}></div>
        </div>
    )
}