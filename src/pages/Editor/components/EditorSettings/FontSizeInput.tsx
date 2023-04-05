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
      stringMode ={true}
      controls={false} 
      onChange={value => 
        editorSettings.setCustomFontSize(value?.toString())
      }
    />
  )
})


export default FontSizeInput