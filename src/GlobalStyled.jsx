import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
/*Reset*/
/* 17a1f1 */
:root {
    --main: #D9090C;
    --main2: #B70E0C;
    --sec: #0044B7;
    --light: #FEFEFE;
    --dark: #181612;
}
::selection {
  background-color: var(--main);
  color: var(--light);
}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  cursor: default;
  font-family: "archivo", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  position: relative;
}
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
figcaption,
hr,
dl,
dd {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

input,
textarea,
select,
button {
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
}

input[type="text"],
textarea {
  width: 100%;
}

input,
textarea,
button {
  border: 1px solid gray;
}

button {
  padding: 0;
  line-height: inherit;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
}

img,
iframe,
video,
object,
embed {
  display: block;
  max-width: 100%;
}

svg {
  max-width: 100%;
}

table {
  table-layout: fixed;
  width: 100%;
}

[hidden] {
  opacity: 0;
  visibility: hidden;
}

noscript {
  display: block;
  margin-bottom: 1em;
  margin-top: 1em;
}

[tabindex="-1"] {
  outline: none !important;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: auto;
  margin: 0;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  white-space: nowrap;
}

* {
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
}

img {
  display: block;
  max-width: 100%;
}

a {
  margin: 0px;
  padding: 0px;
  display: block;
}

table {
  border-spacing: 0px;
}

button {
  border: none;
}
hr {
  border: none;
}

a,
button,
svg path {
  transition: 0.3s;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.title {
  font-size: 36px;
      font-weight: 700;
      position: relative;
      max-width: fit-content;
      margin-bottom: 10px;

      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #00000037;
      }
      &::before {
        display: block;
        position: absolute;
        left: 0;
        bottom: -1px;
        content: "";
        width: 56px;
        height: 4px;
        background-color: var(--main);
      }
}

#root {
 display: flex;
 flex-direction: column;
 align-items: center;
}

.btn {
  background-color: var(--main);
  transform: skew(-2deg);
  color: var(--light);
  font-style: italic;
  font-size: 24px;
  font-weight: 900;
  box-shadow: 0 -17px 0 var(--main2) inset, 0 10px 10px #000000ba;
  padding: 10px 30px;
  max-width: fit-content;

  &:hover {
  box-shadow: 0 -47px 0 var(--main2) inset, 0 10px 10px #000000ba;
  }
}

`;
