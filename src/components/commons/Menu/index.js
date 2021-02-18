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
        padding: .5rem 1rem;
        border-radius: 2rem;
        a{
            color: ${({ theme }) => theme.colors.primary.main.color};
            text-decoration: none;
        }
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
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )

}