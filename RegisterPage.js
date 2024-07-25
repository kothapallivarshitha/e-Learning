import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const RegisterPage = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        let validationErrors = {};

        if (!formData.username || formData.username === formData.name) {
            validationErrors.username = 'Username is required and should not match the name';
        }
        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }
        if (formData.password !== formData.confirmPassword) {
            validationErrors.password = 'Password and Confirm Password should match';
        }

        setErrors(validationErrors);

        if (!Object.keys(validationErrors).length) {
            // Send data to server
            axios.post('http://localhost:3001/register', formData)
                 .then(response => {
                     console.log(response.data);
                     // Reset form data after successful submission
                     setFormData({
                         username: '',
                         name: '',
                         password: '',
                         confirmPassword: '',
                     });
                     navigate('/login')
                 })
                 .catch(error => {
                     console.error('Error registering user:', error);
                 });
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    value={formData.username}
                    onChange={handleChange} 
                />
                {errors.username && <p className="error-text">{errors.username}</p>}

                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange} 
                />
                {errors.name && <p className="error-text">{errors.name}</p>}

                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange} 
                />

                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange} 
                />
                {errors.password && <p className="error-text">{errors.password}</p>}

                <button type="submit" className="register-btn">REGISTER</button>
            </form>
            <div className="register-links">
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>
    );
}

export default RegisterPage;