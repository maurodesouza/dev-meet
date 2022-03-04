import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

import * as S from './styles'

type DateProps = {
  date: string;
}

const Date = ({ date }: DateProps) => {
  const [day, hour] = format(parseISO(date), "dd'/'MMM' - 'H':'mm", {
    locale: pt
  }).split('-')

  return (
    <S.Container>
      <S.Date>{day.toUpperCase()}</S.Date>
      <S.Separator />
      <S.Hour>{hour}</S.Hour>
    </S.Container>
  )
}

export { Date }
