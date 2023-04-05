import React, { useEffect, useRef } from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'
import Drawer from '../../components/Drawer/Drawer'
import { fakeData } from '../../store/fakeData'
import { Link } from 'react-router-dom'



const TemplateLibrary = () => {
  const templates = ['classic', 'classic-reversed']
  
  const carousel = useRef<any>();
 
  useEffect(() => {
    const onArrowPress = (event: any) => {
      if (carousel.current) {
        if (event.key === 'ArrowRight') {
          carousel.current.next()
        }
        if (event.key === 'ArrowLeft') {
          carousel.current.prev()
        }
      }
    }

    window.addEventListener('keypress', onArrowPress)

    return () => window.removeEventListener('keypress', onArrowPress)
  }, []) 

  return (
    <StyledCarousel ref={carousel} >
      {templates.map(templateName => (
        <Slide key={templateName}>
          <DrawerLink to={`/${templateName}`}>
            <Drawer templateName={templateName} dataOverride={fakeData} />
          </DrawerLink>
        </Slide>
      ))}
    </StyledCarousel>
  )
}

const DrawerLink = styled(Link)`
  position: relative;
  color: unset;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 35px 6px rgba(34, 60, 80, 0.2);

  &:hover {
    color: unset;
  }
  &::after, &::before {
    transition: all 400ms ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0);
  }
  &:hover::after {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &::before {
    content: 'Тандоо';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    font-size: 24px;
    font-weight: bold;
    z-index: 10;
  }
  &:hover::before {
    opacity: 0.4;
  }
`

const Slide = styled.div`
  position: relative;
  display: flex !important;
  justify-content: center;
  padding: 5vh;
  gap: 10vh;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`

const StyledCarousel = styled(Carousel)`
  background-color: #dee1e4;
  height: 100vh;
  overflow: hidden;

  & ul.slick-dots {
    li.slick-active {
      width: 65px;
    }

    li {
      width: 40px;
      height: 10px;
      overflow: hidden;
      border-radius: 4px;

      button {
        height: 100%;
        background-color: #808080;
      }
    }
  }
`

export default TemplateLibrary 