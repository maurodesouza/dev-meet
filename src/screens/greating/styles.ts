import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    padding: 0 ${theme.spacings.xxlarge}px;
  `}
`

export const Wrapper = styled.View`
  align-self: stretch;
`

export const Title = styled(Text).attrs(() => ({
  size: 'xxxlarge',
  color: 'white',
  weight: 'bold',
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium}px;
  `}
`

export const Highlight = styled(Text).attrs(() => ({
  size: 'xxxlarge',
  color: 'primary',
  weight: 'bold',
}))``

export const Description = styled(Text).attrs(() => ({
  size: 'xlarge',
  color: 'gray',
  lineHeight: 2,
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium}px;
  `}
`

export const Highlight2 = styled(Text).attrs(() => ({
  size: 'xlarge',
  color: 'white',
  bg: 'primary',
}))``
