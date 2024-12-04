# Gestor Financeiro 🏦

Este é um projeto de **Gestão Financeira** desenvolvido para ajudar os usuários a organizar e acompanhar suas finanças pessoais. A aplicação permite cadastrar transações, categorizar despesas e receitas, e visualizar relatórios financeiros de forma simples e eficiente.

## 🚀 Funcionalidades

- **Cadastro de transações:** Registre entradas e saídas de dinheiro.
- **Categorias personalizadas:** Organize suas finanças com categorias personalizáveis.
- **Relatórios gráficos:** Visualize o fluxo financeiro com gráficos intuitivos.
- **Filtro por período:** Consulte transações em intervalos de tempo específicos.
- **Interface amigável:** Experiência de usuário focada em simplicidade e praticidade.

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/) com componentes reutilizáveis.
  - [Bootstrap](https://getbootstrap.com/) para estilização.
  
- **Backend:**
  - [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/).
  - Banco de dados **MongoDB** para armazenamento de informações.

- **Outros:**
  - Integração com API REST.
  - Testes automatizados com [Jest](https://jestjs.io/).

## 📂 Estrutura do Projeto

```
Gestor-Financeiro/
├── frontend/        # Código do Frontend
├── backend/         # Código do Backend
├── docs/            # Documentação e guias
├── tests/           # Testes automatizados
└── README.md        # Documentação principal
```

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

## 🏗️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/NathanVRZ/Gestor-Financeiro.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Gestor-Financeiro
   ```

3. Instale as dependências do backend e frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na pasta `backend` com as credenciais para o MongoDB e outras configurações necessárias.

5. Execute o projeto:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

6. Acesse no navegador: 
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## 📖 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Contribuições são bem-vindas! 😊 



[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/NathanVRZ/Gestor-Financeiro)
