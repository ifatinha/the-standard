#  The Standard Clone

Um projeto de clone simples do site do hotel [The Standard, Maldives](https://www.standardhotels.com/maldives), desenvolvido utilizando HTML, CSS, SCSS e JavaScript. Este projeto visa recriar a aparência e funcionalidade básicas do site como um exercício de desenvolvimento front-end.

## Tecnologias Utilizadas

- **HTML**: Para estruturar o conteúdo da página.
- **SCSS**: Para estilizar o projeto com recursos avançados de CSS.
- **JavaScript**: Para adicionar interatividade e funcionalidades dinâmicas.

## Estrutura de Pastas

Abaixo está uma descrição da estrutura de pastas do projeto:

```plaintext
/
├── assets/                 # Contém todos os recursos do projeto
│   ├── config/             # Arquivos de configuração com os pacotes que devem ser instalados
│   ├── css/                # Diretório para arquivos CSS compilados a partir do SCSS.
│   ├── icons/              # Ícones utilizados no projeto
│   ├── images/             # Imagens do projeto
│   ├── js/                 # Arquivos JavaScript
│   ├── sass/               # Arquivos Sass para estilização
│   └── videos/             # Vídeos utilizados no projeto
│
├── pages/                  # Páginas HTML principais do site
├── index.html              # Página inicial
└── README.md               # Este arquivo

```

## Instalação e Execução

1. Clone o repositório:

    ```bash
    git clone https://github.com/ifatinha/the-standard.git
    ```

2. Navegue para o diretório do projeto:

    ```bash
    cd the-standard
    ```
3. Se necessário, instale as dependências
    
    ```
    npm install
    npm run build-css
    ```
    Certifique-se de ter o Node.js e o npm instalados. O comando `npm run build-css` deve compilar o SCSS para CSS.

4. Abra o arquivo `index.html` em seu navegador preferido:

    ```bash
    open index.html
    ```

## Estrutura de Páginas

- **index.html**: A página principal do projeto.
- **pages/**: Contém páginas HTML adicionais que podem ser acessadas a partir do `index.html`.

## Personalização

- **CSS**: Adicione ou modifique os estilos no diretório `assets/css`.
- **JavaScript**: Adicione funcionalidades no diretório `assets/js`.
- **Imagens e Ícones**: Coloque suas imagens no diretório `assets/images` ou `assets/icons`.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra um pull request com suas alterações ou melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
