import { EventTypeCard } from '../../components'
import { useFetch } from '../../hooks'

import { Type } from '../../types'
import * as S from './styles'

const Dashboard = () => {
  const { data } = useFetch()

  return (
    <S.Container>
        <S.Header>Que tipo de evento você procura?</S.Header>
        <S.Description>Selecione a categoria que{'\n'}mais te agrada!</S.Description>

        <S.Contents
          data={data?.types}
          keyExtractor={item => String((item as Type).id)}
          numColumns={2}
          renderItem={({ item  }) => (
            <EventTypeCard {...item as Type} />
          )}
        />
    </S.Container>
  )
}

export { Dashboard }
