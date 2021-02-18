import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const CapaWrapper = styled.div`
    position: fixed;
    flex-direction: column;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(${({ theme }) => theme.colors.background.main.color}, ${({ theme }) => theme.colors.background.light.color});
    h1{
        text-shadow: .03em .03em .06em ${({ theme }) => theme.colors.primary.main. contrastText};
    }
    div{
        text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main. contrastText};
    }
`

export default function Capa() {
    return (
        <CapaWrapper>
            <Text
                variant="title"
                tag="h1"
            >
                funfuns
            </Text>
            <Text
                variant="paragraph1"
                tag="div"
                style={{fontFamily:'Arial'}}
            >
                WEB STUDIO
            </Text>
        </CapaWrapper>
    )
}