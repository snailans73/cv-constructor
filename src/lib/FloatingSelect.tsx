import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface FloatingSelectProps {
  defaultValue: string
  onChange: (value: any) => void
  options: string[]
}

const FloatingSelect: React.FC<FloatingSelectProps> = ({ defaultValue, onChange, options }) => {
  return (
    <StyledSelect 
      defaultValue={defaultValue} 
      onChange={onChange}
      dropdownStyle={{ borderRadius: '10px' }}
    >
      {options.map(option => <Select.Option key={option} >{option}</Select.Option>)}
    </StyledSelect>
  );
}

const StyledSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 10px !important;
    border: none !important;
    box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
  }
`

export default FloatingSelect;
