import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const res = await fetch('http://localhost:3000/api/user', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                });

                const content = await res.json();
                setName(content.Name);
            }
        )();
    });

    return (
        <div className="App">
            <BrowserRouter>
            <Nav name={name} setName={setName} />
            <br/><br/><br/>
            <main className="form-signin">
                <Route exact path='/' component={() => <Home name={name} />} />
                <Route exact path='/login' component={() => <Login setName={setName} />} />
                <Route exact path='/register' component={Register} />
            </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
