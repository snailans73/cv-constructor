import React from 'react'
import styled from 'styled-components';
import { Modal } from 'antd';

interface FloatingModalProps {
  title: string
  width?: number
  open: boolean
  close: () => void
  children?: React.ReactNode
}

const FloatingModal: React.FC<FloatingModalProps> = ({ title, width, open, close, children }) => {
  return (
    <StyledModal
      title={title}
      centered
      open={open}
      onCancel={close}
      footer={null}
      width={width ?? 800}
    >
      {children}
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
    overflow: hidden;
  }
`

export default FloatingModal