import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

interface TextInputProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder: string
}

const TextInput: React.FC<TextInputProps> = observer(({ label, value, onChange, placeholder }) => {
  return (
    <StyledInput 
      addonBefore={label}
      value={value}
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder}
      spellCheck={false}
    />
  );
})

const StyledInput = styled(Input)`
  box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  border-radius: 10px;
  .ant-input-group-addon {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 85px;
    text-align: left;
    border: none;
    color: #00000076;
  }
  .ant-input {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
  }
`

export default TextInput;