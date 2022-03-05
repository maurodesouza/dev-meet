import styled, { css } from 'styled-components/native'

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export const Container = styled.View``

type WrapperProps = {
  gap?: number
  spacing?: 'large' | 'small'
}

export const Wrapper = styled.View<WrapperProps>`
  ${({ gap = 0, theme, spacing = 'large' }) => css`
    flex-direction: row;
    align-items: center;
    margin-left: ${gap}px;
    margin-bottom: ${theme.spacings[spacing]}px;
  `}
`

export const Separator = styled.View`
  width: 15px;
`

export const Shimmer = styled(ShimmerPlaceholder).attrs(({ theme }) => ({
  shimmerColors: [theme.colors.gray900, theme.colors.gray800, theme.colors.gray800],
}))`
  ${({ theme }) => css`
    border-radius: 10px;
  `}
`
