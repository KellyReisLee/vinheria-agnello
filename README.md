# Vinheria Agnello 🍷

> Curadoria familiar de vinhos de importação própria e seleção artesanal, proporcionando uma experiência de adega tradicional no ambiente digital desde 1978.

---

## 📌 Sobre o Projeto

A **Vinheria Agnello** é uma aplicação web desenvolvida em Vanilla (HTML5, CSS3 e JavaScript moderno) que simula a experiência de atendimento personalizado de uma loja física tradicional. O projeto destaca-se pela curadoria familiar do Sr. Giulio e sua filha Bianca, oferecendo ferramentas interativas exclusivas como uma calculadora inteligente de eventos, quiz de sommelier e vitrine dinâmica.



---

## 🚀 Funcionalidades Principais

* **Curadoria em Destaque:** Seção de apresentação da história e atendimento artesanal da família Agnello com animações fluidas baseadas em rolagem (`Intersection Observer`).
* **Calculadora de Eventos:** Ferramenta interativa que calcula a quantidade ideal de garrafas de vinho (tinto, branco e espumante) com base no número de convidados, duração e estilo do evento.
* **Vitrine Dinâmica ("Achados da Semana"):** Renderização programática de rótulos recém-chegados à adega, integrados diretamente ao fluxo de compras.
* **Gaveta de Carrinho (Drawer):** Gerenciamento de itens em tempo real com controle de quantidade e persistência visual.
* **Navegação Modular:** Páginas estruturadas para catálogo, quiz de sommelier, autenticação/login e detalhes de produtos.

---

## 📂 Arquitetura de Pastas

O projeto utiliza uma estrutura limpa e modular de arquivos estáticos, ideal para aplicações web modernas:

```text
Vinheria Agnello/
├── assets/                 # Recursos visuais (icons, images)
├── css/                    # Folhas de estilo modularizadas por escopo
│   ├── animations.css      # Keyframes e classes de animação por scroll
│   ├── catalogo.css        # Estilos da página de catálogo
│   ├── eventos.css         # Estilos da seção e calculadora de eventos
│   ├── footer.css          # Estilos do rodapé
│   ├── gaveta-carrinho.css # Estilos do drawer de compras
│   ├── global.css          # Resets e estilos globais
│   ├── header.css          # Estilos do cabeçalho
│   ├── home.css            # Estilos específicos da página inicial
│   ├── login.css           # Estilos da página de autenticação
│   ├── modals.css          # Estilos para modais gerais
│   ├── produto.css         # Estilos da página de detalhes do produto
│   ├── quiz.css            # Estilos do quiz do sommelier
│   ├── sugestoes-sommelier.css # Estilos da página de sugestões
│   └── variables.css       # Variáveis globais (cores, tipografia, etc.)
├── js/                     # Scripts JavaScript organizados
│   ├── calculadora.js      # Lógica de negócio da calculadora de eventos
│   ├── catalogo.js         # Lógica da página de catálogo
│   ├── componentes.js      # Injeção dinâmica de componentes (Header/Footer)
│   ├── gaveta-carrinho.js  # Lógica de controle do carrinho lateral
│   ├── home.js             # Comportamentos específicos da home
│   ├── main.js             # Script de inicialização global
│   ├── produto.js          # Lógica da página de produto
│   ├── quiz.js             # Lógica interativa do quiz
│   └── sugestoes-sommelier.js # Lógica de sugestões personalizadas
├── catalogo-vinhos.js      # Base de dados de vinhos e produtos
├── index.html              # Página Inicial
├── catalogo.html           # Página de Catálogo Completo
├── login.html              # Página de Autenticação
├── produto.html            # Detalhes do Produto
├── quiz.html               # Quiz do Sommelier
└── sugestoes-sommelier.html# Recomendações Personalizadas

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semantic:** Estruturação acessível e otimizada para SEO.
* **CSS3 Moderno:** Grid Layout, Flexbox, Variáveis CSS, `backdrop-filter` e animações baseadas em curvas `cubic-bezier`.
* **JavaScript (ES6+):** Manipulação de DOM, programação assíncrona, templates literats e uso da API `Intersection Observer`.

## ⚙️ Como Executar o Projeto Localmente

1. Clone o repositório em sua máquina:
   ```bash
   git clone <url-do-repositorio>


## 👥 Participantes do Projeto

* **Desenvolvedor Principal:** Responsável pela arquitetura front-end, estilização modular em CSS e lógica interativa em JavaScript.
* **Curadoria de Conteúdo e Rótulos:** Giulio & Bianca Agnello (Concepção da experiência de adega tradicional e seleção artesanal de vinhos).

## Contribuições:

Agradecemos a todos que colaboraram para o desenvolvimento deste projeto:

- [Kelly Reis Lee](https://github.com/KellyReisLee)
- [Enrique Fernandes](https://github.com/enrique-fcnr)


## 📱 Telas do Projeto

<p align="center">
  <img src="./assets/images/home.png" width="18%" alt="Home" />
  <img src="./assets/images/catalogo.png" width="18%" alt="Catálogo" />
  <img src="./assets/images/produto.png" width="18%" alt="Produto" />
  <img src="./assets/images/quiz.png" width="18%" alt="Quiz" />
  <img src="./assets/images/calculadora.png" width="18%" alt="Calculadora" />
</p>