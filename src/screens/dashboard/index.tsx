import { useState } from 'react'

import { useSharedValue, useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

import { EventTypeCard, Icon } from '../../components'
import { useFetch } from '../../hooks'

import * as S from './styles'

const Dashboard = () => {
  const { data } = useFetch()
  const navigation = useNavigation()

  const [selected, setSelected] = useState<number>()

  const handleSelect = (id: number) => () => {
    const newState = selected === id ? undefined : id

    if (!newState) closeFooter()
    if (!selected) openFooter()

    setSelected(newState)
  }

  const handleGoToEvents = () => {
    navigation.navigate('events' as never, { id: selected } as never)
  }

  const footerHeight = useSharedValue(0);

  const openFooter = () => {
    footerHeight.value = withTiming(
      100,
      {
        duration: 250,
      },
    );
  };

  const closeFooter = () => {
    footerHeight.value = withTiming(
      0,
      {
        duration: 250,
      },
    );
  };

  const footerAnimations = useAnimatedStyle(() => ({
    height: footerHeight.value,
    opacity: interpolate(footerHeight.value, [0, 60, 100], [0, 0, 1]),
  }));

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>Que tipo de evento você procura?</S.Header>
        <S.Description>Selecione a categoria que{'\n'}mais te agrada!</S.Description>
      </S.Wrapper>

      <S.Contents>
        <S.WrapperContents>
          {data?.types.map((type) => (
            <EventTypeCard
              key={type.id}
              selected={selected === type.id}
              hasSomeSelected={!!selected}
              {...type}
              onPress={handleSelect(type.id)} />
          ))}
        </S.WrapperContents>
      </S.Contents>

      <S.Wrapper style={footerAnimations}>
        <S.Footer>
          <Icon iconBg="secondary" iconSize={40} onPress={handleGoToEvents} showLabel />
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  )
}

export { Dashboard }
