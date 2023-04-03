import { InfoCircleOutlined } from '@ant-design/icons'
import { Radio, Typography } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'

const UnsupportedResolution = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('en')

  const unsupportedMessage = {
    ru: "Кечиресиз, түзмөгүңүздүн чечилиши учурда колдоого алынбайт. Сураныч, жеке компьютериңиздин же ноутбукуңуздун кең экранын колдонуп көрүңүз. Сиз бул кызматка шилтемени сактап, кийинчерээк көрүүгө кайтсаңыз болот.",
    en: "Unfortunately, the resolution of your device is not supported at this moment. Please try using the widescreen of your personal computer or laptop. You can save a link to this service and return to view it later."
  }

  const options = [
    { label: 'RU', value: 'ru' },
    { label: 'EN', value: 'en' }
  ]

  return (
    <Background $horizontal={window.innerHeight < window.innerWidth}>
      <InfoCircleOutlined />
      <Typography.Text type='secondary'>{unsupportedMessage[language]}</Typography.Text>
      <LanguageSelectorWrapper>
      <Radio.Group
        options={options}
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
        optionType="button"
        buttonStyle="solid"
      />
      </LanguageSelectorWrapper>
    </Background>
  )
}

const LanguageSelectorWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Background = styled.div<{
  $horizontal: boolean
}>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ $horizontal }) => $horizontal ? 'row' : 'column'};
  align-items: center;
  padding: max(10vmax, 20px);
  text-align: center;
  font-size: calc(16px + 12 * ((100vw - 320px) / (1280 - 320)));
  gap: 20px;
  width: 100vw;
  height: 100vh;
`

export default UnsupportedResolution