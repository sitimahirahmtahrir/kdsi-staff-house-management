import React, { useState } from 'react';
import api from '../api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users', { username, password });
            console.log('User created:', response.data);
            setError(''); // Clear error message
        } catch (error) {
            setError('Error creating user: ' + error.response.data.error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label>Password:</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;