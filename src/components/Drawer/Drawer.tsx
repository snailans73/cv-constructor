import React, { useEffect, useRef, Suspense, useMemo } from 'react';
import styled from 'styled-components';
import editorSettings, { Paddings } from '../../store/editorSettings';
import { observer } from 'mobx-react-lite';
import userData, { Summary } from '../../store/userData';
import { getPaddingFromIndent } from './utils';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

interface DrawerProps {
  columns?: number | number[];
  rows?: number | string;
  paddings?: Paddings;
  templateName?: string;
  dataOverride?: Summary;
}

const Drawer = observer(({
  columns = 1,
  rows = 'auto', 
  templateName,
  dataOverride
}: DrawerProps) => {
  const drawerContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const beforePrint = () => {
      const drawer = drawerContentRef?.current
      if (drawer) {
        const { width } = drawer.getBoundingClientRect() 
        drawer.style.fontSize = `${parseFloat(editorSettings.fontSize) * 21 / width}cm`
      }
    }

    const afterPrint = () => {
      const drawer = drawerContentRef?.current
      if (drawer) {
        drawer.style.fontSize = ''
      }
    }

    window.addEventListener('beforeprint', beforePrint)
    window.addEventListener('afterprint', afterPrint)

    return () => {
      window.removeEventListener('beforeprint', beforePrint)
      window.removeEventListener('afterprint', afterPrint)
    }
  }, [])

  const { templateName: queryTemplateName } = useParams()
  const Template = useMemo(() => React.lazy(() => import(`../../templates/${templateName ?? queryTemplateName ?? 'classic'}/index`)), [queryTemplateName, templateName])

  return (
    <DrawerWrapper 
      id='print-area'
      $columns={columns}
      $rows={rows}
    >
      <DrawerContent ref={drawerContentRef} $paddings={editorSettings.paddings} $fontSize={editorSettings.customFontSize}>
        <Suspense fallback={<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}>
          <Template data={dataOverride ?? userData.summary} />
        </Suspense>
      </DrawerContent>
    </DrawerWrapper>
  );
})

const DrawerContent = styled.div<{
  $paddings: Paddings
  $fontSize?: string 
}>`
  font-size: ${({ $fontSize }) => $fontSize ? $fontSize + 'px' : '(9 + 5 * (100vw - 1280) / (1920px - 1280)'};
  margin: ${({ $paddings }) => {
    const paddings = [$paddings.top, $paddings.right, $paddings.bottom, $paddings.left]
    return paddings.map(value => getPaddingFromIndent(value) + '%').join(' ')
  }};
  overflow: hidden;
`

const DrawerWrapper = styled.div<{
  $columns: number | number[],
  $rows: number | string
}>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $columns }) => {
    if (Array.isArray($columns)) {
      return $columns.map(n => `${n}fr`).join(' ')
    }
    return `repeat(${$columns}, 1fr)`
  }};
  grid-template-rows: ${({ $rows }) => $rows};
  height: 100%;
  aspect-ratio: 210 / 297;
  background-color: #fff;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
`;

export default Drawer;