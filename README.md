# Projeto de Desafio de Vaga (Front-end)

Este projeto é um desafio de vaga para a posição de desenvolvedor front-end. Foi desenvolvido utilizando o framework ReactJS, o Firebase como backend para a maioria dos dados, o Styled Components para estilização e o Google Maps para exibição de um mapa.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Autenticação de usuários: É possível fazer login utilizando o email e senha cadastrados no ambiente de teste.
- Exibição de dados do cliente: Na página do dashboard, são exibidos os dados do cliente logado.
- Integração com o Google Maps: A aplicação utiliza a API do Google Maps para exibir um mapa interativo.

## Pré-requisitos

Antes de executar o projeto em ambiente local, certifique-se de ter as seguintes dependências configuradas:

- Um projeto Firebase com Firestore e Firebase Authentication configurados. Consulte a documentação oficial do Firebase para obter mais informações.
- Uma chave de API do Google Maps. É necessário configurar essa chave no arquivo .env para o mapa funcionar corretamente.

## Configuração do ambiente

Siga as instruções abaixo para configurar e executar o projeto em ambiente local:

1. Clone o repositório do projeto no GitHub: `git clone <URL_DO_REPOSITÓRIO>`
2. Navegue até o diretório do projeto: `cd <NOME_DO_DIRETÓRIO>`
3. Instale as dependências do projeto utilizando o comando: `yarn install`
4. Crie um arquivo `.env` baseado no arquivo `.env.example` e preencha as variáveis de ambiente necessárias, como a chave de API do Google Maps e as configurações do Firebase.
5. Execute o comando `yarn start` para iniciar a aplicação localmente.

## Teste na Vercel

A aplicação também está disponível na plataforma Vercel para análise. Para acessar, utilize as seguintes credenciais de usuário:

- Email: agilinojose@gmail.com
- Senha: qazxsw123

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir issues e enviar pull requests no repositório do GitHub. Faremos o possível para revisar e incorporar suas contribuições.

## Licença

Todos os direitos reservados. Este projeto não permite o uso, cópia ou distribuição do código-fonte para terceiros. É estritamente para fins de análise e avaliação para o desafio de vaga.
