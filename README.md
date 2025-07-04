# 🌱 Desafio Full-Stack Eco Recitec: Aplicação de Economia Circular

Este projeto foi desenvolvido como parte do processo seletivo da empresa **Eco Recitec**, com o objetivo de demonstrar habilidades em desenvolvimento full-stack ao criar uma aplicação completa e funcional, focada no tema **Economia Circular**.

---

## 🚀 Funcionalidades

### 🏠 Página Principal (Home)

- Introdução ao conceito de Economia Circular
- Elementos visuais explicativos (Reduzir, Reutilizar, Reciclar)
- Carrossel vertical com **Swiper.js**
- Formulário de contato com feedback visual

### 📝 Formulário de Contato

- Campos: **Nome**, **E-mail**, **Mensagem**
- Validação de campos obrigatórios e e-mail
- Envio para o backend com resposta de sucesso/erro

### 🔧 Backend (API)

- **POST /api/submissions**: recebe e armazena dados no banco PostgreSQL
- **GET /api/submissions**: retorna todos os dados cadastrados
- Envio de e-mail com **Nodemailer + Brevo**

### 📄 Página de Dados

- Exibição de todas as submissões em uma tabela
- Tabela responsiva com colunas: Nome, E-mail, Mensagem, Data

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React**
- **Vite.js**
- **React Router DOM**
- **Styled Components**
- **Swiper.js**
- **Fetch API**
- **Google Fonts** (Inter, Poppins)
- **Ionicons** / **Bootstrap Icons**

### Backend

- **Node.js + Express**
- **PostgreSQL**
- **pg** (driver)
- **Nodemailer**
- **dotenv**
- **cors**

---

## 📁 Estrutura do Projeto

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
│   │   ├── styles/GlobalStyles.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.*
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

- Node.js 14+
- npm
- PostgreSQL
- Conta SMTP (ex: Brevo)

### 🔙 Backend

```bash
cd backend
npm install
```

Crie o `.env` com:

```
DATABASE_URL=postgresql://user:pass@localhost:5432/db
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=seu@email.com
SMTP_PASS=sua_chave_smtp
EMAIL_FROM=remetente@email.com
```

Crie a tabela:

```sql
CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Inicie o servidor:

```bash
npm start  # ou npm run dev
```

### 🖥️ Frontend

```bash
cd frontend
npm install
```

Crie o `.env.development`:

```
VITE_API_URL=http://localhost:3001
```

Inicie:

```bash
npm run dev
```

---

## ☁️ Deploy

### Frontend

- Use **Vercel** ou **Netlify**
- Configurar:
  - build command: `npm run build`
  - publish directory: `dist`
  - `VITE_API_URL` apontando para o backend

### Backend

- Use **Render**
- Configure:
  - build command: `npm install`
  - start command: `node src/server.js`
  - Variáveis de ambiente (seguras, não no código)
  - PostgreSQL externo (ex: ElephantSQL ou DBeaver)

---

## 📌 Versionamento

O projeto está versionado no GitHub:
FrontEnd: **🔗 https://github.com/jvs-dev/EcoRecitecFront**
BackEnd: **🔗 https://github.com/jvs-dev/EcoRecitecBackend**

---

## ✅ Critérios de Avaliação

### Funcionalidade

- Fluxo completo: formulário → e-mail → banco de dados → exibição

### Código

- Modularização, clean code, tratamento de erros
- Uso de variáveis de ambiente seguras
- Styled-components para organização visual

### UX/UI

- Layout responsivo
- Feedback visual com MessageBox
- Ícones e carrossel para experiência aprimorada

### Documentação

- README detalhado
- Instruções completas para rodar e publicar

---

## 📧 Contato

**Nome:** João Vitor Santana da Silva\
**E-mail:** [jvssilv4@gmail.com](mailto:jvssilv4@gmail.com)\
**LinkedIn:** https://linkedin.com/in/joão-vitor-dev
