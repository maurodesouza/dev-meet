import { TouchableOpacityProps } from 'react-native'

import { useFetch } from '../../hooks'
import { Type } from '../../types'

import { icons } from './icons'
import * as S from './styles'

type EventTypeCardProps = Type & TouchableOpacityProps & {
  selected: boolean
}

const EventTypeCard = ({ id, text, icon, selected, ...rest }: EventTypeCardProps) => {
  const { data } = useFetch()

  const countEvents = () => {
    const founded = data!.events.filter(event => event.tipoId === id)

    return founded.length
  }

  const count = countEvents()
  const props = { selected }

  const variant = selected ? 'white' : 'orange'

  return (
    <S.Container activeOpacity={1} {...props} {...rest}>
      {icons[icon][variant]}

      <S.Label {...props} >{text}</S.Label>

      <S.Events {...props} >
        <S.Highlight {...props} >
          {count} eventos
        </S.Highlight>
        {' '}
        encontrados
      </S.Events>
    </S.Container>
  )
}

export { EventTypeCard }
