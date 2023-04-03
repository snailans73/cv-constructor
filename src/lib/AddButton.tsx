import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface AddButtonProps {
  title: string
  onClick: () => void
  disabled?: boolean
}
const AddButton: React.FC<AddButtonProps> = ({title, onClick, disabled=false}) => {
  return (
    <StyledButton 
      ghost 
      disabled={disabled}
      icon={<PlusOutlined />}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  border: none;
  border-radius: 10px;
  width: fit-content;
  box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  margin-left: auto;
  
  &.ant-btn-background-ghost {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.85);
  }
`

export default AddButton;