import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxlarge}px ${theme.spacings.large}px 0;
    background: ${theme.colors.bg};
    height: 100%;
  `}
`
