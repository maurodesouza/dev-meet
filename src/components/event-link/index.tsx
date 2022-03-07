import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Icon } from '..'
import { Event } from '../../types'

import { content } from './content'
import * as S from './styles'

type EventLinkProps = Pick<Event, 'link'>

const EventLink = ({ link }: EventLinkProps) => {
  const navigation = useNavigation()
  const [isBellActive, setIsBellActive] = useState(false)

  const handleNavigateToWebView = () => {
    navigation.navigate('webview' as never, { uri: link } as never)
  }

  const bellState = isBellActive ? 'active' : 'desactive'

  return (
    <S.Container>
      <S.Label>Link do evento</S.Label>

      <S.Wrapper>
        <S.Link>{link}</S.Link>

        <S.Actions>
          <S.Action>
            <Icon onPress={() => setIsBellActive(!isBellActive)} {...content.bell[bellState] as unknown} iconSize={30} />
          </S.Action>

          <S.Action>
            <Icon onPress={handleNavigateToWebView} iconBg="secondary" iconSize={30} />
          </S.Action>
        </S.Actions>
      </S.Wrapper>
    </S.Container>
  )
}

export { EventLink }
