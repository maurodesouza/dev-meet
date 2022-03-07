import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: ${theme.spacings.xxxlarge}px;
  `}
`

export const Wrapper = styled.View`
  ${({ theme }) => css`
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
  flex: 1;
`

export const Footer = styled.View`
  ${({ theme }) => css`
    flex-shrink: 0;
    padding: ${theme.spacings.large}px 0;
    align-items: flex-end;
  `}
`
