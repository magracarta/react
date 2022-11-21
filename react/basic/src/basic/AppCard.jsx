import React from "react";


export default function AppCard(){
    return (
        <div>
            <Card>
                <p>Card1</p>
            </Card>
            <Card 
                image='https://images.unsplash.com/photo-1668202034854-099897c3b693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            >
                <h1>Card2</h1>
                <p>설명</p>
            </Card>
        </div>
    )
}

function Card({children , image}){
    return (
        <header style={{
            backgroundColor:'black',
            borderRadius:'20px',
            color:'white',
            minHeight:'200px',
            maxWidth:'200px',
            margin:'1rem',
            padding:'1rem',
            textAlign:'center',
        }}>
            {image && <img src={image} style={{width:'100px'}} />}
            {children}
        </header>
    )
}

