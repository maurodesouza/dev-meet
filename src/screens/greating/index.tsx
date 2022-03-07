import { useNavigation } from "@react-navigation/native";

import GratingHero from '../../assets/greating-hero.svg'
import { Icon } from "../../components";

import * as S from './styles'

const Greating = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          Olá, Dev{' '}
          <S.Highlight>!</S.Highlight>
        </S.Title>

        <S.Description>
          Encontre o seu{'\n'}
          <S.Highlight2>próximo</S.Highlight2>{' '}
          evento de{'\n'}programação!
        </S.Description>
      </S.Wrapper>

      <GratingHero />

      <Icon onPress={() => navigation.navigate('dashboard' as never)} />
    </S.Container>
  )
}

export { Greating }
