import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex: 1;
    flex-shrink: 0;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small}px;
    margin-bottom: ${theme.spacings.large}px;
    border-radius: 10px;
 `}
`

export const Title = styled(Text).attrs(() => ({
  size: 'large',
  color: 'bg',
  weight: 'extra_bold',
}))``

export const Description = styled(Text).attrs(() => ({
  size: 'xxsmall',
  color: 'gray',
  weight: 'regular',
}))`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall}px;
    margin-bottom: ${theme.spacings.small}px;
 `}
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
