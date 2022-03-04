import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View``

export const Title = styled(Text).attrs(() => ({
  size: 'xxlarge',
  color: 'white',
  weight: 'extra_bold',
}))`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large}px;
    margin-bottom: ${theme.spacings.small}px;
  `}
`

export const Description = styled(Text).attrs(() => ({
  size: 'xsmall',
  color: 'gray400',
  lineHeight: 2,
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large}px;
  `}
`


