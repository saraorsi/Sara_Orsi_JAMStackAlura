import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text } from '../../foundation/Text';

const IntroLogo = keyframes`  
  from { transform: scale(0) rotate(0); }
  to { transform: scale(1) rotate(360deg);  }
`;

const IntroTitle = keyframes`  
  from { opacity: 0; }
  to {  opacity: 1;  }
`;

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
        text-shadow: .03em .03em .06em ${({ theme }) => theme.colors.primary.main.contrastText};
            text-shadow: .03em .03em .06em ${({ theme }) => theme.colors.primary.main.contrastText};
            transform: scale(0) rotate(0);
            animation-name: ${IntroLogo};
            animation-delay: .5s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    div{
        text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main.contrastText};
        letter-spacing: .08em;
        opacity: 0;
        animation-name: ${IntroTitle};
        animation-delay: 2s;
        animation-duration: .5s;
        animation-fill-mode: forwards;
    }
`;

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
        style={{ fontFamily: 'Helvetica' }}
      >
        WEB STUDIO
      </Text>
    </CapaWrapper>
  );
}
