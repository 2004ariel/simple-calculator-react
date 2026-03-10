# Projeto inicial em React Native

Projeto simples em React Native com Expo: uma calculadora que soma dois valores numericos.

## Tecnologias

- React Native
- Expo
- JavaScript

## Funcionalidades

- Entrada de dois numeros (`Valor A` e `Valor B`)
- Botao para calcular a soma
- Exibicao do resultado na tela
- Cor do resultado:
	- Verde para resultado positivo ou zero
	- Vermelho para resultado negativo

## Como rodar o projeto

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Execute no ambiente desejado:

```bash
npm run android
npm run ios
npm run web
```

## Estrutura basica

```text
.
|- App.js
|- index.js
|- app.json
|- package.json
|- components/
|  |- PrimeiroComponente.js
|  |- inputNumero.js
```

## Observacoes

- O projeto usa `expo start` como comando principal.
- Para abrir no celular, use o app Expo Go e escaneie o QR code exibido no terminal.
