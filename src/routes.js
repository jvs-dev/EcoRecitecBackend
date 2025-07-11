const express = require('express');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');

const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post('/submissions', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO submissions (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    console.log('Dados salvos:', result.rows[0]);

    await transporter.sendMail({
      from: `"Eco Recitec App" <${process.env.EMAIL_FROM}>`,
      to: 'jvssilv4@gmail.com', 
      subject: 'Novo Contato do Formulário de Economia Circular',
      html: `
        <h3>Nova Submissão Recebida</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });
    console.log('E-mail de notificação enviado.');

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro no processamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Endpoint: Retornar todos os dados (GET)
router.get('/submissions', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM submissions ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;