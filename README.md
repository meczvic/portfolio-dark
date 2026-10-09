# Victor Hugo Dantas — Portfolio Dark

Novo portfólio independente em React 19 + TypeScript + Vite. A proposta visual é dark tecnológica e sóbria, com poucos elementos decorativos, ciano controlado, hierarquia forte e conteúdo técnico real. Este repositório não modifica `meczvic/portfolio`.

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

O build fica em `dist/`. Após a primeira instalação, use `npm ci` para instalar exatamente as versões do lockfile.

## Estrutura do portfólio

- Home, Projetos, Inventário TI, Sobre e Contato.
- Inventário TI, Hughes Web e Automação EACE ficam em destaque.
- Bot de Consulta de Chamados, Adega ERP e Atlas permanecem disponíveis em uma seção compacta e recolhível.
- Nenhum dado fictício, dashboard simulado, depoimento ou taxa de resultado inventada.
- Contato por e-mail, LinkedIn e GitHub.
- Menu acessível, foco visível, link para pular conteúdo e respeito a movimento reduzido.

## Inventário TI

A apresentação do produto acompanha a evolução real do repositório `meczvic/INVENTARIO-TI` e atualmente destaca:

- coleta offline-first com contrato de 36 campos e formulário em 7 etapas;
- QR Code, OCR local, histórico, conflitos e validação;
- multiempresa e RBAC;
- Digital Twin com modelos GLB privados e fallback procedural;
- ciclo de vida, custódia e movimentações de ativos;
- garantias e contratos;
- relações CMDB e qualidade cadastral;
- agente Windows em beta para coleta e importação assistida.

Recursos futuros continuam identificados como planejamento ou conceito.

## Preview separado na Vercel

O preview independente continua configurado para um projeto Vercel separado do portfólio atual. Nenhuma variável de ambiente ou backend é necessária.

Preview principal: https://portfolio-dark-kohl.vercel.app/

## CI

O workflow `.github/workflows/ci.yml` executa em pull requests e na `main`:

```sh
npm ci
npm run lint
npm test
npm run build
```

Isso mantém a versão publicada separada do portfólio atual até a decisão final sobre qual versão usar.
