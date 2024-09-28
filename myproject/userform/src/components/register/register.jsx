import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/accounts/register/', {
                username,
                email,
                password,
            });
            alert('Registration successful', response.data);
        } catch (error) {
            console.error('Error during registration:',error);
            alert('Registration failed', + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username :</label>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <label>Email :</label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <label>Password :</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
