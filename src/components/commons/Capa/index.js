import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const CapaWrapper = styled.div`
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(${({ theme }) => theme.colors.background.main.color}, ${({ theme }) => theme.colors.background.light.color});
    text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main. contrastText};
`

export default function Capa() {
    return (
        <CapaWrapper>
            <Text
                variant="title"
                tag="div"
            >
                funfuns
            </Text>
        </CapaWrapper>
    )
}