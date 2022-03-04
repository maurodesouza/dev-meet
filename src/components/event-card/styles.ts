import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
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

export const Organizer = styled(Text).attrs(() => ({
  size: 'xxxsmall',
  color: 'bg',
  weight: 'medium',
}))``

export const HighLight = styled(Text).attrs(() => ({
  size: 'xxxsmall',
  color: 'bg',
  weight: 'bold',
}))``

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`


export const Arrow = styled(Text).attrs(() => ({
  size: 'small',
  color: 'primary',
  weight: 'bold',
}))``





