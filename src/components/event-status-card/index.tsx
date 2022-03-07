import { DefaultTheme } from 'styled-components/native'
import * as S from './styles'

type EventStatusCardProps = {
  children: React.ReactNode
  color?: keyof DefaultTheme['colors']
}

const EventStatusCard = ({ children, color = 'secondary' }: EventStatusCardProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Label>{children}</S.Label>
      </S.Wrapper>

      <S.Bar color={color} />
    </S.Container>
  )
}

export { EventStatusCard }
