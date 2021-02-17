import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const FooterWrapper = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    font-size: 1.5rem;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`

export default function Footer() {
    return (
        <FooterWrapper>
            Footer
        </FooterWrapper>
    )
}