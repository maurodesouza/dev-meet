import { useEffect, useState } from "react";

import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { useFetch } from "../../hooks";
import { getCdnImage } from "../../utils";

import * as S from './styles'
import { Pattern } from "../../components";

const Initial = () => {
  const navigation = useNavigation()
  const { isLoading } = useFetch()

  const [isWaiting, setIsWaiting] = useState(true)

  const canProceed = () => {
    if (isLoading || isWaiting) return;

    navigation.navigate('dashboard' as never)
  }

  useEffect(() => {
    setTimeout(() => setIsWaiting(false), 5000)
  }, [])

  useEffect(() => {
    canProceed()
  }, [isLoading, isWaiting])

  return (
    <S.Container>
      <S.Wrapper>
        <Pattern />
      </S.Wrapper>

      <SvgUri uri={getCdnImage('logo')} />
    </S.Container>
  )
}

export { Initial }
