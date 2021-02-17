import React from 'react'
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
    ;
import { propToStyle } from '../../../theme/utils/propToStyle';


export const TextStyleVariantsMap = {
    title: css`
        font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
        letter-spacing: ${({ theme }) => theme.typographyVariants.title.letterSpacing};
    `,
    subTitle: css`
        font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
        letter-spacing: ${({ theme }) => theme.typographyVariants.subTitle.letterSpacing};
    `,
        title1: css`
        font-size: ${({ theme }) => theme.typographyVariants.title1.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.title1.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.title1.fontWeight};
        letter-spacing: ${({ theme }) => theme.typographyVariants.title1.letterSpacing};
    `,
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    `,
    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    `
}



const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]};
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${propToStyle('margin')}
`;

export function Text({ tag, variant, children, ...props }) {
    return (
        <TextBase
            as={tag}
            variant={variant}
            {...props}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: propTypes.string.isRequired,
    variant: propTypes.string,
    children: propTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}