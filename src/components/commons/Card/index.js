import React from 'react';
import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';

import { propToStyle } from '../../../theme/utils/propToStyle';

const CardWrapper = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    text-align: center;
    padding-bottom: 55%;
    background: #FFF;
    border-top-left-radius: 4rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 4rem;
    border-bottom-left-radius: 1.5rem;
    text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main.color};
    margin-bottom: 2rem;
    transition: all .2s ease-out;
    box-shadow: 0rem 0rem .6rem  ${({ theme }) => theme.colors.primary.main.contrastText};
    &:hover{
        transition: all .2s ease-out;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        div{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            transition: all .2s ease-out;
            filter: blur(0px);
            opacity: 1;
        }
    }
`;

CardWrapper.Image = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: red;
    border-top-left-radius: 4rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 4rem;
    border-bottom-left-radius: 1.5rem;
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundSize')}
    filter: blur(6px);
    opacity: .7;
    transition: all .2s ease-out;
`;

CardWrapper.Date = styled.div`
    position: absolute;
    top: 1.5rem;
    text-align: center;
    width: 100%;
    font-family: Helvetica, sans-serif;
    letter-spacing: .03em;
`;

CardWrapper.Title = styled.div` 
    position: absolute;
    ${TextStyleVariantsMap.title1}
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2.5rem;
`;

CardWrapper.Info = styled.div`
    position: absolute;
    bottom: 1.5rem;
    text-align: center;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    ${TextStyleVariantsMap.paragraph1}
`;

export default function Card({
  date, title, info, image,
}) {
  return (
    <CardWrapper>
      <CardWrapper.Image
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      />
      <CardWrapper.Date>{date}</CardWrapper.Date>
      <CardWrapper.Title>{title}</CardWrapper.Title>
      <CardWrapper.Info>{info}</CardWrapper.Info>
    </CardWrapper>
  );
}
