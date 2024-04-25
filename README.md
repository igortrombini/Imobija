# Resumo dos Componentes e Estilos

## Componentes Comuns

- **Card**: Exibe informações resumidas de um imóvel, como imagem, tipo, endereço e valor.
- **Banner**: Mostra um banner na parte superior de algumas páginas, com imagem de destaque e descrição breve.
- **Input**: Campo de entrada genérico em formulários para coletar informações do usuário.
- **Button**: Botão interativo para executar ações específicas, como enviar formulários ou navegar.
- **TextArea**: Área de texto multi-linha em formulários para informações extensas do usuário.
- **TopBanner**: Similar ao `Banner`, posicionado no topo da página para informações importantes.

## Estilos

- Estilos dos componentes são definidos em arquivos separados na pasta `styles`, facilitando manutenção e personalização.

## Contexto e API

- O aplicativo utiliza contexto (`Context API`) para gerenciar estado global e compartilhar dados entre componentes.
- Comunica-se com uma API externa para obter e enviar dados, como informações de imóveis, mensagens e autenticação de usuários.

## Como Usar

1. Clone o repositório do projeto.
2. Instale as dependências utilizando `npm install`.
3. Execute o aplicativo com `npm start`.
4. O site estará disponível em seu navegador no endereço http://localhost:3000/.
OBS: Ele é dependente da API para toda as FUNÇOES DE CRUD

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no aplicativo.
- **Context API**: Gerenciamento de estado global.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **CSS Modules**: Sistema de estilos localizados para componentes React.
- **React Toastify**: Exibição de notificações na interface do usuário.
- **React Icons**: Ícones para uso em componentes React.
