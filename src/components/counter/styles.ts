import styled, { css } from 'styled-components/native'
import { Text } from '../text'

export const Container = styled.View`
  width: 100%;
`

export const Counter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`


export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Time = styled(Text).attrs(() => ({
  color: 'white',
  weight: 'bold',
  size: 'xxxxlarge',
  family: 'secondary',
}))``

export const Label = styled(Text).attrs(() => ({
  color: 'gray400',
  weight: 'semi_bold',
  size: 'xxsmall'
}))`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall / 2}px;
  `}
`

export const ProgressBar = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 8px;
    border-radius: 6px;
    position: relative;
    background: ${theme.colors.gray800};
  `}
`

type ProgressProps = {
  progress: number
}

export const Progress = styled.View<ProgressProps>`
  ${({ theme, progress }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: ${progress}%;
    max-width: 100%;
    border-radius: 6px;
    background: ${theme.colors.primary};
  `}
`
