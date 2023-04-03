import React from 'react';
import "antd/dist/antd.min.css";
import Editor from './pages/Editor/Editor';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UnsupportedResolution from './pages/UnsupportedResolution';
import useResolutionSupported from './hooks/useResolutionSupported';
import TemplateLibrary from './pages/TemplateLibrary/TemplateLibrary';

export default function App() {
  const resolutionSupported: boolean = useResolutionSupported()

  if (!resolutionSupported) return <UnsupportedResolution />
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/templates' element={<TemplateLibrary />}/>
        <Route path='/:templateName' element={<Editor/>}/>
        <Route
          path="*"
          element={<Navigate to="/classic" />}
        />
      </Routes>
    </BrowserRouter>
  )
}