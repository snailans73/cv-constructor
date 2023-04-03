import { Empty } from "antd"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import styled from "styled-components"
import AddButton from "../../../lib/AddButton"
import FloatingTextInput from "../../../lib/FloatingTextInput"
import userData from "../../../store/userData"
import { PanelContentWrapper, StyledTag } from "../styled-components"

const KeySkillsPanel = observer(() => {
  const [skillInputValue, setSkillInputValue] = useState<string>('')
  const addSkill = () => {
    userData.addSkill(skillInputValue)
    setSkillInputValue('')
  }

  return (
    <PanelContentWrapper>
      <div>
        {userData.skills.map(skill => 
          <StyledTag key={skill} onClick={() => userData.removeSkill(skill)}>{skill}</StyledTag>
        )}
        {!userData.skills.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </div>
      <PanelContentControls>
        <FloatingTextInput
          placeholder='Skill'
          value={skillInputValue}
          onChange={setSkillInputValue}
          onPressEnter={addSkill}
        />
        <AddButton 
          disabled={userData.skills.length >= 15 || userData.skills.includes(skillInputValue) || skillInputValue.length <= 1} 
          title="Кошуу" 
          onClick={addSkill} 
        />
      </PanelContentControls>
    </PanelContentWrapper>
  )
})

const PanelContentControls = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

export default KeySkillsPanel;