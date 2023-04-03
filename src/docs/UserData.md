# Summary
| Field      | Type           | Description                   | Example                        |
|------------|----------------|-------------------------------|--------------------------------|
| image      | string \| null | base64 image string           | data:image/jpeg;base64,/9j/... |
| global     | GlobalInfo     | -                             | -                              |
| contacts   | Contacts[]     | Contacts, which user defined  | -                              |
| language   | Language[]     | Languages, which user defined | -                              |
| skills     | string[]       | User's key skills             | [JavaScript, CSS, HTML, React] |
| experience | Experience[]   | User work experience          | -                              |
| education  | Education[]    | User education history        | -                              |

### GlobalInfo
| Field      | Type    | Description                    | Example                  |
|------------|---------|--------------------------------|--------------------------|
| name       | string  | User's name                    | Ivan                     |
| surname    | string  | User's surname                 | Ivanov                   | 
| country    | string  | Country, where user live       | Russian Federation       |
| relocation | boolean | Is person ready for relocation | true                     |
| position   | string  | Requested position             | Junior Software Engineer |

### Language
| Field | Type                                                                                                | Description    | Example      |
|-------|-----------------------------------------------------------------------------------------------------|----------------|--------------|
| name  | string                                                                                              | Language name  | English      |
| level | "Beginner" \| "Elementary" \| "Intermediate" \| "Upper Intermediate" \| "Advanced" \| "Proficiency" | Language level | Intermediate |

### Contact
| Field | Type   | Description          | Example                           |
|-------|--------|----------------------|-----------------------------------|
| name  | string | Contact type name    | Telegram                          |
| value | string | Link or phone number | 81234567890 or https://google.com |

### Experience 
| Field        | Type   | Description                                      | Example                              |
|--------------|--------|--------------------------------------------------|--------------------------------------|
| time         | Time   | -                                                | -                                    |
| companyName? | string | -                                                | Google                               |
| position     | string | Position held                                    | Junior Software Engineer             |
| description  | string | Work and activity description (in 2-3 sentences) | Do some tasks and do some activities |

### Education
| Field       | Type   | Description                 | Example                   |
|-------------|--------|-----------------------------|---------------------------|
| time        | Time   | -                           | -                         |
| name        | string | Name of Course / University | Voronezh State University |
| speciality? | string | -                           | Computer Science          |
| grade?      | string | -                           | Bachelor                  |

### Time
| Field | Type   | Description              | Example            |
|-------|--------|--------------------------|--------------------|
| start | string | Month/Year of start date | 01/2021            |
| end   | string | -                        | 09/2022 or Present |