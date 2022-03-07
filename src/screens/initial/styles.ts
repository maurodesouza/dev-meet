import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: ${theme.spacings.xxxlarge}px ${theme.spacings.xxlarge}px 0;
  `}
`

export const Wrapper = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
`

export const Image = styled.Image``
