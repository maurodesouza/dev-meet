import { Counter } from '..'
import * as S from './styles'

type TimeToEventProps = {
  dateStart: string
  dateCreated: string
}

const TimeToEvent = ({ dateStart, dateCreated }: TimeToEventProps) => {

  return (
    <S.Container>
      <S.Label>Tempo até o evento</S.Label>

      <Counter dateStart={dateStart} dateCreated={dateCreated} />
    </S.Container>
  )
}

export { TimeToEvent }
