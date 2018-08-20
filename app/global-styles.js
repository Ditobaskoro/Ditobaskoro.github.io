import { injectGlobal } from 'styled-components';
import Lato from './fonts/Lato-Regular.ttf';
import LatoLight from './fonts/Lato-Light.ttf';
import LatoThin from './fonts/Lato-Thin.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  @font-face {
    font-family: Lato;
    src: url('${Lato}') format('truetype');
  }
  @font-face {
    font-family: LatoLight;
    src: url('${LatoLight}') format('truetype');
  }
  @font-face {
    font-family: LatoThin;
    src: url('${LatoThin}') format('truetype');
  }
`;
