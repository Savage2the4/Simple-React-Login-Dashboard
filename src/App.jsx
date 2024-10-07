import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          {/* Left side - Logo or Brand */}
          <Link className="navbar-brand" to="/">Ahsan Development</Link>
          
          {/* Right side - Login & Register */}
          <div className="navbar-right">
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        <footer>
          <p>© 2024 My Dashboard | <a href="#">Privacy Policy</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
