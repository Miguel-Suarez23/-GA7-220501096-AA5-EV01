import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Iniciar Sesión</button>
            <p>{message}</p>
        </form>
    );
};

export default LoginForm;
