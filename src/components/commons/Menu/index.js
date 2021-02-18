import styled, { css } from 'styled-components'
import Link from 'next/link'
import { TextStyleVariantsMap } from '../../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';


const MenuWrapper = styled.div`
    margin-top: 100vh;
    position: sticky;
    top: 0;
    height: 4rem;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
     ${TextStyleVariantsMap.subTitle}
     padding: 3rem;
     text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main.contrastText};
     ${breakpointsMedia({
    xs: css`
                padding: 2rem;
         `,
    md: css`
       padding: 3rem;
        `
})}
`

MenuWrapper.LeftSide = styled.div`
   
`

MenuWrapper.RightSide = styled.div`
    display: flex;
    li{
        margin-left: 1rem;
        border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
        height: 2.5rem;
        line-height: 2.5rem;
        border-radius: 2rem;
        padding: 0 1rem;
        a{
            color: ${({ theme }) => theme.colors.primary.main.color};
            text-decoration: none;
        }
    }
`

MenuWrapper.Switch = styled.span`
        margin-left: 1rem;
        border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
        border-radius: 2rem;
        height: 2.5rem;
        width: 2.5rem;
        line-height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            height: 1.5rem;
            width: auto;
        }
      
`

export default function Menu() {
    const links = [
        {
            texto: 'Work',
            url: '/work'
        },
        {
            texto: 'Contact',
            url: '/contact'
        },
    ]

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                FunFuns
            </MenuWrapper.LeftSide>
            <MenuWrapper.RightSide>
                {links.map(link => {
                    return (
                        <li key={link.url}>
                            <Link href={link.url}>
                                {link.texto}
                            </Link>
                        </li>
                    )
                })}
                <MenuWrapper.Switch>

                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path d="M2 4V2H4V4H2ZM6 6H4V4H6V6ZM8 8H6V6H8V8ZM10 10H8V8H10V10ZM12 10H10V12H12V14H14V16H16V18H14V20H20V14H18V16H16V14H14V12H12V10ZM14 8V10H12V8H14ZM16 6V8H14V6H16ZM16 4V6H18V8H20V2H14V4H16ZM4 18V16H6V18H4ZM4 18V20H2V18H4ZM6 16V14H8V16H6Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d" x="0" y="0" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </MenuWrapper.Switch>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )

}

