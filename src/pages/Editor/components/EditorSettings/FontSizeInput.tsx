import React from 'react'
import { InputNumber } from 'antd'
import { observer } from 'mobx-react-lite'
import editorSettings from '../../../../store/editorSettings'

const FontSizeInput = observer(() => {
  return (
    <InputNumber 
      addonBefore='Арип өлчөмү' 
      value={editorSettings.customFontSize} 
      placeholder='Стандарт' 
      stringMode
      controls={false} 
      onChange={_value => 
        editorSettings.setCustomFontSize()
      }
    />
  )
})

export default FontSizeInput