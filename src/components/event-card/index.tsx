import { Event } from '../../types'
import { Date, Icon, Organizer } from '..'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

type EventCardProps = Event

const EventCard = ({ organizador, dataInicio, titulo, descricao, id }: EventCardProps) => {
  const navigation = useNavigation()

  return (
    <S.Container activeOpacity={0.8} onPress={() => navigation.navigate('event' as never, { id } as never)}>
      <Date date={dataInicio} />

      <S.Title>{titulo}</S.Title>
      <S.Description numberOfLines={3}>{descricao}</S.Description>

      <S.Footer>
        <Organizer>{organizador}</Organizer>

        <Icon iconBg="transparent" iconColor="primary" iconSize={28} />
      </S.Footer>
    </S.Container>
  )
}

export { EventCard }
