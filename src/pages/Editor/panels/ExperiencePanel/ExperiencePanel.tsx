import { Empty } from "antd"
import { observer } from "mobx-react-lite"
import AddButton from "../../../../lib/AddButton"
import userData from "../../../../store/userData"
import { PanelContentWrapper } from "../../styled-components"
import ExperienceItem from "./ExperienceItem"

const ExperiencePanel = observer(() => {
  return (
    <PanelContentWrapper $gap="25px">
      {userData.experience.map((experience, index) => 
        <ExperienceItem
          key={`experience-${index}`}
          start={experience.time.start}
          end={experience.time.end}
          companyName={experience.companyName}
          position={experience.position}
          description={experience.description}
          onStartChange={value => userData.setExperience(index, 'start', value)}
          onEndChange={value => userData.setExperience(index, 'end', value)}
          onCompanyNameChange={value => userData.setExperience(index, 'companyName', value)}
          onPositionChange={value => userData.setExperience(index, 'position', value)}
          onDescriptionChange={value => userData.setExperience(index, 'description', value)}
          onDelete={() => userData.deleteExperience(index)}
        />
      )}
      {!userData.experience.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <AddButton 
        disabled={userData.experience.length >= 8} 
        title="Кошуу" 
        onClick={() => userData.addExperience()} 
      />
    </PanelContentWrapper>
  )
})

export default ExperiencePanel;