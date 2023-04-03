import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

interface FloatingTextInputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  error?: boolean
  multiline?: boolean
  onPressEnter?: () => void
}

const FloatingTextInput: React.FC<FloatingTextInputProps> = ({ value, onChange, placeholder, error = false, multiline = false, onPressEnter = () => {}}) => {
  if (multiline) {
    return (
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
        $error={error}
        autoSize={{ minRows: 2, maxRows: 8 }}
        spellCheck
        autoFocus
        onPressEnter={onPressEnter}
      />
    )
  }
  return (
    <StyledInput 
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
      $error={error}
      autoFocus
      onPressEnter={onPressEnter}
    />
  );
}

const StyledTextArea = styled(Input.TextArea)<{
  $error: boolean
}>`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  ${({ $error }) => {
    if ($error) return 'border: 1px solid #ff4d4f'
  }};
`

const StyledInput = styled(Input)<{
  $error: boolean
}>`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  ${({ $error }) => {
    if  ($error) return 'border: 1px solid #ff4d4f'
  }};
`

export default FloatingTextInput;