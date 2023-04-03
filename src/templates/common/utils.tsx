import { Contact, GitHub, LinkedIn, Mail, Phone, Telegram } from "./icons";
import { Time } from '../../store/userData';

export function getIconPromContactName(name?: string) {
  name = name?.toLowerCase() || ''

  if (['phone', 'mobile'].includes(name)) return <Phone />
  if (['telegram', 'tg'].includes(name)) return <Telegram />
  if (['linkedin'].includes(name)) return <LinkedIn />
  if (['github', 'git'].includes(name)) return <GitHub />
  if (['mail', 'email'].includes(name)) return <Mail />

  return <Contact />
}

export const formatTime = (time: Time) => {
  return `${time.start}${!!time.start.length && !!time.end.length ? ' - ' : ''}${time.end}`
}


export function formatPhone(phone: string) {
  let result = ''
  if(phone[0] === "+") {
    if (phone.length > 1 && phone[1] === '7') {
      if (phone.length > 2 && phone.length < 6) {
        result = `${phone.slice(0, 2)} (${phone.slice(2, 5)}` 
      } else if (phone.length > 5 && phone.length < 9) {
        result = `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5,8)}` 
      } else if (phone.length > 8 && phone.length < 11 ) {
        result = `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5,8)}-${phone.slice(8, 10)}` 
      } else if (phone.length > 10 && phone.length < 13) {
        result = `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5,8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}` 
      } else {
        result = phone
      }
    } else {
      result = phone
    }
  } else {
    const addPlus = phone[0] === '7'
    const addEight = phone[0] === '9'
    if (phone.length > 1 && phone.length < 5) {
      result = `${phone.slice(0, 1)} (${phone.slice(1, 4)}` 
    } else if (phone.length > 4 && phone.length < 8) {
      result = `${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4,7)}` 
    } else if (phone.length > 7 && phone.length < 10 ) {
      result = `${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4,7)}-${phone.slice(7, 9)}` 
    } else if (phone.length > 9 && phone.length < 12) {
      result = `${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4,7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}` 
    } else {
      result = phone
    }
    if (addPlus) result = '+' + result
    if (addEight) result = '+7 (' + result
  }
  
  return result
}