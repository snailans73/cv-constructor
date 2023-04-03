import { DeleteOutlined } from '@ant-design/icons';
import React, { Children, cloneElement } from 'react';
import styled from 'styled-components';

interface InputItemWrapperProps {
  onDelete: () => void
  multiline?: boolean
  children: React.ReactNode
}


const InputItemWrapper: React.FC<InputItemWrapperProps> = ({ children, onDelete, multiline = false }) => {
  if (multiline) {
    return (
      <MultilineInputWrapper>
        <ItemWrapper>
          {Children.map(Children.toArray(children), (child, index) => {
            if (index < 2) {
              return cloneElement((<>{child}</>))
            }
          })}
          <DeleteIconWrapper onClick={onDelete}>
            <DeleteOutlined />
          </DeleteIconWrapper>
        </ItemWrapper>
        {Children.map(Children.toArray(children), (child, index) => {
          if (index >= 2) {
            return cloneElement((<>{child}</>))
          }
        })}
      </MultilineInputWrapper>
    )
  }
  return (
    <ItemWrapper>
      {children}
      <DeleteIconWrapper onClick={onDelete}>
        <DeleteOutlined />
      </DeleteIconWrapper>
    </ItemWrapper>
  );
}

export default InputItemWrapper;

const MultilineInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 24px;
  grid-template-rows: 1fr;
  width: 100%;
  gap: 10px;
`

const DeleteIconWrapper = styled.div`
  font-size: 20px;
  color: #ff4d4f;
  cursor: pointer;
`