import { useRoute, RouteProp } from '@react-navigation/native'

import { Header, EventCard } from '../../components'
import { useFetch } from '../../hooks'

import { Event } from '../../types'
import * as S from './styles'

type Params = {
  events: {
    id: number;
  };
};

const Events = () => {
  const { params } = useRoute<RouteProp<Params, 'events'>>()
  const { data } = useFetch()

  const getSelectedEvents = () => {
    const finded = data!.events.filter(event => event.tipoId === params!.id)

    return finded
  }

  const findedEvents = getSelectedEvents()

  return (
    <S.Container>
      <Header>
        <S.Title>Eventos {'\n'}disponíveis</S.Title>
      </Header>

      <S.Description>
        Selecione o evento desejado.{'\n'}E espere sua data!
      </S.Description>

      <S.Contents
        data={findedEvents}
        keyExtractor={item => (item as Event).id}
        renderItem={({ item  }) => (
          <EventCard {...item as Event} />
        )}
      />
    </S.Container>
  )
}

export { Events }
