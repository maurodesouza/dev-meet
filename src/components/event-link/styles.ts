import styled, { css } from 'styled-components/native'
import { Text } from '../text'

export const Container = styled.View`
  width: 100%;
`

export const Label = styled(Text).attrs(() => ({
  color: 'white',
  weight: 'extra_bold',
  size: 'xxlarge'
}))`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.large}px;
  `}
`
export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.gray800};
    padding: ${theme.spacings.small}px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
  `}
`

export const Link = styled(Text).attrs(() => ({
  color: 'white',
  weight: 'semi_bold',
  size: 'medium',
  family: 'secondary',
}))``

export const Actions = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small}px;
    flex-shrink: 0;
  `}
`
