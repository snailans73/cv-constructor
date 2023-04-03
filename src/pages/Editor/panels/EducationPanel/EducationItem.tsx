import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"

interface EducationItemProps {
  start: string
  end: string
  grade: string
  name: string
  speciality: string
  onStartChange: (value: string) => void
  onEndChange: (value: string) => void
  onNameChange: (value: string) => void
  onGradeChange: (value: string) => void
  onSpecialityChange: (value: string) => void
  onDelete: () => void
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  start, 
  end, 
  grade, 
  name, 
  speciality, 
  onStartChange, 
  onEndChange,
  onNameChange,
  onGradeChange,
  onSpecialityChange,
  onDelete
}) => {
  return (
    <InputItemWrapper onDelete={onDelete} multiline>
      <FloatingTextInput 
        placeholder='Башталышы'
        value={start}
        onChange={onStartChange}
        error={!start.length}
      />
      <FloatingTextInput 
        placeholder='Аякташы'
        value={end}
        onChange={onEndChange}
        error={!end.length}
      />
      <FloatingTextInput 
        placeholder='Университет/ Курстун аталышы'
        value={name}
        onChange={onNameChange}
        error={!name.length}
      />
      <FloatingTextInput 
        placeholder='Адистиги'
        value={speciality}
        onChange={onSpecialityChange}
      />
      <FloatingTextInput 
        placeholder='<Орто баа>'
        value={grade}
        onChange={onGradeChange}
      />
    </InputItemWrapper>
  )
}

export default EducationItem;