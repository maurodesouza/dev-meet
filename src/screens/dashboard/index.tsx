import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { EventTypeCard, Icon } from '../../components'
import { useFetch } from '../../hooks'

import * as S from './styles'

const Dashboard = () => {
  const { data } = useFetch()
  const navigation = useNavigation()

  const [selected, setSelected] = useState<number>()

  const handleSelect = (id: number) => () => {
    setSelected(state => state === id ? undefined : id)
  }

  const handleGoToEvents = () => {
    navigation.navigate('events' as never, { id: selected } as never)
  }

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
              {...type}
              onPress={handleSelect(type.id)} />
          ))}
        </S.WrapperContents>
      </S.Contents>

      {!!selected && (
        <S.Wrapper>
          <S.Footer>
            <Icon iconBg="secondary" iconSize={40} onPress={handleGoToEvents} showLabel />
          </S.Footer>
        </S.Wrapper>
      )}
    </S.Container>
  )
}

export { Dashboard }
