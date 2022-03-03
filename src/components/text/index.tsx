import { DefaultTheme } from 'styled-components'
import * as S from './styles'

type FontFamily = DefaultTheme['font']['family']
type FontSizes = DefaultTheme['font']['sizes']
type FontWeights = FontFamily['primary'] & FontFamily['secondary']

export type TextProps = {
  children: React.ReactNode
  color?: keyof DefaultTheme['colors']
  bg?: keyof DefaultTheme['colors']
  family?: keyof FontFamily
  weight?: keyof FontWeights
  size?: keyof FontSizes
  lineHeight?: number
}

const DEFAULT_PROPS: Required<Omit<TextProps, 'children'>> = {
  color: 'gray',
  family: 'primary',
  weight: 'regular',
  size: 'medium',
  bg: 'transparent',
  lineHeight: 1.5
}

const Text = ({ children, ...rest }: TextProps) => {
  return (
    <S.Container

      {...DEFAULT_PROPS}
      {...rest}
    >
      {children}
    </S.Container>
  )
}

export { Text }
