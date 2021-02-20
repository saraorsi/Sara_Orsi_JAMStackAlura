import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Redaction';
  src: url('./fonts/Redaction20.woff') format('woff');
}
    ${normalize}

    *{
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 400;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
  
    html,
    body {
        font-family: ${({ theme }) => theme.fontFamily};
        color: ${({ theme }) => theme.colors.primary.main.color};
        height: 100%;
    width: 100%;
    font-family: 'Redaction';
    }


    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    :root{
        ${breakpointsMedia({
            xs: css`
                font-size: 2.7vw;         
            `,
            md: css`
                font-size: 1.15vw;  
        `
})}}
`
export default GlobalStyle;