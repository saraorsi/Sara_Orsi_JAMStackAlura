import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text'

const SectionTitle = styled.div`
         ${TextStyleVariantsMap.subTitle}
         text-transform: uppercase;
         margin-bottom: 1.75rem;
         text-shadow: .1em .1em .2em ${({ theme }) => theme.colors.primary.main. contrastText};
`



export default function sectionTitle({ children }) {
    return (
        <SectionTitle>
            {children}
        </SectionTitle>
    )
}