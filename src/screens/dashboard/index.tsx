import { EventTypeCard } from '../../components'
import { useFetch } from '../../hooks'

import * as S from './styles'

const Dashboard = () => {
  const { data } = useFetch()

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>Que tipo de evento você procura?</S.Header>
        <S.Description>Selecione a categoria que{'\n'}mais te agrada!</S.Description>
      </S.Wrapper>

      <S.Contents>
        <S.WrapperContents>
          {data?.types.map((type) => <EventTypeCard key={type.id} {...type} />)}
        </S.WrapperContents>
      </S.Contents>
    </S.Container>
  )
}

export { Dashboard }
