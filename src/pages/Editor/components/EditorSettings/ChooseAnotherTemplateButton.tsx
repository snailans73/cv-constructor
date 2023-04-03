import { SwapOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChooseAnotherTemplateButton: React.FC = () => {
  return (
    <StyledLink to="../../../../templates">
      <SwapOutlined />
      Үлгү галереясы
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 30px;
  gap: 6px;
  color: black;
  border-radius: 10px;
  background-color: #FAFBFC;
  border: none;
  cursor: pointer;
  box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  z-index: 2;
`

export default ChooseAnotherTemplateButton