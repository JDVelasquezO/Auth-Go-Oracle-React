import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
        <br/><br/><br/><br/><br/>
        <main className="form-signin">
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
