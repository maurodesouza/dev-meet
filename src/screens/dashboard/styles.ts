import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

import { Text } from '../../components'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: ${theme.spacings.xxxlarge}px;
  `}
`

export const Wrapper = styled(Animated.View)`
  ${({ theme }) => css`
    justify-content: center;
    padding: 0 ${theme.spacings.large}px;
  `}
`

export const Header = styled(Text).attrs(() => ({
  size: 'xxxlarge',
  color: 'white',
  weight: 'bold',
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium}px;
  `}
`

export const Description = styled(Text).attrs(() => ({
  size: 'large',
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large}px;
  `}
`

export const Contents = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large -theme.spacings.xxsmall}px;
  `}
`

export const WrapperContents = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Footer = styled(Animated.View)`
  flex-shrink: 0;
  align-items: flex-end;
`
