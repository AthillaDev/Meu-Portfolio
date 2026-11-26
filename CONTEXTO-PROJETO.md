# Contexto do projeto: Portfólio Athilla Cruz

Arquivo de acompanhamento para retomar o trabalho de onde paramos. Atualizado em 2026-11-24.

## Stack do portfólio

- HTML, CSS e JavaScript puro. Sem frameworks, e essa stack não deve mudar.
- Fontes: Poppins (pesos 400, 500, 600 e 700).
- Ícones: SVG inline. O Font Awesome foi removido.
- Deploy: Vercel, em https://meu-portfolio-omega-seven.vercel.app
- Arquivos principais: `index.html`, `style.css`, `scripts.js`, `README.md`.

## O que já foi feito

**Avaliação e correções (lista de 1 a 16)**
- 1 a 5: menu ativo no mobile, âncoras com `scroll-margin`, links do GitHub no tema claro, cards "Em breve" sem links vazios e imagem de compartilhamento com a URL da Vercel.
- 6 a 9: roxo residual trocado por verde, `body.light` unificado, CSS duplicado removido, cursor corrigido em cards e campos.
- 10: contraste. Botões em degradê `#047857` → `#065f46` e tema claro com verde mais escuro. Aprovado.
- 11: `:focus-visible`, `prefers-reduced-motion` e `<noscript>` para as seções.
- 12: formulário com `addEventListener`, mensagem na página no lugar do `alert` e `enviarWhatsApp` renomeada.
- 13: `width` e `height` nas imagens, `fetchpriority` na foto e Refri do Dev convertido de GIF para MP4 (386 KB).
- 14: Font Awesome removido, ícones em SVG inline e Poppins reduzido. Botão de tema usa dois SVGs (sol e lua) controlados pelo CSS.
- 15: listener de scroll passivo e tema aplicado antes da primeira pintura.
- Ajuste extra: botão de tema não sobrepõe o menu entre 431 e 980 px.

**Projetos na seção "Meus Projetos"** (ordem atual)
1. Landing Page para MBA (Template). Criada do zero pelo usuário, com Next.js, TypeScript, Tailwind e Framer Motion. Conteúdo fictício, apresentado como template para venda. Vídeo `cerne-mba-web.mp4`. Repositório: `AthillaDev/Projeto-page-institucional`. Demo: `projeto-page-institucional.vercel.app`.
2. Refri do Dev (vídeo MP4).
3. Burger Forge (HTML, CSS e JS).
4. Mario & Luigi (HTML, CSS e JS).
5. Cadastro de Usuários, front-end (vídeo `cadastro-usuarios-web.mp4`). Repositório: `AthillaDev/Cadastro-de-Usuarios`. Demo: `cadastro-de-usuarios-fawn.vercel.app`.
6. Cadastro de Usuários, back-end (vídeo `backend-banco-web.mp4`). Repositório: `AthillaDev/API-Nodes`. Sem demo.

**Outros**
- Conversor de Moedas removido do portfólio. Imagens apagadas.
- Currículo em `Curriculo-Athilla.pdf` na raiz. Botão "Baixar Currículo" funcionando (confirmado).
- Vídeos originais de 30 MB e 21 MB ainda estão em `img/` (`video-backend-banco.mp4`, `video-cadastro-usuarios.mp4`). Podem ser apagados.
- Pasta `download/` vazia não pôde ser removida por falta de permissão. Apagar manualmente.

## Pendências

- [ ] **Item 16 (conteúdo):** decidir se as tecnologias sem projeto ainda ficam marcadas como "em aprendizado". Depende de quais tecnologias aparecerem nos projetos publicados.
- [ ] **Novo projeto de hamburgueria** (Express, Yup, Sequelize, migrations, PostgreSQL, Firebase, Docker, Insomnia, Biome). Quando publicar, enviar:
  - links do repositório e da demo;
  - o que cada banco guarda (PostgreSQL e Firebase);
  - se substitui o Burger Forge ou entra como card novo.
- [ ] **Atualizar tecnologias** com as ferramentas do novo projeto. Express, Yup, Sequelize, PostgreSQL e Firebase em "Tecnologias"; Docker, Insomnia e Biome em "Ferramentas". Só incluir o que estiver no código publicado.
- [x] **Formulário por e-mail (Formspree):** ID configurado em `scripts.js` e envio testado e validado. README do portfólio atualizado.
- [ ] **Vídeo do back no README** do repositório `Cadastro-de-Usuarios`: decidido depois.
- [ ] **Comentários da avaliação:** o usuário vai enviar todos de uma vez, depois das mudanças.
- [ ] **Commits:** fazer quando tudo estiver pronto, com o trailer de co-autoria definido pelo sistema.
- [ ] **Limpeza:** apagar os vídeos originais de 30 MB e 21 MB, se o usuário confirmar. Apagar a pasta `download/`.

## Decisões tomadas

- Stack do portfólio continua sem frameworks.
- Vídeos do portfólio ficam com áudio removido, para ocupar pouco espaço (cerca de 400 KB cada).
- Contatos podem aparecer nos vídeos. Não há preocupação com isso.
- O estilo `.home h1` e `.typing-text` se sobrepõem nos breakpoints. Não foi mexido, e o usuário vai manter com cuidado.
- Ajustes visuais só com aprovação do usuário. O verde do item 10 foi aprovado.

## Como continuar

1. Abrir o `index.html` no navegador e conferir os seis cards, o botão de tema e o currículo.
2. Quando o usuário trouxer os comentários, aplicar um por um e atualizar este arquivo.
3. Quando a hamburgueria estiver publicada, seguir as pendências dela.
4. Ao final, fazer os commits e marcar as pendências como concluídas.
