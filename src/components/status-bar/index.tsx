import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as S from './styles'

const StatusBar = () => {
  return (
    <S.Container>
      <ExpoStatusBar style="light"  />
    </S.Container>
  )
}

export { StatusBar }
