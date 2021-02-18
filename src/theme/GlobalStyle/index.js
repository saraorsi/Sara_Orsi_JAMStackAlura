import { createGlobalStyle, css } from 'styled-components'
import { normalize} from 'styled-normalize'
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia'

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
    }


    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    :root{
        ${breakpointsMedia({
    xs: css`
    font-size: .8rem;         `,
    md: css`
       font-size: 1.2rem;  
        `
})}}
`
export default GlobalStyle;