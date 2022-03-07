import styled, { css } from 'styled-components/native'
import { Text } from '../text'

export const Container = styled.View``

export const Label = styled(Text).attrs(() => ({
  color: 'white',
  weight: 'semi_bold',
  size: 'medium'
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall}px;
  `}
`
