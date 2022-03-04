import { useNavigation } from '@react-navigation/native'
import { Text } from '../../components'

import * as S from './styles'

type HeaderProps = {
  children: React.ReactNode
  align?: 'flex-start' | 'center'
}

const Header = ({ children, align = 'flex-start' }: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <S.Container align={align}>
      <S.Wrapper>
        {children}
      </S.Wrapper>

      <S.BackButton onPress={navigation.goBack}>
        <Text color="gray300">Voltar</Text>
      </S.BackButton>
    </S.Container>
  )
}

export { Header }
