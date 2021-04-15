import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirect, setRedirect] = useState(false)

    const handlerSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, pass
            })

        });
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/login'/>
    }

    return (
        <form onSubmit={handlerSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
            <input autoFocus type="text" className="form-control" placeholder="JD..." 
                onChange={e => setName(e.target.value)}
            />
            <label>Name</label>
            </div>

            <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com" 
                onChange={e => setEmail(e.target.value)}
            />
            <label>Email address</label>
            </div>

            <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" 
                onChange={e => setPass(e.target.value)}
            />
            <label>Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    )
}

export default Register;