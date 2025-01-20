import React, { useEffect, useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  let [point,setPoint]=useState({left:0, top:0});
  let [current, setcurrent]= useState({left:0 , top:0});

  let mouseMove=(e)=>{
    console.log(e);
    setPoint(prev => ({...prev,left: e.pageX, top: e.pageY}))
  }
  useEffect(()=>{
    let requetsMouseAni;
    function mouseAni(){
      setcurrent(prev=>({...prev,
        left: prev.left + (point.left - prev.left) * 0.2,
        top: prev.top + (point.top - prev.top) * 0.2,
      }))
      requetsMouseAni = requestAnimationFrame(mouseAni);
    }
    mouseAni();
    return()=>{
      cancelAnimationFrame(requetsMouseAni);
    }
  },[point]);
  return (
    <div className='container' onPointerMove={mouseMove}>
      <div 
      style={{transform:`translate(${current.left}px , ${current.top}px)`}}
      className='pointer'></div>
    </div>
  );
}
