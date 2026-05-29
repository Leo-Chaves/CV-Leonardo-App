# CV Leonardo App

Aplicativo mobile de currículo e portfólio de Leonardo Chaves, criado em React Native com Expo e TypeScript.

## Objetivo

Apresentar formação, experiência profissional, habilidades, projetos e um jogo da forca nativo dentro do app. O visual usa uma paleta profissional em azul e preto, com cards, botões sólidos e layout adaptado para celular.

## Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- JavaScript
- React Hooks
- Componentização
- StyleSheet
- Navegação por rotas
- Assets locais
- Publicação via Expo

## Telas disponiveis

- Home
- Sobre
- Experiência Acadêmica
- Experiência Profissional
- Projetos
- Jogo

## Jogo da forca

A tela Jogo contém uma forca de filmes feita nativamente em React Native, sem WebView, links externos ou redirecionamento. O app sorteia um filme de uma lista com 30 títulos, exibe a palavra oculta, permite escolher letras em um teclado virtual de A a Z e controla erros, tentativas restantes, letras usadas, vitória, derrota e reinício.

## Como executar localmente

```bash
npm install
npx expo start
```

Depois, abra o app pelo Expo Go ou por um emulador Android/iOS.

## Como publicar no Expo

1. Crie ou acesse sua conta Expo.
2. Instale e configure o EAS CLI, se ainda não tiver:

```bash
npm install -g eas-cli
eas login
```

3. Configure o projeto:

```bash
eas build:configure
```

4. Gere uma build ou publique conforme a necessidade da atividade:

```bash
eas build --platform android
```

## Links

- GitHub:
- Expo:
- YouTube:
