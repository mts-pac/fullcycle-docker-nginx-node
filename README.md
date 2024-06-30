# Aplicativo Node.js com proxy reverso Nginx e MySQL

Este arquivos demonstram como configurar uma aplicação Node.js com um proxy reverso Nginx e um banco de dados MySQL, utilizando Docker Compose.

## Estrutura do Projeto

```bash
  ├── docker-compose.yaml
  ├── nginx
  │   ├── Dockerfile
  │   ├── Dockerfile.prod
  │   └── nginx.conf
  └── node
      ├── Dockerfile
      ├── Dockerfile.prod
      ├── index.js
      ├── node_modules
      ├── package-lock.json
      └── package.json
```

## Configuração

O arquivo `docker-compose.yaml` define os serviços `proxy`, `app` e `db`, suas dependências e a rede compartilhada. Os serviços são:
- **proxy**: Serviço Nginx que atua como proxy reverso para a aplicação Node.js.
- **app**: Aplicação Node.js que se conecta ao banco de dados MySQL.
- **db**: Serviço MySQL.

## Como Executar

1. Clone este repositório:

2. Construa e inicie os contêineres:

```bash
  docker compose up --build
```

3. Acesse a aplicação em [http://localhost:8080](http://localhost:8080).

## Detalhes dos Arquivos

- `node/Dockerfile` e `node/Dockerfile.prod`: define a configuração da imagem Docker para a aplicação Node.js, tanto uma imagem para o desenvolvimento quanto para a produção. Inclui a instalação do `dockerize` para garantir que o contêiner espere pela disponibilidade do banco de dados.
- `node/index.js`: aplicação Node.js que
  - Cria uma tabela `people` se não existir.
  - Insere um registro na tabela.
  - Exibe os registros ao acessar a rota `/`.
- `nginx/Dockerfile` e `nginx/Dockerfile.prod`: define a configuração da imagem Docker para o Nginx, tanto uma imagem para o desenvolvimento quanto para a produção.
- `nginx/nginx.conf`: configuração do Nginx para atuar como proxy reverso, redirecionando as requisições para o serviço `app` na porta 3000.
