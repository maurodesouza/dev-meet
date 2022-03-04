import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Date = styled(Text).attrs(() => ({
  size: 'medium',
  color: 'primary',
  weight: 'bold',
  family: 'secondary'
}))``

export const Hour = styled(Text).attrs(() => ({
  size: 'medium',
  color: 'primary',
  weight: 'medium',
  family: 'secondary'
}))``

export const Separator  = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.bg};
    width: 4px;
    height: 2px;
    margin: 0 ${theme.spacings.xxsmall / 2}px;
  `}
`
