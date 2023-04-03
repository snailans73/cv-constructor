import React, { useEffect, useMemo, useState } from 'react';
import { Radio, InputNumber } from 'antd';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import editorSettings, { Paddings, PaddingSettingModes } from '../../../../store/editorSettings';


type Mode = 'all' | 'oposite' | 'one'

const PaddingInput = observer(() => {
  const [mode, setMode] = useState<Mode>('one')
  
  useEffect(() => {
    editorSettings.setPadding(5, 'all')
  }, [mode])

  const inputsLayout = useMemo(() => {
    switch (mode) {
      case 'one':
        return (
          <InputNumber
            addonBefore={'Жалпы жак'} 
            value={editorSettings.paddings.top} 
            min={2} 
            max={30} 
            defaultValue={5} 
            controls={false} 
            onChange={value => editorSettings.setPadding( value as number, 'all')}
          />
        )
      case 'oposite':
        return (
          <>
            <InputNumber 
              addonBefore={'өйдө жана төмөн'} 
              value={editorSettings.paddings.top}
              min={2} 
              max={30} 
              defaultValue={5} 
              controls={false} 
              onChange={value => editorSettings.setPadding(value as number, 'topbottom')}
            />
            <InputNumber
              addonBefore={'Оң жана сол'} 
              value={editorSettings.paddings.left}
              max={30} 
              defaultValue={5} 
              controls={false} 
              onChange={value => editorSettings.setPadding(value as number, 'leftright')}
            />
          </>
        )
      case 'all':
        return (
          <>
            {['top', 'right', 'bottom', 'left'].map((name) =>
              <InputNumber 
                key={name}
                addonBefore={name} 
                value={editorSettings.paddings[name.toLowerCase() as keyof Paddings]}
                min={2} 
                max={30} 
                defaultValue={5} 
                controls={false} 
                onChange={value => 
                  editorSettings.setPadding(value as number, name.toLowerCase() as PaddingSettingModes)
                }
              />  
            )}
          </>
        )
      default:
        return null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, editorSettings.paddings])

  return (
    <>
      <Radio.Group onChange={e => setMode(e.target.value)} defaultValue='one'>
        <StyledRadioButton value='one'>Жалпы</StyledRadioButton>
        <StyledRadioButton value='oposite'>Карама-каршы</StyledRadioButton>
        <StyledRadioButton value='all'>Ар-бир жагы</StyledRadioButton>
      </Radio.Group>
      <InputsContainer $mode={mode}>
        {inputsLayout}
      </InputsContainer>
    </>
  );
})


const InputsContainer = styled.div<{
  $mode: Mode
}>`
  display: grid;
  grid-template-columns: ${({ $mode }) => {
    if ($mode === 'one') return '1fr';
    return 'repeat(2, 1fr)';
  }};
  grid-template-rows: auto;
  width: 100%;
  padding-top: 10px;
  gap: 10px;
`

const StyledRadioButton = styled(Radio.Button)`
  border: none;
  
  &.ant-radio-button-wrapper-checked,
  &:first-child {
    border: none;
  }

  &::before {
    content: none !important;
  }
`

export default PaddingInput;