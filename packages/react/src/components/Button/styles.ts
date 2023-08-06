import styled from 'styled-components'
import { colors } from '@nebula-ui/tokens'

interface ButtonsContainerProps {
  bgColor: string;
}

export const variantToColors = {
  primary: {
    bgColor: colors.nebula300
  },
  secondary: {
    bgColor: colors.nebula500
  },
  tertiary: {
    bgColor: colors.nebula700
  }
}

export const ButtonContainer = styled.button<ButtonsContainerProps>`
  width: 100%;
  height: 40px;
  border: none;
  background: ${props => props.bgColor};
  color: white;
`