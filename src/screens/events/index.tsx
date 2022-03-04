import { Header, EventCard } from '../../components'
import { useFetch } from '../../hooks'

import { Event } from '../../types'
import * as S from './styles'

const Events = () => {
  const { data } = useFetch()

  return (
    <S.Container>
      <Header>
        <S.Title>Eventos {'\n'}disponíveis</S.Title>
      </Header>

      <S.Description>
        Selecione o evento desejado.{'\n'}E espere sua data!
      </S.Description>

      <S.Contents
        data={data?.events}
        keyExtractor={item => (item as Event).id}
        renderItem={({ item  }) => (
          <EventCard {...item as Event} />
        )}
      />
    </S.Container>
  )
}

export { Events }
