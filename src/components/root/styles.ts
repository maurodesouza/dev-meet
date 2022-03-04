import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxxlarge}px;
    background: ${theme.colors.bg};
    height: 100%;
  `}
`
