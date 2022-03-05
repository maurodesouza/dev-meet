import { DefaultTheme, useTheme } from 'styled-components'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type NextProps = TouchableOpacityProps & {
  showLabel?: boolean
  arrowColor?: keyof DefaultTheme['colors']
  arrowBg?: keyof DefaultTheme['colors']
  iconSize?: number
}

const Next = ({ showLabel = false, arrowBg = 'primary', arrowColor = 'white', iconSize = 48, ...rest }: NextProps) => {
  const theme = useTheme()

  return (
    <S.Container {...rest}>
      {showLabel && <S.Label>Próximo</S.Label>}

      <S.Wrapper bg={arrowBg} size={iconSize}>
        <S.Icon
          name="arrow-right"
          color={theme.colors[arrowColor]}
          size={iconSize / 2}
        />
      </S.Wrapper>
    </S.Container>
  )
}

export { Next }
