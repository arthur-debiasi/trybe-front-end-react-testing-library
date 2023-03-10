# [Trybe](https://www.betrybe.com/) Project - [React Testing Library](deploy).

## 💻 Project

Creating a test routine for a Pokédex application using React Testing Library.

## 🚀 Built With

> [![Javascript][Javascript]][Javascript-url][![React][React.js]][React-url][![React Testing Library][TestingLibrary]][TestingLibrary-url]


## 📌 Skills

- Use selectors from the React Testing Library in automated tests;
- Simulate events with React-Testing-Library in automated tests;
- Test asynchronous logic flows with the React Testing Library;
- Write tests that allow refactoring the structure of application components without having to change them;
- Create mock APIs using fetch.
- Test inputs.

## Getting Started

### ⬇️ Dependencies

```bash
npm install
``` 

### ⚡ Running the Aplication
As the project consists of creating tests, initially it is necessary to run the application:

```bash
npm start
``` 

And then run the tests:

```bash
npm test
``` 
To "test the tests", that is, to verify if the tests created are really fulfilling their role, the [Stryker Mutator](https://stryker-mutator.io) library was used. To run it, use the command below for each of the configuration files located in the `./stryker folder`:

```bash
npx stryker run ./stryker/filename.conf.json
```

## 💬 Contact Me

<div align="left" style="display: inline_block">
  <a href="https://arthur-debiasi.github.io" target="_blank"><img height="28rem" src="https://img.shields.io/badge/my_portfolio-3fc337?style=for-the-badge" target="_blank"></a> 
  <a href="https://www.linkedin.com/in/arthur-debiasi" target="_blank"><img height="28rem" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href = "mailto:arthurdebiasi@hotmail.com"><img height="28rem" src="https://img.shields.io/badge/outlook-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" target="_blank"></a>
</div>

<!-- ## 📄 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#nome-do-projeto)<br> -->

[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[ReactRouter]: https://img.shields.io/badge/React_Router-20232A?style=for-the-badge&logo=reactrouter&logoColor=CA4245
[ReactRouter-url]: https://reactrouter.com/en/main
[MUI]: https://img.shields.io/badge/material_ui-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://img.shields.io/badge/material_ui-007FFF?style=for-the-badge&logo=mui&logoColor=white
[TestingLibrary]: https://img.shields.io/badge/React_Testing_Library-20232A?style=for-the-badge&logo=testinglibrary&logoColor=E33332
[TestingLibrary-url]: https://testing-library.com/docs/react-testing-library/intro/

