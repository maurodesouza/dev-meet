import { Counter, EventStatusCard } from '..'
import * as S from './styles'

type EventStatusProps = {
  dateStart: string
  dateCreated: string
  onFinishCounter: () => void
  status: 'will-happen' | 'already-happened' | 'is-happening'
}

const EventStatus = ({ status, ...rest }: EventStatusProps) => {

  const renders = {
    'will-happen': () => (
      <>
        <S.Label>Tempo até o evento</S.Label>
        <Counter {...rest} />
      </>
    ),

    'already-happened': () => (<EventStatusCard color="gray">Esse Evento já{'\n'}aconteceu! </EventStatusCard>),
    'is-happening': () => (<EventStatusCard>O Evento já esta{'\n'}rolando! 🎉</EventStatusCard>)
  }

  const Component = renders[status]

  return (
    <S.Container><Component /></S.Container>
  )
}

export { EventStatus }
