import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite'
import { Tooltip } from 'antd'


import html2canvas from "html2canvas";
import userData from '../../../../store/userData';
import FloatingTriggerButton from '../../../../lib/FloatingTriggerButton';


const exportAsImage = async (imageFileName: string) => {
  const element = document.getElementById('print-area')!;
  const html = document.getElementsByTagName("html")[0];
  const body = document.getElementsByTagName("body")[0];
  let htmlWidth = html.clientWidth;
  let bodyWidth = body.clientWidth;

  const newWidth = element.scrollWidth - element.clientWidth;

  if (newWidth > element.clientWidth) {
    htmlWidth += newWidth;
    bodyWidth += newWidth;
  }

  html.style.width = htmlWidth + "px";
  body.style.width = bodyWidth + "px";

  const canvas = await html2canvas(element, { scale: 2 });
  const image = canvas.toDataURL('image/jpeg', 1.0);
  downloadImage(image, imageFileName);
  html.style.width = '';
  body.style.width = '';
};

const downloadImage = (blob: any, fileName: string) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style.display = 'none';
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};


const Save = observer(() => {
  const data = userData.summary
  const documentFilename = ['CV', data.global.name, data.global.surname].filter(Boolean).join('-')
  
  return (
    <FloatingTriggerButton onClick={() => exportAsImage(documentFilename)}>
      <Tooltip placement='right' title='сүрөт катары сактоо'>
        <DownloadOutlined />
      </Tooltip>
    </FloatingTriggerButton>
  )
})

export default Save