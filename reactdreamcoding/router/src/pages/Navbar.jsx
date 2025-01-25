import React from 'react';
import { Link } from 'react-router';

export default function Navbar() {
    return (
        <div>
             <Link to='/'>home</Link>
             <Link to='/go'>go</Link>
             <Link to='/go/city'>city</Link>
        </div>
    );
}

