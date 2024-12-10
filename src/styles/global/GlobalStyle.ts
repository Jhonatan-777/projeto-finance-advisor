import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Remoção de estilos padrão */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Estilos para elementos HTML5 */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* Remoção de estilos de listas */
  ol, ul {
    list-style: none;
  }

  /* Reset para blocos de citação */
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  /* Reset para tabelas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Aplicação de estilos globais */
  html {
    font-size: 16px; /* Tamanho base */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    line-height: 1.5;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors?.background || "#ffffff"};
    color: ${({ theme }) => theme.colors?.text || "#000000"};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea, button, select {
    font: inherit;
  }
`;
