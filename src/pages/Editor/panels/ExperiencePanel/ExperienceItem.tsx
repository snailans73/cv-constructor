import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"

interface ExperienceItemProps {
  start: string
  end: string
  position: string
  companyName: string
  description: string
  onStartChange: (value: string) => void
  onEndChange: (value: string) => void
  onCompanyNameChange: (value: string) => void
  onPositionChange: (value: string) => void
  onDescriptionChange: (value: string) => void
  onDelete: () => void
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  start, 
  end, 
  position, 
  companyName, 
  description, 
  onStartChange, 
  onEndChange,
  onCompanyNameChange,
  onPositionChange,
  onDescriptionChange,
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
        placeholder='Компаниянын аталышы'
        value={companyName}
        onChange={onCompanyNameChange}
      />
      <FloatingTextInput 
        placeholder='Позиция'
        value={position}
        onChange={onPositionChange}
        error={!position.length}
      />
      <FloatingTextInput 
        placeholder='Иш жана ишмердүүлүк тажрыйбасынын сүрөттөлүшү (2-3 сүйлөм менен)'
        value={description}
        onChange={onDescriptionChange}
        error={!description.length}
        multiline
      />
    </InputItemWrapper>
  )
}

export default ExperienceItem;