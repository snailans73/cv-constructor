import React from 'react'
import { observer } from 'mobx-react-lite'

import { PrinterOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import FloatingTriggerButton from '../../../../lib/FloatingTriggerButton'


const Print = observer(() => {
  return (
    <FloatingTriggerButton onClick={() => window.print()}>
      <Tooltip placement='right' title='CV жүктөө'>
        <PrinterOutlined />
      </Tooltip>
    </FloatingTriggerButton>
  )
})

export default Print