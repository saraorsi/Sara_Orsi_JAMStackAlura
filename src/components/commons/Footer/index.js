import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const FooterWrapper = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.primary.main.color};
    font-size: 1.5rem;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main.contrastText};
    a{
        margin: 0 .75rem;
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
 
               <a href="#">IG</a>
               <a href="#">GH</a>
               <a href="#">LD</a>

        </FooterWrapper>
    )
}