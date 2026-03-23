# 🚀 API de Login e Cadastro com Node.js e Express

Este projeto consiste no desenvolvimento de uma API simples para cadastro de usuários e autenticação de login, utilizando Node.js e Express e organizada com o padrão de arquitetura MVC (Model-View-Controller).

A aplicação foi criada com o objetivo de praticar conceitos de desenvolvimento backend, incluindo criação de rotas, validação de dados enviados pelo usuário e retorno de respostas em formato JSON, que é o padrão utilizado na maioria das APIs modernas.

Além disso, o projeto demonstra como validar informações recebidas em requisições HTTP, garantindo que os dados enviados pelo cliente estejam corretos antes de serem processados.

# **📚 Informações Acadêmicas**

Matéria: WEBII
Professor: Adauto Michelotti
Curso: Desenvolvimento de Sistemas
Instituição: ETEC - Escola Técnica Estadual Professor Massuyuki Kawano-Tupã

# **🛠️ Tecnologias Utilizadas**

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

Node.js
Ambiente de execução JavaScript que permite criar aplicações backend e servidores web.

Express
Framework para Node.js utilizado para criar rotas, gerenciar requisições HTTP e facilitar o desenvolvimento de APIs.

JavaScript
Linguagem principal utilizada no desenvolvimento da aplicação, responsável por toda a lógica do servidor.

JSON (JavaScript Object Notation)
Formato utilizado para enviar e receber dados entre cliente e servidor.

# **🧩 Arquitetura do Projeto**

O projeto foi estruturado utilizando o padrão MVC (Model-View-Controller), que separa as responsabilidades da aplicação para tornar o código mais organizado e fácil de manter.

# **Controllers**

Os controllers são responsáveis por conter a lógica das funcionalidades da API.

Neste projeto existem controllers responsáveis por:

Login de usuário
Cadastro de usuário

Eles recebem os dados enviados na requisição, realizam validações e retornam uma resposta adequada para o cliente.

# **Rotas (Routes)**

As rotas definem os endpoints da API, ou seja, os caminhos que podem ser acessados através de requisições HTTP.

Cada rota direciona a requisição para um controller específico que executa a lógica correspondente.

# **App**

O arquivo principal da aplicação é responsável por configurar o Express, registrar as rotas e preparar a aplicação para ser executada.

# **Server**

O servidor é responsável por inicializar a aplicação e disponibilizar a API em uma porta específica, permitindo que o cliente faça requisições.

# **📡 Funcionalidades da API**

A API possui duas funcionalidades principais:

# **Cadastro de Usuário**

A rota de cadastro recebe informações enviadas pelo cliente e realiza validações antes de criar o usuário.

# **Os dados esperados são:**

Nome
Email
Idade

**Antes de retornar sucesso, o sistema valida:**

se o nome possui mais de 3 caracteres
se o email possui formato válido (contendo "@")
se a idade está dentro de um intervalo válido

Caso alguma informação esteja incorreta, a API retorna uma mensagem de erro informando o problema.

# **Login de Usuário**

**A funcionalidade de login recebe:**

Usuário
Senha

O sistema realiza validações básicas para verificar se os dados enviados são válidos.

Caso as informações estejam corretas, a API retorna uma mensagem de sucesso indicando que o login foi realizado corretamente.

Caso contrário, é retornada uma mensagem de erro informando que o usuário ou senha são inválidos.

# **🎯 Objetivo do Projeto**

Este projeto foi desenvolvido com o objetivo de praticar:

Criação de APIs REST
Estruturação de projetos com MVC
Manipulação de requisições HTTP
Validação de dados enviados pelo cliente
Retorno de respostas em JSON
Organização de código em controllers e rotas

# **👨‍💻 Autor**

Rafael Ladeira Reyes

Estudante de Desenvolvimento de Sistemas focado em aprimorar conhecimentos em programação, backend e desenvolvimento de APIs.
Teste da rota login (GET )e rota cadastro (POST)
