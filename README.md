# Loja Virtual 2026

Bem-vinda ao repositório da sua nova Loja Virtual! Este projeto foi configurado com as tecnologias mais modernas do mercado, focando em performance, manutenibilidade e facilidade de desenvolvimento.

## 🛠 Tecnologias Utilizadas

### ⚡ Vite
O Vite é a ferramenta que usamos para criar e rodar o projeto. Ele substitui o antigo "Create React App".
- **Por que usamos?** Ele é extremamente rápido para iniciar o servidor e para atualizar a página quando você salva um arquivo (Hot Module Replacement).

### ⚛️ React
A biblioteca para criar a interface do usuário.
- **Versão**: 19 (Latest)

### 📘 TypeScript
É o JavaScript com superpoderes. Ele adiciona "tipagem" ao código.
- **Por que usamos?** Ajuda a evitar erros bobos (como tentar somar texto com número) antes mesmo de rodar o código. Melhorar muito a inteligência do editor de código (VS Code).

### 🎨 Tailwind CSS
Um framework de CSS utilitário.
- **Por que usamos?** Em vez de criar arquivos `.css` separados e inventar nomes de classes, usamos classes prontas como `flex`, `p-4`, `text-center` diretamente no HTML. Isso agiliza muito o desenvolvimento.

## 🚀 Como Rodar o Projeto

1.  **Instalar dependências** (caso ainda não tenha feito):
    ```bash
    npm install
    ```

2.  **Iniciar o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    O terminal mostrará um link (geralmente `http://localhost:5173`) para você acessar no navegador.

## 📁 Estrutura de Pastas

-   `src/`: Todo o código fonte fica aqui.
    -   `main.tsx`: O ponto de entrada da aplicação.
    -   `App.tsx`: O componente principal.
    -   `index.css`: Onde importamos o Tailwind.
-   `public/`: Arquivos estáticos (imagens, ícones) que não passam pelo processo de build.

---
*Desenvolvido passo a passo com foco em aprendizado.*
