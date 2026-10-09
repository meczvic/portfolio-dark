# Victor Hugo Dantas — Portfolio Dark

Novo portfólio independente em React 19 + TypeScript + Vite. CSS responsivo próprio, equivalente moderno à abordagem com Tailwind, sem biblioteca de componentes adicional. Não modifica `meczvic/portfolio`.

## Executar

Requer Node.js 22.12+ e npm.

```sh
npm install
npm run dev
```

## Verificar e gerar produção

```sh
npm run lint
npm test
npm run build
npm run preview
```

O build está em `dist/`. Após a primeira instalação, use `npm ci` para instalar exatamente as versões do lockfile.

## Conteúdo e design

- Home, Sobre, Projetos e Contato, em português.
- Fundo azul quase preto, ciano suave, vidro discreto e composição sem decoração excessiva.
- Inventário TI, Hughes Web e Automação EACE; descrições baseadas no portfólio público existente em 09/10/2026. Automação EACE usa a descrição de extração de helpdesk da referência; métricas existentes são preservadas sem resultados novos.
- Nenhum dado fictício, dashboard simulado, depoimento ou taxa de resultado.
- Contato por e-mail, LinkedIn e GitHub. Não existe formulário que simule envio.
- Links dos projetos levam ao e-mail com assunto específico, pois o código é privado.
- Menu acessível, foco visível, link para pular conteúdo e respeito a movimento reduzido.
- Testes cobrem navegação, menu e destinos de contato.

Edite `src/App.tsx` para conteúdo, contatos e projetos; `src/styles.css` para o visual. As fontes Google têm fallback local sans-serif.

## Preview separado na Vercel

1. Entre em https://vercel.com/new com sua conta.
2. Importe **somente o novo repositório `portfolio-dark`**. Se ele não aparecer, autorize esse repositório na integração GitHub da Vercel.
3. Use um **novo projeto** chamado `portfolio-dark`, preset Vite, comando `npm run build` e saída `dist` (já declarados em `vercel.json`).
4. Clique Deploy. Não configure o domínio do portfólio atual; mantenha o endereço `.vercel.app` gerado para comparação.

Nenhuma variável de ambiente ou backend é necessário. Para preview via CLI autenticada: execute `npx vercel` nesta pasta, escolha criar um novo projeto e não vincule o projeto atual.

## Conteúdo ampliado

A nova versão preserva os seis projetos do portfólio de referência: Inventário TI, Hughes Web, Automação EACE (extração de dados), Bot de Consulta de Chamados, Adega ERP e Atlas. Resultados numéricos foram transpostos da referência, sem novas estimativas. Recursos planejados permanecem identificados como planejamento ou conceito.

A seção Inventário TI apresenta coleta, evidências, QR, OCR, mapa, busca, exportação, conflitos, validação, segurança, agente Windows beta e estado do produto. Detalhes expansíveis mantêm a página organizada sem retirar conteúdo. As tecnologias de backend e automação também foram restauradas.

Preview publicado: https://portfolio-dark-kohl.vercel.app/
