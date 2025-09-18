import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [protectedData, setProtectedData] = useState('');

  const register = async () => {
    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  const login = async () => {
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    setToken(data.access_token);
  };

  const getProtected = async () => {
    const res = await fetch('http://localhost:4000/protected', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setProtectedData(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Supabase Auth Demo</h1>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={getProtected}>Get Protected Data</button>

      <pre>{protectedData}</pre>
    </div>
  );
}

export default App;
