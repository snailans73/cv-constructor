import { image } from "./fakeImage";
import { Summary } from "./userData";

export const fakeData: Summary = {
  image,
  global: {
    name: "Бакыт",
    surname: "Аскаров",
    country: "Кыргызстан",
    position: "Junior FrontEnd Developer",
    relocation: true,
  },
  contacts: [
    { name: "Номер", value: "996550550555" },
    { name: "Telegram", value: "@bakyt_dev" },
    { name: "LinkedIn", value: "@bakyt_dev" },
    { name: "GitHub", value: "bakyt_dev" },
  ],
  language: [
    { name: "Кыргыз тили", level: "Proficiency" },
    { name: "Англис тили", level: "Upper Intermediate" },
  ],
  skills: [
    "React",
    "TypeScript",
    "Redux",
    "MobX",
    "NodeJS",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
  ],
  experience: [
    {
      time: { start: "10/2021", end: "актуалдуу" },
      companyName: "MaxSoft.Kg",
      position: "Junior FrontEnd Developer",
      description:
        "React, TypeScript жана Redux аркылуу жогорку жүктөөчү куралдар тикемесин иштеп чыгуу. TestCafe жана ReactSelector менен автотестирлөө. 15 адамдан турган командада иштөө.",
    },
  ],
  education: [
    {
      time: { start: "09/2020", end: "актуалдуу" },
      name: "КТУ Манас",
      speciality: "Компьютердик Программалоо",
      grade: "Бакалавр",
    },
    {
      time: { start: "03/2020", end: "актуалдуу" },
      name: "EPAM & The Rolling Scopes Courses",
      speciality: "Front-End development with React",
      grade: "Stage 1+",
    },
  ],
};