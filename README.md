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


## Rotas

- GET `api/tutorials` : Obter todos os Tutoriais
- GET `api/tutorials/:id` : Obter Tutorial por id
- POST `api/tutorials` : Adicionar novo Tutorial
- PUT `api/tutorials/:id` : Atualizar Tutorial por id
- DELETE `api/tutorials/:id` : Remover Tutorial por id
- DELETE `api/tutorials` : Remover todos os Tutoriais
- GET `api/tutorials/published` : Encontrar todos os Tutoriais publicados
- GET `api/tutorials?title=[kw]` : Encontrar todos os Tutoriais cujo título contém 'kw'
- GET `api/profissaos` : Obter todas as Profissões

## Controladores

- `tutorial.controller.js` : Lida com todas as solicitações relacionadas ao tutorial
- `profissao.controller.js` : Lida com todas as solicitações relacionadas à profissão
