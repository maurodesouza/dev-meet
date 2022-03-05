import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.spacings.large}px;
  `}
`

export const Title = styled(Text).attrs(() => ({
  size: 'xxxlarge',
  color: 'white',
  weight: 'bold',
}))``

export const Description = styled(Text).attrs(() => ({
  size: 'medium',
}))`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small}px;
    margin-bottom: ${theme.spacings.large}px;
  `}
`

export const Contents = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false
}))`
  width: 100%;
  height: 100%;
`

export const Label = styled(Text).attrs(() => ({
  size: 'xsmall',
  weight: 'medium',
  color: 'gray300',
}))`
  ${({ theme }) => css`
    text-align: center;
    margin-left: ${theme.spacings.xxsmall / 2}px;
    padding-bottom: ${theme.spacings.large}px;
  `}
`
