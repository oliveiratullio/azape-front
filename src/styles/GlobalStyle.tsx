import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

    * {
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: #e66a5b;
        }

        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;
