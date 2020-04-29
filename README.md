### :clipboard: Funcionalidades do projeto:
Integração de banco de dados, TypeOrm para criação e gerenciamento de tabelas no banco de dados, carregar arquivos CSV e rotas para criar, listar e excliur transações.

### :straight_ruler: Arquitetura:

Neste projeto, foi divido a estrutura do projeto, com regras de negócios e validação de dados. Uma estrutura com modelos, repositórios e serviços foi usada para dividir as tarefas. Novas pastas foram criadas para separar a classe de erro e as configurações.

![estrutura](https://user-images.githubusercontent.com/43249054/80634612-1ba43b80-8a31-11ea-9a8f-f24f29d471a2.PNG)

:bulb: Funcionalidades:

POST /transactions: essa rota recebe title, value e type no body da requisição, sendo o tipo de transação, que deve ser "income" para entrada (depósitos) e "outcome" para saída (retirada). Ao registrar uma nova transação, ela deve ser armazenada dentro de um objeto com o formato da seguinte maneira:
```
{
"id": "uuid",
"title": "Salário",
"valor": 3000,
"tipo": "renda"
}
```
Ao registrar uma nova transação, ela deve ser armazenada no banco de dados, com os campos id, title, value, type, category_id, created_at, updated_at. Antes de criar uma nova categoria, é feita uma verificação para ver se já existe uma categoria com o mesmo título. Se existir, o ID que já existe no banco de dados é usado.

GET / transações: essa rota deve retornar uma lista de todas as transações que você registrou até o momento, juntamente com a soma das entradas, saques e crédito total.
```
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Salary"
      }
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Others"
      }
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome",
      "category": {
        "id": "uuid",
        "title": "Recreation"
      }
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

DELETE / transaction /: id: esta rota deve excluir uma transação com o ID referencia nos parâmetros de rota;

POST / transaction / import: a rota deve permitir a importação de um arquivo no formato .csv 

### ⚙️ Tecnologias utilizadas:

    - NodeJS;
    - Docker;
    - TypeORM
    - Typescript
    - EsLint;
    - Prettier;
    - Express;
    - Multer
    - Yarn;
    
### :checkered_flag: Passos para rodar o projeto:

Primeiro clone o arquivo do git:

```
$ git clone https://github.com/Fred-Reis/challenge_backEnd-05_GoStack-v2
```

Instale os módulos, executando:

```
yarn
```

E incie o servidor:

```
yarn dev:server
```
