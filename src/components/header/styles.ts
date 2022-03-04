import styled, { css } from 'styled-components/native'

type ContainerProps = {
  align: 'flex-start' | 'center'
}

export const Container = styled.View<ContainerProps>`
  ${({ align }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: ${align};
  `}

`

export const Wrapper = styled.View``

export const BackButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall}px;
    flex-shrink: 0;
  `}
`
