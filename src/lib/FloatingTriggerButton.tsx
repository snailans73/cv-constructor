import React from 'react';
import styled from 'styled-components';

interface FloatingTriggerButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const FloatingTriggerButton: React.FC<FloatingTriggerButtonProps> = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>
    {children}
  </ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  font-size: 22px;
  border-radius: 10px;
  background-color: #FAFBFC;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
  z-index: 2;
`

export default FloatingTriggerButton;