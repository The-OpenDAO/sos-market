import { createGlobalStyle } from 'styled-components/macro';

import GilroyRegular from 'assets/fonts/Gilroy-Regular.woff2';
import GilroyMedium from 'assets/fonts/Gilroy-Medium.woff2';
import GilroyBold from 'assets/fonts/Gilroy-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy Regular';
    src: local('Gilroy Regular'),
    url(${GilroyRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Medium';
    src: local('Gilroy Medium'),
    url(${GilroyMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Bold';
    src: local('Gilroy Bold'),
    url(${GilroyBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    margin: 0;
    font-family: 'Gilroy Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button {
    font-family: 'Gilroy Medium', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, label {
    margin: 0;
  }
`;

export default GlobalStyle;
