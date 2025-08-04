# 🐶 API-Cachorro

Este projeto é uma API simples criada para gerenciar raças de cachorros, com funcionalidades básicas de **CRUD**: criar, ler, atualizar e deletar.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Jest (para testes unitários)

---

## 📦 Funcionalidades

- **GET** `/racas`: retorna todas as raças cadastradas.
- **POST** `/racas`: adiciona uma nova raça.
- **PUT** `/racas/:id`: atualiza uma raça existente.
- **DELETE** `/racas/:id`: remove uma raça da lista.

---

## 🧪 Testes

Os testes foram escritos com **Jest** para garantir o funcionamento correto da aplicação.

Para rodar os testes:
```bash
npm test
```

## 💻 Como rodar o projeto localmente

1. Clone o repositório:
```bash
git clone https://github.com/brenda-olifranco/API-Cachorro.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação:
```bash
npx nodemon src/index.js
```

