import { useNavigation } from '@react-navigation/native'

import { useFetch } from '../../hooks'
import { Type } from '../../types'

import * as S from './styles'

type EventTypeCardProps = Type

const EventTypeCard = ({ id, text }: EventTypeCardProps) => {
  const navigation = useNavigation()
  const { data } = useFetch()

  const countEvents = () => {
    const founded = data!.events.filter(event => event.tipoId === id)

    return founded.length
  }

  const count = countEvents()

  return (
    <S.Container onPress={() => navigation.navigate('events' as any)}>
      <S.FakeImage />

      <S.Label>{text}</S.Label>

      <S.Events>
        <S.Highlight>
          {count} eventos
        </S.Highlight>
        {' '}
        encontrados
      </S.Events>
    </S.Container>
  )
}

export { EventTypeCard }
