[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

# Owlrange Mobile 📱

Este projeto tem como objetivo ajudar você nos seus estudos. 📚

Todos nós já passamos pelo problema de ter tantos materiais de estudo, que não conseguimos definir um passo a passo para os estudos e/ou acompanhar o quanto do material ja foi estudado. 😥

Com esse aplicativo, o problema acaba. 😍

## Stack utilizada

- React Native e TypeScript;
- React Navigation;
- Styled Components;
- Lottie;
- Moti.

## Rodando localmente

> Nesse projeto é usado apenas o Yarn como gerenciador de pacotes. Recomendamos que faça o mesmo, prevenindo eventuais problemas. Veja o website oficial do Yarn [aqui](https://yarnpkg.com/).


### Rodando o app
>Para continuar, requer que tenha já feito as instalações em sua máquina referente a JDK11 e as SDKs (Android). Caso não, você pode seguir a [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup) ou a da [Rocketseat](https://react-native.rocketseat.dev/) a qual está em português.

1. Clone o projeto
```bash
git clone https://github.com/dansenpir/owlrangenotes-mobile
```

2. Entre no diretório do projeto e instale as dependências
```bash
cd owlrangenotes-mobile && yarn
```

3. Crie uma chave de assinatura para buildar o app
No passo a seguir, você criará uma keystore (chave de assinatura) no ```android/app/```
```bash
cd android/app &&
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 &&
cd ../..
```
> Você pode preencher o formulário ou apenas ir apertando enter e depois yes


4. Inicie as dependências mobile e instale o app
Neste passo, você estará iniciando as dependências do mobile, no caso os arquivos nas pastas  ```ios/``` e/ou ```android/``` serão criadas. Este processo é feito apenas uma vez.
Este mesmo comando é responsável por buildar uma versão do app de desenvolvimento em seu emulador ou dispositivo conectado ao USB [(Configurar o ADB talvez seja necessário)](https://reactnative.dev/docs/running-on-device).

> Certifique-se de estar na raíz do projeto (owlrangenotes-mobile/)
```bash
yarn android
yarn ios # Somente se estiver em um macOS.
```

5. Suba o Metro (server bundler):
```bash
yarn start
```

Com estes passos, você estará com o app instalado.

### Adicionais
Rodar testes (Jest)
```bash
  yarn test
```

## Relacionados

Abaixo constam os links do _GitHub_ para os repositórios do projeto **Owlrange Notes**.

[Projeto Frontend](https://github.com/dansenpir/owlrangenotes-frontend) | [Projeto Backend](https://github.com/dansenpir/owlrangenotes-backend)

## Dúvidas
Para dúvidas sobre o projeto Mobile, ou para o projeto em geral, por gentileza verifique primeiramente se sua dúvida consegue ser sanada no canal de [status-projetos](https://discord.com/channels/847518545156112424/1031925706524999780) do servidor da Orange Juice no Discord.
