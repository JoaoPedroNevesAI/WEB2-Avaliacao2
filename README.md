# 🎬 Catálogo de Filmes

Aplicação web para gerenciar um catálogo de filmes, permitindo cadastrar, visualizar, editar, excluir e buscar filmes de forma prática e visual.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React, React Router, Material UI
- **Backend:** API REST (ex: JSON Server)
- **Estilo:** MUI com tema customizado e imagem de fundo

---

## 📂 Estrutura do Projeto

```
/
├── backend/         → (Opcional, se usar JSON Server)
│   └── db.json      → Base de dados fake
├── frontend/        → Aplicação React
│   ├── public/
│   ├── src/
│   │   ├── pages/   → AddMovie, EditMovie, MoviesList, MovieDetails
│   │   └── App.js   → Rotas da aplicação
└── README.md
```

---

## 🧭 Como Rodar o Projeto

### ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- **[Node.js](https://nodejs.org/en/)**
- **[npm](https://www.npmjs.com/)**
- (Opcional) **[JSON Server](https://github.com/typicode/json-server)** para mock de API REST

---

## 🔧 Configuração do Backend (JSON Server)

1. Crie um arquivo chamado `db.json` com o seguinte conteúdo:

```json
{
  "movies": []
}
```

2. Instale o JSON Server globalmente (se ainda não tiver):

```bash
npm install -g json-server
```

3.1 Inicie o servidor:

```bash
json-server --watch db.json --port 3000
```
###OU

3.2 Inicie o servidor:

```bash
node server.js
```

> Isso iniciará sua API REST local em:  
> 👉 `http://localhost:3000/movies`

---

## 💻 Configuração do Frontend (React)

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação React:

```bash
npm start
```

4. Acesse a aplicação no navegador:

```
http://localhost:3001
```

> Obs: a porta pode variar. Verifique no terminal a porta exata que o React usou (geralmente é 3000 ou 3001).

---

🎉 **Bom uso e bons filmes!**
