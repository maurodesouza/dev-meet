import styled, { css, DefaultTheme } from 'styled-components/native'
import { Text } from '../text'

type SharedProps = {
  selected: boolean
}

const containerModifiers = {
  selected: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
}

export const Container = styled.TouchableOpacity<SharedProps>`
  ${({ theme, selected }) => css`
    flex: 1;
    flex-basis: 45%;
    background: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall}px;
    aspect-ratio: 0.9;
    padding: ${theme.spacings.xsmall}px;
    padding-right: ${theme.spacings.xsmall - 2}px;
    border-radius: 10px;

    ${selected && containerModifiers.selected(theme)}
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

export const Label = styled(Text).attrs(({ selected }: SharedProps) => ({
  color: selected ? 'white' : 'bg',
  weight: 'medium',
  size: 'small'
}))``


export const Highlight = styled(Text).attrs(({ selected }: SharedProps) => ({
  color: selected ? 'white' : 'primary',
  weight: 'semi_bold',
  size: 'xxsmall'
}))``


export const Events = styled(Text).attrs(({ selected }: SharedProps) => ({
  color: selected ? 'white' : 'primary',
  weight: 'regular',
  size: 'xxsmall'
}))`
  margin-top: auto;
`

