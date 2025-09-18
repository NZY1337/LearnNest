import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Supabase clients
const supabaseAdmin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const supabasePublic = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// ------------------------
// REGISTER
// ------------------------
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: 'User created', user: data });
});

// ------------------------
// LOGIN
// ------------------------
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabasePublic.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({
    message: 'Login successful',
    user: data.user,
    access_token: data.session.access_token,
  });
});

// ------------------------
// PROTECTED ROUTE
// ------------------------
app.get('/protected', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabasePublic.auth.getUser(token);

  if (error || !user) return res.status(401).json({ error: 'Unauthorized' });

  res.json({ message: 'This is protected data', user });
});

// ------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
