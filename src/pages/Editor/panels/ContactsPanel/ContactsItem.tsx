import FloatingTextInput from "../../../../lib/FloatingTextInput"
import InputItemWrapper from "../../../../lib/InputItemWrapper"

interface ContactItemProps {
  name: string
  value: string
  onNameChange: (value: string) => void
  onValueChange: (value: string) => void
  onDelete: () => void
  placeholder: string
}

const ContactItem: React.FC<ContactItemProps> = ({ name, value, onNameChange, onValueChange, onDelete, placeholder }) => {
  return (
    <InputItemWrapper onDelete={onDelete}>
      <FloatingTextInput 
        placeholder={placeholder}
        value={name}
        onChange={onNameChange}
        error={!name.length}
      />
      <FloatingTextInput 
        placeholder={name === 'Phone' ? 'Phone' : 'Link'}
        value={value}
        onChange={onValueChange}
        error={!value.length}
      />
    </InputItemWrapper>
  )
}

export default ContactItem;