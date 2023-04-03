import { Empty } from "antd"
import { observer } from "mobx-react-lite"
import AddButton from "../../../../lib/AddButton"
import userData from "../../../../store/userData"
import { PanelContentWrapper } from "../../styled-components"
import EducationItem from "./EducationItem"

const EducationPanel = observer(() => {
  return (
    <PanelContentWrapper $gap="25px">
      {userData.education.map((education, index) => 
        <EducationItem
          key={`education-${index}`}
          start={education.time.start}
          end={education.time.end}
          name={education.name}
          grade={education.grade}
          speciality={education.speciality}
          onStartChange={value => userData.setEducation(index, 'start', value)}
          onEndChange={value => userData.setEducation(index, 'end', value)}
          onNameChange={value => userData.setEducation(index, 'name', value)}
          onGradeChange={value => userData.setEducation(index, 'grade', value)}
          onSpecialityChange={value => userData.setEducation(index, 'speciality', value)}
          onDelete={() => userData.deleteEducation(index)}
        />
      )}
      {!userData.education.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <AddButton 
        disabled={userData.education.length >= 5} 
        title="Кошуу" 
        onClick={() => userData.addEducation()} 
      />
    </PanelContentWrapper>
  )
})

export default EducationPanel;