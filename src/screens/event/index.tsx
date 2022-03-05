import { RouteProp, useRoute } from '@react-navigation/core'
import { Date, Header, Organizer, EventLink, LongText } from '../../components';

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

  const event = getEvent()

  return (
    <S.Container>
      <Header align="center">
        <Date direction="column" size="xlarge" date={event.dataInicio} />
      </Header>

      <S.Wrapper>
        <S.Title>{event.titulo}</S.Title>
        <LongText>{event.descricao}</LongText>
      </S.Wrapper>

      <Organizer color="white" size="xxsmall" >{event.organizador}</Organizer>
      <S.Wrapper>
        <EventLink link={event.link} />
      </S.Wrapper>
    </S.Container>
  )
}

export { Event }
