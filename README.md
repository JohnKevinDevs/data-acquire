# DataAcquire

Landing page institucional da DataAcquire, consultoria focada em dados, BI, segmentacao inteligente e aquisicao digital.

## Como rodar localmente

Crie um arquivo `.env` na raiz com o endpoint do Formspree:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xqejpjlp
```

```bash
npm install
npm run dev
```

## Formulario de leads

O formulario envia os dados para o Formspree usando a variavel de ambiente `VITE_FORMSPREE_ENDPOINT`.

No deploy, configure a mesma variavel no painel da plataforma escolhida. Depois de alterar variaveis de ambiente, faca um novo deploy para a aplicacao usar o endpoint atualizado.

## Scripts

- `npm run dev`: inicia o servidor local de desenvolvimento.
- `npm run build`: gera a versao de producao em `dist/`.
- `npm run preview`: executa o build localmente para revisao.
