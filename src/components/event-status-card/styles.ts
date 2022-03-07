import styled, { css, DefaultTheme } from 'styled-components/native'
import { Text } from '..'

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.gray800};
    border-radius: 10px;
    overflow: hidden;
  `}
`

export const Wrapper = styled.View`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall}px ${theme.spacings.small}px ${theme.spacings.small}px
  `}
`

export const Label = styled(Text).attrs(() => ({
  color: 'white',
  weight: 'bold',
  size: 'large'
}))``

type BarProps = {
  color: keyof DefaultTheme['colors']
}

export const Bar = styled.View<BarProps>`
  ${({ theme, color }) => css`
    width: 100%;
    height: 8px;
    position: relative;
    background: ${theme.colors[color]};
  `}
`
