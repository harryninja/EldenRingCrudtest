# EldenRing

## Instalação

1. Clone o repositório
bash git clone https://github.com/seunomeusuario/seurepositorio.git

2. Navegue até o diretório do projeto
bash cd seurepositorio

3. Instale as dependências
bash npm install

4. Inicie o servidor
bash node server.js

## Compilando SASS

Para compilar os arquivos SASS, você precisará ter o Node Sass instalado globalmente em seu sistema. Se ainda não estiver instalado, você pode fazer isso executando o seguinte comando:

bash npm install -g node-sass

Depois de instalar o Node Sass, você pode compilar seus arquivos SASS usando o seguinte comando:

bash node-sass src/css/styles.scss src/css/styles.css


## Rotas

- GET `api/persons` : Obter todas as Pessoas
- GET `api/persons/:id` : Obter Pessoa por id
- POST `api/persons` : Adicionar nova Pessoa
- PUT `api/persons/:id` : Atualizar Pessoa por id
- DELETE `api/persons/:id` : Remover Pessoa por id
- DELETE `api/persons` : Remover todas as Pessoas
- GET `api/persons/allProf` : Encontrar todas as Pessoas com profissão

## Controladores

- `person.controller.js` : Lida com todas as solicitações relacionadas à pessoa