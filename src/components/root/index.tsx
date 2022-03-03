import { ThemeProvider } from 'styled-components'
import { StatusBar } from '..'

import { theme } from '../../styles'
import { StackNavigation } from '../../navigation'

import * as S from './styles'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <StatusBar />
        <StackNavigation />
      </S.Container>
    </ThemeProvider>
  )
}

export { Root }
