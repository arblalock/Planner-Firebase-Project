import React from 'react'
//import {Link} from 'react-router-dom'
import NavLink from 'react-router-dom/NavLink';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks