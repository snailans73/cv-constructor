const General = () => (
    <>
      <p><strong>CV-Constructor</strong> — is a service, which offers generalized instruments to create your curriculum vitae by all international rules from template.</p>
      <p>The main idea of the project is to help specialists from all over the world. All templates corresponds to main rules of CV design. There are used many tips and recommendations from IT recruiters to make your CV more readable and attractive.</p>
    </>
  )
  
  const About = () => (
    <>
      <p>The author of this project - Denis Putnov, Junior Software Engineer</p>
      Stack of this project:
      <ul>
        <li>React + TypeScript</li>
        <li>MobX</li>
        <li>Ant Design</li>
        <li>Styled Components</li>
      </ul>
      It's just a serverless web application which can't manipulate with your personal information remotely. All your data used only locally! 
    </>
  )
  
  
  export const infoContent = {
    "General": <General />,
    "About": <About />
  }