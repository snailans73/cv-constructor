import FloatingSelect from "../../../../lib/FloatingSelect"
import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"
import { LanguageLevel } from "../../../../store/userData"

interface LanguageItemProps {
  name: string
  level: LanguageLevel
  onNameChange: (value: string) => void
  onLevelChange: (value: LanguageLevel) => void
  onDelete: () => void
  placeholder: string
}

const LanguageItem: React.FC<LanguageItemProps> = ({ name, onNameChange, level, onLevelChange, onDelete, placeholder }) => {
  const options = [
    "Beginner",
    "Elementary",
    "Intermediate",
    "Upper Intermediate",
    "Advanced",
    "Proficiency"
  ]

  return (
    <InputItemWrapper onDelete={onDelete}>
      <FloatingTextInput 
        placeholder={placeholder}
        value={name} 
        onChange={onNameChange}
        error={!name.length}
      />
      <FloatingSelect 
        defaultValue={level} 
        onChange={(value) => onLevelChange(value as LanguageLevel)} 
        options={options} 
      />
    </InputItemWrapper>
  )
}

export default LanguageItem;