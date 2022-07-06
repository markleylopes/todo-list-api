# ☑ ToDo list API
Uma API em NestJS para controlar tarefas 😎

A toDo List API foi criada com o objetivo de criar tarefas simples e controlar o status. Para criação da tarefa, utilizou-se o modeilo abaixo
```JSON
{
  "status": 'pending',
  "description": "Fazer os testes dessa aplicação",
 }
```
Com os seguintes status possíveis
**pending** - para tarefas pendentes
**done** - para tarefas concluídas

## Requisitos

1. Node 16+
2. NPM 8+
3. yarn 1.22+
4. postgresql Database server

## Envs

##### Variáveis para banco de dados

`DATABASE_URL` - URL do banco de dados

`SHADOW_DATABASE_URL` - URL secundária do banco de dados para execução de migrations (Necessário para uso do postgresql em cloud)

## Executando o projeto

Execute os seguintes comandos para executar o projeto

1. Crie o arquivo .env com as variáveis informadas anteriormente de acordo com seu projeto
2. Instale as dependencias `yarn`
3. Inicie o servidor local `yarn start:dev`
4. Aproveite! \o/

## Estrutura

**dto** - Esquemas dos objetos recebidos para alteração para cada rota
**entities** - Esquema dos objetos utilizados na aplicação
**filters** - Métodos que filtram as respostas retornadas ao client
**controler** - Arquivo para declaração dos controladores (Neste caso as rotas da REST API)
**module** - Arquivo raíz do módulo da aplicação
**service** - Arquivo de serviço onde serão realizadas as chamadas dos métodos para alteração dos dados

## Rotas

**[GET] /tasks** - Retorna todas as tarefas

**[GET] /tasks/{id}** - Retorna tarefa por Id

**[POST] /tasks** - Cria uma tarefa

**[PATCH] /tasks/{id}** - Atualizar dados de uma tarefa

**[DELETE] /tasks/{id}** - Excluir uma tarefa por id


## Bibliotecas/Tecnologias usadas

**NestJS** - Framework backend em NodeJS
https://nestjs.com/

**Prisma IO** - Biblioteca ORM de código aberto
https://www.prisma.io/docs/

**postgresql** - Banco de dados relacional de código aberto
https://www.postgresql.org/


## Referências de documentação

**Primeiros passos NestJS**
https://docs.nestjs.com/first-steps

**Gerador de CRUD**
https://docs.nestjs.com/recipes/crud-generator#crud-generator

**NestJS - Prisma**
https://docs.nestjs.com/recipes/prisma

**Prisma - postgresql**
https://www.prisma.io/docs/concepts/database-connectors/postgresql

**Filtros de exceção**
https://docs.nestjs.com/exception-filters

**Shadow database**
https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database
