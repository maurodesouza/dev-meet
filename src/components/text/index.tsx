import { DefaultTheme } from 'styled-components'
import { TextProps as NativeTextProps } from 'react-native'

import * as S from './styles'

type FontFamily = DefaultTheme['font']['family']
type FontSizes = DefaultTheme['font']['sizes']
type FontWeights = FontFamily['primary'] & FontFamily['secondary']

export type CustomProps = {
  color?: keyof DefaultTheme['colors']
  bg?: keyof DefaultTheme['colors']
  family?: keyof FontFamily
  weight?: keyof FontWeights
  size?: keyof FontSizes
  lineHeight?: number
}

type TextProps = NativeTextProps & CustomProps & {
  children: React.ReactNode
}

const DEFAULT_PROPS: Required<CustomProps> = {
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
