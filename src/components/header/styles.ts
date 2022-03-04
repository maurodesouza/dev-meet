import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Wrapper = styled.View``

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall}px;
    flex-shrink: 0;
  `}
`
