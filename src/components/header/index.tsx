import { useNavigation } from '@react-navigation/native'

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
        <S.Icon name="arrow-left" />

        <S.Label>Voltar</S.Label>
      </S.BackButton>
    </S.Container>
  )
}

export { Header }
