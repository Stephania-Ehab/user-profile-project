import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/accounts/login/', {
                username,
                password,
            });
            setToken(response.data.token);
            alert('Login successful');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <label>Password :</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
