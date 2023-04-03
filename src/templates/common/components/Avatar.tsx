import React from 'react';
import styled from 'styled-components';

type AvatarAspectRatio = '1/1' | '3/4'

interface AvatarProps {
  aspectRatio?: AvatarAspectRatio
  circular?: boolean
  image: string
}

const Avatar: React.FC<AvatarProps> = ({ aspectRatio, circular, image }) => {
  return (
    <AvatarWrapper $aspectRatio={aspectRatio} $circular={circular}>
      {image.length ? <img src={image} alt="Avatar" /> : <DefaultAvatar />}
    </AvatarWrapper>
  );
}

const DefaultAvatar = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#E6E6E6"/>
      <circle cx="299.5" cy="285.5" r="104.5" fill="#C4C4C4"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M525 645C525 520.736 424.264 420 300 420C175.736 420 75 520.736 75 645H525Z" fill="#C4C4C4"/>
    </svg>
  )
}

const AvatarWrapper = styled.div<{
  $aspectRatio?: AvatarAspectRatio
  $circular?: boolean
}>`
  width: 100%;
  aspect-ratio: ${({ $aspectRatio, $circular }) => {
    if ($circular) return '1/1'
    return $aspectRatio ?? '1/1'
  }};
  ${({ $circular }) => $circular && 'border-radius: 50%' };
  overflow: hidden;
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
  }
`

export default Avatar;
