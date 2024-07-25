import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!credentials.username || !credentials.password) {
            setError("Both fields are required!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/login', credentials);
            if (response.data.success) {
                sessionStorage.setItem('user_id', response.data.user_id);
                navigate('/home')
            } else {
                setError(response.data.message || "Invalid credentials");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Welcome</h2>
            <div className="login-fields">
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                {error && <p className="error-text">{error}</p>}
                <button className="login-btn" onClick={handleSubmit}>LOGIN</button>
                <div className="login-links">
                    <Link to="/register">Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
