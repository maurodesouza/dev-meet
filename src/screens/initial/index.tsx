import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Pattern } from "../../components";
import { useFetch } from "../../hooks";

import Logo from '../../assets/logo.svg'
import * as S from './styles'

const Initial = () => {
  const navigation = useNavigation()
  const { isLoading } = useFetch()

  const [isWaiting, setIsWaiting] = useState(true)

  const canProceed = () => {
    if (isLoading || isWaiting) return;

    navigation.navigate('greating' as never)
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

      <Logo />
    </S.Container>
  )
}

export { Initial }
