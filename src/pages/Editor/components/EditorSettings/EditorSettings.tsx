import { CloseCircleOutlined, SettingOutlined } from "@ant-design/icons"
import { Popover, Tooltip, Divider } from "antd"
import { useState } from "react"
import PaddingInput from "./PaddingInput"
import FloatingTriggerButton from "../../../../lib/FloatingTriggerButton"
import styled from "styled-components"
import FontSizeInput from "./FontSizeInput"
import ChooseAnotherTemplateButton from "./ChooseAnotherTemplateButton"

const EditorSettings: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <Popover 
      open={opened} 
      trigger='click' 
      placement='bottomLeft' 
      content={EditorSettingsContent}  
      onOpenChange={visible => setOpened(visible)}
    >
      <FloatingTriggerButton onClick={() => setOpened(!opened)}>
        <Tooltip placement='right' title={`Редактор жөндөөлөрүн ${opened ? 'жабуу' : 'ачуу'}`}>
          {opened ? <CloseCircleOutlined /> : <SettingOutlined />}
        </Tooltip>
      </FloatingTriggerButton>
    </Popover>
  )
}

const EditorSettingsContent = () => {
  return (
    <StyledContent>
      <Divider orientation="left" orientationMargin={0}>Чегинүүлөр</Divider>
      <PaddingInput />
      <Divider orientation="left" orientationMargin={0}>Арип өлчөмү</Divider>
      <FontSizeInput />
      <Divider orientation="left" orientationMargin={0}>Башка шаблонду тандоо</Divider>
      <ChooseAnotherTemplateButton />
    </StyledContent>
  )
}

const StyledContent = styled.div`
  & .ant-input-number-group-wrapper {
    width: 100%;
    
    .ant-input-number-wrapper {
      width: 100%;
      box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.1);
      border-radius: 10px;

      .ant-input-number-group-addon {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 85px;
        text-align: left;
        border: none;
        color: #00000076;
      }

      .ant-input-number {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border: none;
      }
    }
  }
`

export default EditorSettings;