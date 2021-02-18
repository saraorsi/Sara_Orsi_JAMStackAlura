import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }
  

    :root{
        font-size: 1.1vw;
    }

    html,
        body {
            font-family: ${({ theme }) => theme.fontFamily};
            color: ${({ theme }) => theme.colors.primary.main.color};
        }

    html, body {
        height: 100vh;
        width: 100%;
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyle;