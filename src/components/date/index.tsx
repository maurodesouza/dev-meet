import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

import * as S from './styles'

export type DateProps = {
  date: string;
  direction?: 'row' | 'column';
  size ?: 'medium' | 'xlarge';
}

const Date = ({ date, direction = 'row', size = 'medium' }: DateProps) => {
  const [day, hour] = format(parseISO(date), "dd'/'MMM'-'H':'mm", {
    locale: pt
  }).split('-')

  const canShowSeparator = direction === 'row';

  return (
    <S.Container direction={direction}>
      <S.Date size={size}>{day.toUpperCase()}</S.Date>
      {canShowSeparator && <S.Separator />}
      <S.Hour size={size}>{hour}</S.Hour>
    </S.Container>
  )
}

export { Date }
