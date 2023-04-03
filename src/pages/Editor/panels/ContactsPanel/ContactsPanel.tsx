import { Empty } from "antd"
import { observer } from "mobx-react-lite"
import AddButton from "../../../../lib/AddButton"
import userData from "../../../../store/userData"
import { PanelContentWrapper } from "../../styled-components"
import ContactItem from "./ContactsItem"

const ContactsPanel = observer(() => {
  const contactsPrediction = ['Phone', 'Telegram', 'LinkedIn', 'GitHub', 'Email']
  return (
    <PanelContentWrapper>
      {userData.contacts.map(({ name, value }, index) => 
        <ContactItem
          key={`contact-${index}`}
          name={name}
          value={value}
          onNameChange={newValue => userData.setContactName(index,  newValue)}
          onValueChange={newValue => userData.setContactValue(index, newValue)}
          onDelete={() => userData.removeContact(index)}
          placeholder={contactsPrediction[index % 5]}
        />
      )}
      {!userData.contacts.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <AddButton 
        disabled={userData.contacts.length >= 5} 
        title="Кошуу" 
        onClick={() => userData.addContact(contactsPrediction[userData.contacts.length % 5])} 
      />
    </PanelContentWrapper>
  )
})

export default ContactsPanel;