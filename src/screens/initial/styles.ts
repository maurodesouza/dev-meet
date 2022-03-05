import styled, { css } from 'styled-components/native'
import { SvgUri } from "react-native-svg";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 ${theme.spacings.xxlarge}px;
  `}
`

export const Wrapper = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
`
