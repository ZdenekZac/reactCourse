import { createGlobalStyle } from 'styled-components';

// BARVY LOGO*  Hlavní barva značky (ta modrá z dodávky) */
// --color-brand-500: #4fa8c2;
// --color-brand-600: #3d8ba2; /* Trochu tmavší na hover */

// /* Akcenty (lesy a příroda) */
// --color-accent-green: #065f46;
// --color-accent-brown: #92400e;

// /* Neutrální barvy (hory) */
// --color-grey-400: #94a3b8;
// --color-grey-900: #0f172a; /* Skoro černá pro hlavní text */

// /* Pozadí */
// --color-bg-light: #f8fafc;

const GlobalStyles = createGlobalStyle`
:root {
  /* SKY */
  --color-sky-200: #bae6fd;
  --color-sky-400: #38bdf8;
  --color-sky-600: #0284c7;

  /* EMERALD */
  --color-emerald-200: #a7f3d0;
  --color-emerald-400: #34d399;
  --color-emerald-600: #059669;

  /* AMBER */
  --color-amber-200: #fde68a;
  --color-amber-400: #fbbf24;
  --color-amber-600: #d97706; 

    /* GREY */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {

  font-family: "Montserrat", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
