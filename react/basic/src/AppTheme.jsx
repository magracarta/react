import React, { useContext } from "react";
import './AppTheme.css';
import DarkModeProvider, { DarkModeContext } from "./context/DarkModeContext";


export default function AppTheme(){
    return(
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
        
    )
}

function Header(){
    return <header className="header">Header</header>;
}

function Main(){
    return (
        <main>
            Main
            <Profile />
            <Products />
        </main>
    )
}   
function Profile(){
    return (
        <div>
            Profile
            <User />
        </div>
    )
}

function User(){
    return <div>User</div>;
}

function Products(){
    return(
        <div>
            Products
            <ProductsDetail />
        </div>
    )
}
function ProductsDetail(){
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return <div>
            Products Detail
            <p>
                DarkMode: {
                    darkMode?(
                        <span style={{background:'#000', color:'#fff'}}>
                            DarkMode
                        </span>
                    ):(
                        <span>Light Mode</span>
                    )
                }
            </p>
            <button onClick={()=>toggleDarkMode()}>Toggle</button>
        </div>
}

function Footer(){
    return <footer className="footer">Footer</footer>
}