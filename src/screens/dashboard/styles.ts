import styled, { css } from 'styled-components/native'
import { Text } from '../../components'

export const Container = styled.View`
    flex: 1;
`

export const Wrapper = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large}px;
  `}
`

export const Header = styled(Text).attrs(() => ({
  size: 'xxxlarge',
  color: 'white',
  weight: 'bold',
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium}px;
  `}
`

export const Description = styled(Text).attrs(() => ({
  size: 'large',
}))`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large}px;
  `}
`

export const Contents = styled.ScrollView`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 0 ${theme.spacings.large -theme.spacings.xxsmall}px;
  `}
`

export const WrapperContents = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
`
