import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import { TextStyleVariantsMap } from '../../foundation/Text'
import { propToStyle } from '../../../theme/utils/propToStyle'

const CardWrapper = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    text-align: center;
    padding-bottom: 55%;
    background: #FFF;
    border-radius: 1.5rem;
    &:hover{
        div{
            filter: blur(0px);
            opacity: 1;
        }
    }
`

CardWrapper.Image = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
    border-radius: 1.5rem;
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}
    filter: blur(10px);
    opacity: .7;
`

CardWrapper.Date = styled.div`
    position: absolute;
    top: 1.5rem;
    text-align: center;
    width: 100%;
`

CardWrapper.Title = styled.div` 
    position: absolute;
    ${TextStyleVariantsMap.title1}
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-shadow: .05em .05em .1em ${({ theme }) => theme.colors.primary.main.color};
`

CardWrapper.Info = styled.div`
    position: absolute;
    bottom: 1.5rem;
    text-align: center;
    width: 100%;
`

export default function Card({ date, title, info, image }) {
    return (
        <CardWrapper>
            <CardWrapper.Image  
            backgroundImage={`url(${image})`} 
            backgroundRepeat='no-repeat'
            backgroundPosition='center'
            backgroundSize='cover'
            />
            <CardWrapper.Date>{date}</CardWrapper.Date>
            <CardWrapper.Title>{title}</CardWrapper.Title>
            <CardWrapper.Info>{info}</CardWrapper.Info>
        </CardWrapper>
    )
}