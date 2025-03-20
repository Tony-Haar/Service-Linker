import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Fetch users from localStorage (simulating the users.json file)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and password matches
    const user = users.find(user => user.username === username);
    if (!user) {
      setError('User not found!');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password!');
      return;
    }

    setError('');
    alert('Login successful!');
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
