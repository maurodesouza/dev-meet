import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

import { CustomProps } from '.'

type ContainerProps = Required<CustomProps>

export const Container = styled(Animated.Text)<ContainerProps>`
  ${({ theme, color, family, weight, size, bg, lineHeight }) => css`
    color: ${theme.colors[color]};
    background: ${theme.colors[bg]};
    font-family: ${(theme.font.family as any)[family][weight]};
    font-size: ${theme.font.sizes[size]}px;
    line-height: ${theme.font.sizes[size] * lineHeight}px;
  `}
`
