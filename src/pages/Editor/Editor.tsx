import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { StyledCollapse } from './styled-components';

import { Layout, Collapse } from 'antd';

import { Link, useSearchParams } from 'react-router-dom';

import ImageUploader from '../../components/ImageUploader/ImageUploader';
import EditorSettings from './components/EditorSettings/EditorSettings';
import SiderTrigger from './components/side-buttons/SliderTrigger';
import Print from './components/side-buttons/Print';
import Save from './components/side-buttons/Save';
import Info from './components/side-buttons/Info/Info';

import ContactsPanel from './panels/ContactsPanel/ContactsPanel';
import GlobalInfoPanel from './panels/GlobalInfoPanel';
import KeySkillsPanel from './panels/KeySkillsPanel';
import ExperiencePanel from './panels/ExperiencePanel/ExperiencePanel';
import EducationPanel from './panels/EducationPanel/EducationPanel';
import LanguagePanel from './panels/LanguagePanel/LanguagePanel';

import Drawer from '../../components/Drawer/Drawer'; 

import { ErrorBoundary } from 'react-error-boundary';

const { Sider, Content } = Layout;

const { Panel } = Collapse;

// let Editor:
//  () => JSX.Element

const Editor = () => { 
  const [searchParams, setSearchParams] = useSearchParams();

  const [collapsed, setCollapsed] = useState<boolean>(searchParams.get('editorCollapsed') === 'true' ? true : false)

  useEffect(() => {
    setSearchParams({ editorCollapsed: collapsed.toString() })
  }, [collapsed, setSearchParams])

  const DrawerFallbackComponent = () => {
    return (
      <DrawerFallbackContainer>
        <div>Something went wrong</div>
        <Link to="/classic" reloadDocument>Choose Default Template</Link>
      </DrawerFallbackContainer>
    )
  }

  return (
    <EditorLayout>
      <EditorSider
        trigger={null}
        collapsed={collapsed}
        width="max(30vw, 400px)"
        collapsedWidth={0}
        collapsible
      >
        <ImageUploader />
        <StyledCollapse expandIconPosition='right' ghost defaultActiveKey={[1,2,3,4,5,6]}>
          <Panel key="1" header="Жалпы маалымат">
            <GlobalInfoPanel />
          </Panel>
          <Panel key="2" header="Байланыш">
            <ContactsPanel />
          </Panel>
          <Panel key="3" header="Билген тилдериңиз">
            <LanguagePanel />
          </Panel>
          <Panel key="4" header="Skills">
            <KeySkillsPanel />
          </Panel>
          <Panel key="5" header="Иш тажрыйбасы">
            <ExperiencePanel />
          </Panel>
          <Panel key="6" header="Билими">
            <EducationPanel />
          </Panel>
        </StyledCollapse>
      </EditorSider>
      <EditorContent>
        <EditorFloatingButtons $spaceFrom={3}>
          <SiderTrigger collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
          <EditorSettings />
          <Save />
          <Print />
        </EditorFloatingButtons>
        <EditorFloatingButtons $right $spaceFrom={1}>
          <Info />
        </EditorFloatingButtons>
        <ErrorBoundary FallbackComponent={DrawerFallbackComponent}>
          <Drawer />
        </ErrorBoundary>
      </EditorContent>
    </EditorLayout>
  );
}

const DrawerFallbackContainer = styled.div`
  width: 30vw;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
  background-color: #fff;
  border-radius: 20px;
  justify-content: center;
  > div {
    font-size: 24px;
  }
`

const EditorLayout = styled(Layout)`
  height: 100vh;
`

const EditorFloatingButtons = styled.div<{
  $right?: boolean
  $spaceFrom?: number
}>`
  position: absolute;
  display: flex;
  top: 10px;
  bottom: 10px;
  ${({ $right }) => $right ? 'right: 10px' : 'left: 10px'};
  gap: 10px;
  flex-direction: column;
  z-index: 10;

  > *:nth-child(${({ $spaceFrom }) => $spaceFrom ?? 1000}) {
    margin-top: auto;
  }
`

const EditorSider = styled(Sider)`
  position: relative;
  height: 100vh;
  background-color: #FAFBFC;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
  overflow-y: overlay;
  overflow-x: visible;
  
  & > *:last-child {
    margin-bottom: 20vh;
  } 

  &:not(.ant-layout-sider-collapsed) {
    padding: 20px;
  }
`

const EditorContent = styled(Content)`
  position: relative;
  display: flex;
  padding: 5vh;
  height: 100vh;
  background-color: #E2E5E8;
  text-align: center;
  justify-content: center;
  align-items: center;
`

// export default <Editor></Editor>
export default Editor