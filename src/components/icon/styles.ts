import styled, { css, DefaultTheme } from 'styled-components/native'
import { Feather } from "@expo/vector-icons";

import { Text } from '..'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Label = styled(Text).attrs(() => ({
  size: 'medium',
  color: 'white',
  weight: 'semi_bold',
}))`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall}px;
  `}
`

type WrapperProps = {
  size: number;
  bg: keyof DefaultTheme['colors'];
}

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, size, bg }) => css`
    background: ${theme.colors[bg]};
    border-radius: 10px;
    height: ${size}px;
    width: ${size}px;
    padding: ${theme.spacings.xxsmall}px;
    align-items: center;
    justify-content: center;
  `}
`

export const Icon = styled(Feather)``

