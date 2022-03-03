import { useFonts } from 'expo-font'

import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles'

import { StackNavigation } from '../../navigation'
import { StatusBar } from '..'

import { fonts } from './fonts'
import * as S from './styles'

const Root = () => {
  const [fontsLoaded] = useFonts(fonts);

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <S.Container>
        <StatusBar />
        <StackNavigation />
      </S.Container>
    </ThemeProvider>
  ) : null
}

export { Root }
