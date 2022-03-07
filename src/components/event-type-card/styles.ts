import styled, { css, DefaultTheme } from 'styled-components/native'
import Animated from 'react-native-reanimated'

import { Text } from '../text'

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
    flex-basis: 45%;
    margin: ${theme.spacings.xxsmall}px;
    aspect-ratio: 0.9;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  `}
`

export const Wrapper = styled(Animated.View)`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xsmall}px;
    padding-right: ${theme.spacings.xsmall - 2}px;
  `}
`

export const Overlay = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`


export const Background = styled(Animated.View)`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  `}
`

export const Label = styled(Text).attrs(() => ({
  weight: 'medium',
  size: 'small'
}))`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium}px;
  `}
`

export const Highlight = styled(Text).attrs(() => ({
  weight: 'semi_bold',
  size: 'xxsmall'
}))``

export const Events = styled(Text).attrs(() => ({
  weight: 'regular',
  size: 'xxsmall'
}))`
  margin-top: auto;
`

