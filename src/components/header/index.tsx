import { useNavigation } from '@react-navigation/native'
import { Text } from '../../components'

import * as S from './styles'

type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  const navigation = useNavigation()

  return (
    <S.Container>
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
