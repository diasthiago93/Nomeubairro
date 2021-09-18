import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --eerie-black: #222222ff;
    --teal-blue: #6c63ff;
    --green-sheen: #6c63ff;
    --ash-gray: #cfd7c7ff;
    --beige: #f6f1d1ff;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;
