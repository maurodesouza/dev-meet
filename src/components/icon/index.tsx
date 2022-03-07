import { DefaultTheme, useTheme } from 'styled-components'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type IconProps = TouchableOpacityProps & {
  showLabel?: boolean
  iconColor?: keyof DefaultTheme['colors']
  iconBg?: keyof DefaultTheme['colors']
  iconSize?: number
  icon?: string
  label?: string
}

const Icon = ({
    showLabel = false,
    label = 'Próximo',
    iconBg = 'primary',
    icon = 'arrow-right',
    iconColor = 'white',
    iconSize = 48,
    ...rest
  }: IconProps) => {
  const theme = useTheme()

  return (
    <S.Container {...rest}>
      {showLabel && <S.Label>Próximo</S.Label>}

      <S.Wrapper bg={iconBg} size={iconSize}>
        <S.Icon
          name={icon}
          color={theme.colors[iconColor]}
          size={iconSize / 2}
        />
      </S.Wrapper>
    </S.Container>
  )
}

export { Icon }
