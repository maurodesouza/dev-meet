import { Event } from '../../types'
import { Date, Organizer } from '..'

import * as S from './styles'

type EventCardProps = Event

const EventCard = ({ organizador, dataInicio, titulo, descricao }: EventCardProps) => {
  return (
    <S.Container>
      <Date date={dataInicio} />

      <S.Title>{titulo}</S.Title>
      <S.Description numberOfLines={3}>{descricao}</S.Description>

      <S.Footer>
        <Organizer>{organizador}</Organizer>

        <S.DetailButton>
          <S.Arrow>-{'>'}</S.Arrow>
        </S.DetailButton>
      </S.Footer>
    </S.Container>
  )
}

export { EventCard }
