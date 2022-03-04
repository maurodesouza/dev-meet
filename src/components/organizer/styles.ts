import styled from 'styled-components/native'
import { Text } from '../../components'

import { OrganizerCustomProps } from '.'

type ShareProps = Required<OrganizerCustomProps>

export const Container = styled(Text).attrs(({ color, size }: ShareProps) => ({
  size,
  color,
  weight: 'medium',
}))``

export const HighLight = styled(Text).attrs(({ color, size }: ShareProps) => ({
  size,
  color,
  weight: 'bold',
}))``
