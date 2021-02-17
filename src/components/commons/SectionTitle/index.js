import styled from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text'

const SectionTitle = styled.div`
         ${TextStyleVariantsMap.subTitle}
         text-transform: uppercase;
         margin-bottom: 1.5rem;
         text-shadow: .05em .05em .1em ${({ theme }) => theme.colors.primary.main. contrastText};
`



export default function sectionTitle({ children }) {
    return (
        <SectionTitle>
            {children}
        </SectionTitle>
    )
}