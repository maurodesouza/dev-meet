import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.bg};
    flex: 1;
  `}
`
