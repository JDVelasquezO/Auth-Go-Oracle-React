import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props: {name: string, setName: (name: string) => void}) => {
    let menu;

    const logoutHandle = async () => {
        await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        props.setName('');
    }

    if (props.name === undefined) {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
                </li>
            </ul>
        );
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" aria-current="page" onClick={logoutHandle}>Logout</Link>
                </li>
            </ul>
        );
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                {menu}
            </div>
            </div>
        </nav>
    )
}

export default Nav;