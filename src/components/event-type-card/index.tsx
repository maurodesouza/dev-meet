import { useEffect } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { useSharedValue, interpolateColor, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useTheme } from 'styled-components'

import { useFetch } from '../../hooks'
import { Type } from '../../types'

import { icons } from './icons'
import * as S from './styles'

type EventTypeCardProps = Type & TouchableOpacityProps & {
  selected: boolean
  hasSomeSelected: boolean
}

const EventTypeCard = ({ id, text, icon, selected, hasSomeSelected, ...rest }: EventTypeCardProps) => {
  const { data } = useFetch()
  const theme = useTheme()

  const isToApplyOpacity = !!hasSomeSelected
  const colorChangeProgress = useSharedValue(0);

  const countEvents = () => {
    const founded = data!.events.filter(event => event.tipoId === id)

    return founded.length
  }

  const handleIsSelected = () => {
    colorChangeProgress.value = withTiming(
      selected ? 1 : 0,
      {
        duration: 300,
      },
    );
  };

  const overlayAnimations = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(colorChangeProgress.value, [0, 1], [theme.colors.transparent, theme.colors.primary]),
    transform: [
      {
        translateY: -150,
      },
      {
        scale: interpolate(colorChangeProgress.value, [0, 1], [0.5, 3]),
      },
    ],
  }));

  const opacityAnimations = useAnimatedStyle(() => ({
    opacity: interpolate(colorChangeProgress.value, [0, 1], [isToApplyOpacity ? 0.3 : 1, 0.3])
  }));

  const wrapperAnimations = useAnimatedStyle(() => ({
    opacity: interpolate(colorChangeProgress.value, [0, 1], [isToApplyOpacity ? 0.3 : 1, 1])
  }));

  const labelAnimations = useAnimatedStyle(() => ({
    color: interpolateColor(colorChangeProgress.value, [0, 1], [theme.colors.bg, theme.colors.white]),
  }));

  const textsAnimations = useAnimatedStyle(() => ({
    color: interpolateColor(colorChangeProgress.value, [0, 1], [theme.colors.gray, theme.colors.white]),
  }));

  const highlightAnimations = useAnimatedStyle(() => ({
    color: interpolateColor(colorChangeProgress.value, [0, 1], [theme.colors.primary, theme.colors.white]),
  }));

  const count = countEvents()
  const variant = selected ? 'white' : 'orange'

  useEffect(() => {
    handleIsSelected()
  }, [selected])

  return (
    <S.Container activeOpacity={1} {...rest}>
      <S.Background style={opacityAnimations} />
      <S.Overlay style={overlayAnimations} />

      <S.Wrapper style={wrapperAnimations}>
        {icons[icon][variant]}

        <S.Label style={labelAnimations} >{text}</S.Label>

        <S.Events style={textsAnimations} >
          <S.Highlight style={highlightAnimations} >
            {count} eventos
          </S.Highlight>
          {' '}
          encontrados
        </S.Events>
      </S.Wrapper>

    </S.Container>
  )
}

export { EventTypeCard }
