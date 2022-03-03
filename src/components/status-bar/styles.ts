import styled from 'styled-components/native'
import { StatusBar, Platform } from 'react-native'

export const Container = styled.View`
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
`
