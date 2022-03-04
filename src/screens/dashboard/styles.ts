import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
  flex: 1;
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

export const Contents = styled.FlatList`
  flex-shrink: 0;
`
