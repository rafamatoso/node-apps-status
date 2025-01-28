# Check URL Status

## Descrição

Este projeto verifica o status de URL's e gera relatórios em formato CSV e Markdown. Os resultados são organizados por data e armazenados automaticamente em uma pasta `output/YYYY-MM-DD`. Além disso, um histórico geral é mantido em `output/historic.csv`.

## Requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

```sh
npm install
```

ou

```sh
yarn
```

## Configuração das URLs

As URLs e seus respectivos ambientes devem ser configuradas dentro da pasta `src/utils/data/index.ts`. Como essa pasta está listada no `.gitignore`, ela não será versionada, então cada usuário deve criar sua própria estrutura.

### Criando a pasta e o arquivo manualmente

```sh
mkdir -p src/utils/data
```

Em seguida, crie o arquivo `src/utils/data/index.ts` com o seguinte conteúdo:

```ts
import { IURLEntry } from "../../types";

export const urls: IURLEntry[] = [
  { url: "https://example.com", env: "PROD" },
  { url: "https://staging.example.com", env: "STAGING" },
];
```

## Uso

### Executar a verificação de URLs

```sh
npm run start
```

### Gerar histórico consolidado

```sh
npm run save-historic
```

## Estrutura de Arquivos

```
/output (ignorado pelo Git)
  /YYYY-MM-DD
    results.csv
    results.md
  history.csv
/src
  /utils
    cliUtils.ts
    fileUtils.ts
    networkUtils.ts
    /data
      index.ts (ignorado pelo Git)
  index.ts
  types.ts
```

> **Nota:** A pasta `output` e seu conteúdo não serão versionados, pois estão listados no `.gitignore`. Eles serão gerados automaticamente perante execução dos scripts do app.

## Autor

Este projeto foi desenvolvido por [Rafael Matoso](https://github.com/rafamatoso).

## Contato

Dúvidas ou sugestões? Entre em contato!
