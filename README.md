# Desafio Full-Stack Eco Recitec: Aplicação de Economia Circular

Este projeto é uma aplicação full-stack desenvolvida como parte do processo seletivo para a empresa **Eco Recitec**. O objetivo é demonstrar a capacidade de construir uma solução completa e funcional sobre o tema **Economia Circular**, desde o frontend interativo até o backend com persistência de dados e envio de e-mails.

---

## 🚀 Funcionalidades

### Página Principal (Home)

- Introdução ao conceito de Economia Circular
- Ilustrações dos princípios: **Reduzir, Reutilizar, Reciclar**
- **Carrossel vertical de imagens** com Swiper.js
- **Formulário de contato** com validação básica e feedback visual

### Backend (API RESTful)

- Endpoint `POST /api/submissions`: recebe, salva e envia e-mail com os dados do formulário
- Endpoint `GET /api/submissions`: retorna todas as submissões
- Envio de e-mails com **Nodemailer + Brevo**
- Armazenamento em banco **PostgreSQL**

### Página de Dados (Tabela)

- Tabela responsiva exibindo: Nome, E-mail, Mensagem e Data de Cadastro

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React** + **Vite.js**
- **React Router DOM**
- **Styled Components**
- **Swiper.js** (carrossel)
- **Fetch API**, **Google Fonts**, **Ionicons**, **Bootstrap Icons**

### Backend

- **Node.js** + **Express**
- **PostgreSQL** com o driver `pg`
- **Nodemailer**
- **dotenv**, **cors**

---

## 📂 Estrutura do Projeto

```
eco-recitec-desafio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── styles/
│   │   │   ├── MailForm.jsx
│   │   │   ├── MessageBox.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── styles/
│   │   │   ├── DataPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.development
│   ├── .env.production
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── routes.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── nodemon.json
├── .gitignore
├── README.md
└── docker-compose.yml (opcional)
```

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos

- Node.js
- npm
- PostgreSQL
- Conta na Brevo (Sendinblue) ou outro SMTP

### 1. Backend

```bash
cd backend
npm install
```

Crie `.env` com:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
SMTP_HOST="smtp-relay.brevo.com"
SMTP_PORT="587"
SMTP_USER="seu_email@dominio.com"
SMTP_PASS="sua_chave_api"
EMAIL_FROM="seu_email@dominio.com"
```

Crie o banco e a tabela `submissions`:

```sql
CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

Inicie o servidor:

```bash
npm run dev
```

Acesse: http://localhost:3001

---

### 2. Frontend

```bash
cd frontend
npm install
npm install swiper
```

Crie `.env.development`:

```
VITE_API_URL="http://localhost:3001"
```

Importe fontes e ícones em `public/index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Poppins:wght@400;500;700;800&display=swap"
/>
<script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
/>
```

Inicie:

```bash
npm run dev
```

Acesse: http://localhost:5173

---

## ☁️ Deploy

### 🔹 Frontend (Vercel ou Netlify)

- `build command`: `npm run build`
- `publish directory`: `dist`
- Variável `VITE_API_URL`: https://ecorecitecbackend.onrender.com

### 🔹 Backend (Render)

- Conecte o repositório (pasta `backend`)
- `build command`: `npm install`
- `start command`: `node src/server.js`
- Configure variáveis de ambiente

---

## 📚 API - Documentação

### POST `/api/submissions`

#### Corpo:

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "message": "Mensagem aqui"
}
```

#### Respostas:

- `201`: Sucesso
- `400`: Campos obrigatórios
- `500`: Erro interno

---

### GET `/api/submissions`

#### Resposta:

```json
[
  {
    "id": 1,
    "name": "Maria",
    "email": "maria@example.com",
    "message": "Interessada em parcerias.",
    "created_at": "2025-07-04T12:05:30.000Z"
  }
]
```

---

## ✅ Critérios Atendidos

- Funcionalidade completa do fluxo: formulário → banco → e-mail → exibição
- UI/UX responsiva e temática
- Código modular, limpo e com boas práticas
- Deploy funcional (pronto para Render + Vercel/Netlify)
- Validações e tratamento de erros
- Documentação clara neste `README.md`

---

## 🔄 Versionamento

Todo o projeto está versionado e disponível no GitHub:

🔗 **Repositórios**:\
Repositório FrontEnd: *https://github.com/jvs-dev/EcoRecitecFront*\
Repositório BackEnd: *https://github.com/jvs-dev/EcoRecitecBackend*

---

## 📧 Contato

**Seu Nome:** João Vitor Santana da Silva  
**E-mail:** jvssilv4@gmail.com  
**LinkedIn:** [https://linkedin.com/in/joão-vitor-dev](https://linkedin.com/in/joão-vitor-dev)

---
