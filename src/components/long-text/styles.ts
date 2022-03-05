import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled(Text).attrs(() => ({
  size: 'xsmall',
  color: 'gray400',
  lineHeight: 2,
}))``

export const Label = styled(Text).attrs(() => ({
  size: 'xsmall',
  color: 'gray400',
  weight: 'bold',
}))`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall}px;
  `}
`

