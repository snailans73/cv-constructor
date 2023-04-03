import { makeAutoObservable } from "mobx";

export type GlobalInfo = {
  name: string,
  surname: string, 
  country: string,
  relocation: boolean,
  position: string
}

export type LanguageLevel = "Beginner" | "Elementary" | "Intermediate" | "Upper Intermediate" | "Advanced" | "Proficiency"
export type Language = {
  name: string,
  level: LanguageLevel
}

export type Contact = {
  name: string,
  value: string
}

export type Time = {
  start: string
  end: string
}

export type Experience = {
  time: Time
  companyName: string
  position: string
  description: string
}

export type Education = {
  time: Time
  name: string
  speciality: string
  grade: string
}

export type Summary = {
  image: string | null
  global: GlobalInfo
  contacts: Contact[]
  language: Language[]
  skills: string[]
  experience: Experience[]
  education: Education[]
}

class UserData {
  image: string | null = null

  global: GlobalInfo = {
    name: '',
    surname: '', 
    country: '',
    position: '',
    relocation: false
  }

  contacts: Contact[] = []
  language: Language[] = []
  skills: string[] = []
  experience: Experience[] = []
  education: Education[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setNewImage(base64string: string | null) {
    this.image = base64string
  }

  setGlobal(key: keyof GlobalInfo, value: string | boolean) {
    this.global = {
      ...this.global,
      [key]: value
    }
  }

  addContact(name: string) {
    this.contacts = this.contacts.concat([{name, value: ""}])
  }

  removeContact(index: number) {
    this.contacts = this.contacts.filter((_, idx) => index !== idx)
  }

  setContactValue(index: number, value: string) {
    this.contacts = this.contacts.map((val, idx) => {
      if (idx === index) return { ...val, value }
      return val
    })
  }

  setContactName(index: number, name: string) {
    this.contacts = this.contacts.map((val, idx) => {
      if (idx === index) return { ...val, name }
      return val
    })
  }

  addLanguage(name: string) {
    this.language = this.language.concat([{ name, level: "Intermediate" }])
  }

  removeLanguage(index: number) {
    this.language = this.language.filter((_, idx) => index !== idx)
  }

  setLanguageLevel(index: number, level: LanguageLevel) {
    this.language = this.language.map((val, idx) => {
      if (idx === index) return { ...val, level }
      return val
    })
  }

  setLanguageName(index: number, name: string) {
    this.language = this.language.map((val, idx) => {
      if (idx === index) return { ...val, name }
      return val
    })
  }

  addSkill(name: string) {
    this.skills = this.skills.concat(name)
  }

  removeSkill(name: string) {
    this.skills = this.skills.filter((skill) => skill !== name)
  }

  addExperience() {
    this.experience = this.experience.concat({
      time: {
        start: '09/2021',
        end: 'актуалдуу'
      },
      companyName: 'MaxSoft.Kg',
      position: 'Junior FrontEnd Developer',
      description: 'Сиздин жалпы милдеттериңиз кандай?'
    })
  }

  setExperience(index: number, key: Exclude<keyof Experience, 'time'> | 'start' | 'end', value: string) {
    this.experience = this.experience.map((experience, idx) => {
      if (index === idx) {
        if (key !== 'start' && key !== 'end') {
          return {
            ...experience,
            [key]: value
          }
        } else {
          return {
            ...experience,
            time: {
              ...experience.time,
              [key]: value
            }
          }
        }
      }
      return experience
    })
  }

  deleteExperience(index: number) {
    this.experience = this.experience.filter((_, idx) => index !== idx)
  }

  addEducation() {
    this.education = this.education.concat({
      time: {
        start: '09/2020',
        end: 'актуалдуу'
      },
      name: 'КТУ Манас',
      speciality: 'Компьютердик Программало',
      grade: 'Бакалавр'
    })
  }

  setEducation(index: number, key: Exclude<keyof Education, 'time'> | 'start' | 'end', value: string) {
    this.education = this.education.map((education, idx) => {
      if (index === idx) {
        if (key !== 'start' && key !== 'end') {
          return {
            ...education,
            [key]: value
          }
        } else {
          return {
            ...education,
            time: {
              ...education.time,
              [key]: value
            }
          }
        }
      }
      return education
    })
  }

  deleteEducation(index: number) {
    this.education = this.education.filter((_, idx) => index !== idx)
  }

  get summary(): Summary {
    return {
      image: this.image,
      global: this.global,
      contacts: this.contacts,
      language: this.language,
      skills: this.skills,
      experience: this.experience,
      education: this.education
    }
  }

  // converToUrlParams() {
  //   return `&data=${encodeURI(btoa(JSON.stringify(this.summary)))}`
  // }

  // setFromUrlParams(data: string | null) {
  //   if (!data) return;
  //   const parsedData = JSON.parse(decodeURI(atob(data)))

  //   this.image = parsedData.image
  //   this.global = parsedData.global
  //   this.contacts = parsedData.contacts
  //   this.language = parsedData.language
  //   this.skills = parsedData.skills
  //   this.experience = parsedData.experience
  //   this.education = parsedData.education
  // }
} 

export default new UserData();