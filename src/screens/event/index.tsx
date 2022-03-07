import { RouteProp, useRoute } from '@react-navigation/core'
import { Date as DateComponent, Header, Organizer, EventLink, LongText, EventStatus } from '../../components';

import { useFetch } from '../../hooks';
import * as S from './styles'

type Params = {
  events: {
    id: string;
  };
};


const Event = () => {
  const { params } = useRoute<RouteProp<Params, 'events'>>()
  const { data } = useFetch()

  const getEvent = () => {
    const finded = data!.events.find(event => event.id === params!.id)!

    return finded
  }

  const getEventStatus = () => {
    const dateStartInMilliseconds = new Date(event.dataInicio).getTime()
    const nowInMilliseconds = new Date().getTime()

    const eventDuration = 1000 * 60 * 30 * 3 // 1h 30m

    const timeWithEventDuration = dateStartInMilliseconds + eventDuration

    const willHappen = nowInMilliseconds < dateStartInMilliseconds
    const alreadyHappened = nowInMilliseconds > timeWithEventDuration

    if (willHappen) return 'will-happen'
    if (alreadyHappened) return 'already-happened'

    return 'is-happening'
  }

  const event = getEvent()
  const status = getEventStatus()

  return (
    <S.Container>
      <Header align="center">
        <DateComponent direction="column" size="xlarge" date={event.dataInicio} />
      </Header>

      <S.Wrapper>
        <S.Title>{event.titulo}</S.Title>
        <LongText>{event.descricao}</LongText>
      </S.Wrapper>

      <Organizer color="white" size="xxsmall" >{event.organizador}</Organizer>
      <S.Wrapper>
        <EventLink link={event.link} />
      </S.Wrapper>

      <TimeToEvent dateStart={event.dataInicio} dateCreated={event.dataPublicacao} />
    </S.Container>
  )
}

export { Event }
