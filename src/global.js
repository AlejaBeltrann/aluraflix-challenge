import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --roboto: 'Roboto', sans-serif;
    --color-primary-medium: rgba(42, 122, 228, 1);
    --color-frontend: rgba(107, 209, 255, 1);
    --color-backend: rgba(0, 200, 111, 1);
    --color-inovation: rgba(255, 140, 42, 1);
    --color-black-dark: rgba(0,0,0,0.9);
    --color-black-medium: rgba(0, 0, 0, 0.6);
    --color-black-light: rgba(0, 0, 0, 0.5);
    --color-black-lighter: rgba(158, 158, 158, 1);
    --color-gray-dark: #C2C2C2;
    --color-gray-medium: #53585D;
    --color-gray-light: #F5F5F5;
    --color-error-dark: rgba(198, 40, 40, 1);
    --color-error-medium: rgba(229, 57, 53, 1);
    --color-error-light: rgba(252, 231, 231, 1);
}

body {
    font-family: var(--roboto);
    margin: 0;
    padding: 0;
    background-color: rgb(37, 41, 71);
}

/* Estilos generales */
h1 {
    color: var(--color-gray-light);
}
p {
    color: var(--color-gray-light);
}

/* Estilos responsivos */
/*COMPUTADOR*/
@media (max-width: 1200px) {
    body {
        background-color: rgb(50, 50, 50);
    }
}

/*TABLET*/
@media (max-width: 768px) {
    h1 {
        font-size: 1.5em;
        flex-direction: column-reverse;
        margin: auto
    }
}

/*MOVIL*/
@media (max-width: 480px) {
    h1 {
        font-size: 1.2em;
    }
    p {
        font-size: 0.9em;
    }
}
`;

export default GlobalStyle;
