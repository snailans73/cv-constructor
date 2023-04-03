import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Area, Point } from "react-easy-crop/types";
import Cropper from "react-easy-crop";
import { Slider } from "antd";
import { getCroppedImg } from "./utils";
import userData from "../../store/userData";
import { observer } from "mobx-react-lite";

const ImageUploader: React.FC = observer(() => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(3);

  const getCroppedImage = useCallback(async (croppedAreaPixels: Area) => {
    try {
      const croppedImage = await getCroppedImg(
        preview,
        croppedAreaPixels
      )
      userData.setNewImage(croppedImage)
    } catch (e) {}
  }, [preview])

  const onCropComplete = useCallback(
    (_, croppedAreaPixels: Area) => {
      getCroppedImage(croppedAreaPixels);
    },
    [getCroppedImage]
  );

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const handleFileInput = (files: FileList | null, event: any) => {
    event.preventDefault();
    if (!files?.length) return;
    const file = files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file);
    }
  }

  return (
    <>
    <ImageUploadArea 
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => handleFileInput(event.dataTransfer.files, event)}
    >
      {preview && <>
        <UploadAnotherButton
          onClick={() => { setImage(null); fileInputRef?.current?.click(); }}
        >
          <CloudUploadOutlined />
        </UploadAnotherButton>
        <SliderWrapper>
          <Slider 
            value={zoom} 
            min={1}
            max={3}
            step={0.05}
            tooltipVisible={false}
            onChange={(newValue) => {
              setZoom(newValue);
            }} 
          />
        </SliderWrapper>
      </>
      }
      {preview ? (
        <Cropper
          image={preview}
          crop={crop}
          zoom={zoom}
          aspect={3 / 4}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      ) : (
        <UploadButton
          onClick={(event) => {
            event.preventDefault();
            fileInputRef?.current?.click();
          }}
        >
          <CloudUploadIcon />
          <span>Жүктөө үчүн бул аймакка файлды көчүрүңүз же сүйрөңүз</span>
        </UploadButton>
      )}
      <HiddenFileInput
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(event) => handleFileInput(event.target.files, event)}
      />
    </ImageUploadArea>
    {/* <img src={croppedImage ?? ''} alt="" /> */}
    </>
  );
});

const SliderWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  left: 60px;
  max-height: 40px; 
  height: 40px;
  border-radius: 10px;
  background-color: #FAFBFC;
  border: 2px solid #E2E5E8;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
  z-index: 2;

  & .ant-slider {
    margin: 16px;
    padding: 0;
    

    .ant-slider-rail {
      background-color: #E2E5E8;
    }

    .ant-slider-track {
      background-color: #448EF7;
    }

    .ant-slider-handle {
      
      border-color: #448EF7;
    }
  }
`

const UploadAnotherButton = styled.button`
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  bottom: 10px;
  left: 10px;
  font-size: 24px;
  border-radius: 10px;
  color: #448EF7;
  background-color: #FAFBFC;
  border: 2px solid #E2E5E8;
  cursor: pointer;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);
  z-index: 2;
`

const ImageUploadArea = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  overflow: hidden;
  background-color: #FAFBFC;
  border: 2px dashed #E2E5E8;
  border-radius: 10px;
  transition: all 300ms ease-in-out;

  &:hover {
    border: 2px dashed #448EF7;
  }
`

const HiddenFileInput = styled.input`
  display: none;
`

const UploadButton = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #404E60;
  inset: 0;
  padding: 0;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const PreviewImageContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
`

const CloudUploadIcon = styled(CloudUploadOutlined)`
  font-size: 400%;
  color: #448EF7;
`

export default ImageUploader;
