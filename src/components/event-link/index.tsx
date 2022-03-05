import * as S from './styles'
import { Event } from '../../types'

type EventLinkProps = Pick<Event, 'link'>

const EventLink = ({ link }: EventLinkProps) => {
  return (
    <S.Container>
      <S.Label>Link do evento</S.Label>

      <S.Wrapper>
        <S.Link>{link}</S.Link>

        <S.Actions></S.Actions>
      </S.Wrapper>
    </S.Container>
  )
}

export { EventLink }
