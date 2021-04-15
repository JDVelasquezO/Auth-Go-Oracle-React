import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props: {setName: (name: string) => void}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [redirect, setRedirect] = useState(false)

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email, pass
            })
        });
        const content = await res.json();
        setRedirect(true);
        props.setName(content.Name);
    }

    if (redirect) {
        return <Redirect to='/'/>
    }

    return (
    <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

export default Login;