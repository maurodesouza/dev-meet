import styled, { css } from 'styled-components/native'
import { TextProps } from '.'

type ContainerProps = Required<Omit<TextProps, 'children'>>

export const Container = styled.Text<ContainerProps>`
  ${({ theme, color, family, weight, size, bg, lineHeight }) => css`
    flex: 1;
    color: ${theme.colors[color]};
    background: ${theme.colors[bg]};
    font-family: ${(theme.font.family as any)[family][weight]};
    font-size: ${theme.font.sizes[size]}px;
    line-height: ${theme.font.sizes[size] * lineHeight}px;
  `}
`
