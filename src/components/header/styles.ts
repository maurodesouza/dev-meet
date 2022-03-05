import styled, { css } from 'styled-components/native'
import { Feather } from "@expo/vector-icons";

import { Text } from '../../components'

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
    align-items: center;
    flex-direction: row;
    padding: ${theme.spacings.xxsmall}px;
    flex-shrink: 0;
  `}
`

export const Label = styled(Text).attrs(() => ({
  size: 'xsmall',
  color: 'gray300',
}))`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall / 2}px;
  `}
`

export const Icon = styled(Feather).attrs(({ theme }) => ({
  color: theme.colors.gray300,
  size: theme.spacings.small
}))``

