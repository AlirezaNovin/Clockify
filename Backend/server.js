const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', 
  database: 'your_database_name'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ error: 'Username or email already exists' });
      return;
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password: ', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
        if (err) {
          console.error('Error inserting user into database: ', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }

        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error querying database: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords: ', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      if (!result) {
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }

      const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
});

app.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  res.status(501).json({ message: 'Forgot password functionality not implemented' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
