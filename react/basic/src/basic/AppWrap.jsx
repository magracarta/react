import React from "react";


export default function AppWrap(){
    return (
        <div>
            <Navbar>
            <Avartar 
                image='https://images.unsplash.com/photo-1668202034854-099897c3b693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                name='Bob'
                size={200}
            />
            <p>안녕하세요!</p>
            </Navbar>
            <Navbar>
            <p>안녕하세요!</p>
            </Navbar>
        </div>
    )
}

function Navbar({children}){
    return (
        <header style={{backgroundColor:'yellow'}}>
            {children}
        </header>
    )
}

function Avartar({image, name, size}){
    return(
        <div>
            <img
                src={image}
                alt={`${name}'`}
                width = {size}
                height = {size}
                style={{borderRadius:'50%'}}
            />
        </div>
    )
}