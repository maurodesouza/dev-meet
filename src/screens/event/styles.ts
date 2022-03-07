import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.large}px;
  `}
`

export const Title = styled(Text).attrs(() => ({
  size: 'xxlarge',
  color: 'white',
  weight: 'extra_bold',
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small}px;
  `}
`

export const OrganizerWrapper = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large}px;
    margin-bottom: ${theme.spacings.xlarge}px;
  `}
`

export const EventLinkWrapper = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium}px;
  `}
`

export const Scrollable = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large}px;
    margin-bottom: ${theme.spacings.small}px;
  `}
`

export const Footer = styled.View``

