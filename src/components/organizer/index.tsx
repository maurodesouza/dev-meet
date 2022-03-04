import * as S from './styles'

export type OrganizerCustomProps = {
  size?: 'xxxsmall' | 'xxsmall'
  color?: 'white' | 'bg'
}

type OrganizerProps = OrganizerCustomProps & {
  children: React.ReactNode
}

const DEFAULT_PROPS: Required<OrganizerCustomProps> = {
  color: 'bg',
  size: 'xxxsmall',
}

const Organizer = ({ children, ...rest }: OrganizerProps) => {
  const props = {...DEFAULT_PROPS, ...rest}

  return (
    <S.Container {...props}>
      Organizado por:{' '}
      <S.HighLight {...props}>
        {children}
      </S.HighLight>
    </S.Container>
  )
}

export { Organizer }
