# Catálogo de Filmes

Aplicação web para gerenciamento de um catálogo de filmes, com funcionalidades de cadastro, edição, exclusão, pesquisa e visualização de detalhes.

---

## Tecnologias

- Frontend: React + Material UI + React Router
- Backend: API REST (exemplo: JSON Server ou Node.js/Express)
- Comunicação via HTTP (fetch / axios)

---

## Funcionalidades

- Listar filmes com paginação e busca por título
- Adicionar novo filme (título, descrição, ano, gênero, URL do pôster)
- Editar filme existente
- Excluir filme
- Visualizar detalhes do filme
- Mensagens de sucesso e validação

---

## Como rodar o projeto

### Backend

1. Configure e inicie sua API REST em `http://localhost:3000`
   - Pode usar [JSON Server](https://github.com/typicode/json-server) para testes rápidos, com um arquivo `db.json`.

Exemplo para JSON Server:

-bash
npm install -g json-server
json-server --watch db.json --port 3000

### Frontend
1. cd git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
npm start
