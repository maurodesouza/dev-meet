import styled, { css } from 'styled-components/native'
import { Text } from '../text'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall}px;
    aspect-ratio: 0.9;
    padding: ${theme.spacings.xsmall}px;
    padding-right: ${theme.spacings.xsmall - 2}px;
    border-radius: 10px;
  `}
`

export const FakeImage = styled.View`
  ${({ theme }) => css`
    width: 37px;
    height: 37px;
    margin-bottom: ${theme.spacings.small}px;
    border-width: 1px;
    border-style: solid;
    border-color: red;
  `}
`

export const Label = styled(Text).attrs(() => ({
  color: 'bg',
  weight: 'medium',
  size: 'small'
}))``


export const Highlight = styled(Text).attrs(() => ({
  color: 'primary',
  weight: 'semi_bold',
  size: 'xxsmall'
}))``


export const Events = styled(Text).attrs(() => ({
  color: 'gray',
  weight: 'regular',
  size: 'xxsmall'
}))`
  margin-top: auto;
`

