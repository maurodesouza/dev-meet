import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

import { DateProps } from '.'

type ContainerProps = Pick<DateProps, 'direction'>

const containerodifiers = {
  column: () => css`
    align-items: flex-start;
  `,

  row: () => css`
    align-items: center;
  `
}

export const Container = styled.View<ContainerProps>`
  ${({ direction }) => css`
    flex-direction: ${direction!};
     ${containerodifiers[direction!]}
  `}
`

type SharedProps = Pick<DateProps, 'size'>


export const Date = styled(Text).attrs(({ size }: SharedProps) => ({
  size,
  color: 'primary',
  weight: 'bold',
  family: 'secondary'
}))``

export const Hour = styled(Text).attrs(({ size }: SharedProps) => ({
  size,
  color: 'primary',
  weight: 'medium',
  family: 'secondary'
}))``

export const Separator  = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.bg};
    width: 4px;
    height: 2px;
    margin: 0 ${theme.spacings.xxsmall / 2}px;
  `}
`
