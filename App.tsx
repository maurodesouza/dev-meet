import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'

import { theme } from './src/styles'
import { StackNavigation } from './src/navigation'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StackNavigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
