import React from 'react'
import styled from 'styled-components'
import { getIconPromContactName } from '../utils'

interface IconProps {
  size?: number
  name?: string
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  return (
    <IconWrapper $size={size}>{getIconPromContactName(name)}</IconWrapper>
  )
}

const IconWrapper = styled.span<{
  $size?: number
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => $size ?? 16}px;
  height: ${({ $size }) => $size ?? 16}px;

  > svg {
    width: 100%;
    height: 100%;
  }
`

export default Icon