import React from 'react';
import styled from 'styled-components';
import { TemplateProps } from '../common/types';
import Avatar from '../common/components/Avatar';
import Icon from '../common/components/Icon';
import { formatPhone, formatTime } from '../common/utils';

const Classic: React.FC<TemplateProps> = ({ data, reversed = false }) => {
  const AvatarAndBio = () => (
    <SideWrapper>
      <Avatar image={data.image ?? ""} aspectRatio="3/4" />
      <Contacts>
        {data.contacts.map(({ name, value }) => {
          return (
            <ContactsItem 
              key={`drawer-contact-${name}`}
            >
              <Icon name={name}/>
              {
              ['phone', 'mobile'].includes(name.toLowerCase()) 
                ? formatPhone(value) 
                : value
              }
            </ContactsItem>
          )
        })}
      </Contacts>
      {
        !!data.skills.length && 
        <Block>
          <Title>⌨️ Skills</Title>
          {data.skills.map((skill, index) => <Skill key={`drawer-skill-${index}`}>{skill}</Skill>) }
        </Block>
      }
      {
        !!data.language.length && 
        <Block $gap={0.25}>
          <Title>🌎️ Languages</Title>
          {data.language.map(({ name, level }, index) => (
            <Block key={`drawer-language-${name}-${index}`}>
              <LanguageName>{name}</LanguageName>
              <LanguageLevel>{level}</LanguageLevel>
            </Block>
          ))}
        </Block>
      }
    </SideWrapper>
  )

  return (
    <Layout $reversed={reversed}>
      {!reversed && <AvatarAndBio />}
      <SideWrapper>
        <Block>
          <Name>{data.global.name} {data.global.surname}</Name>
          <Position>{data.global.position}</Position>
          <LocationText>
            {data.global.country}
            {!!data.global.country.length && !!data.global.relocation && ', '}
            {data.global.relocation && 'Көчүүгө даяр'}
          </LocationText>
        </Block>
        {
          !!data.education.length &&
          <Block $gap={1}>
            <Title>🎓 Education</Title>
            {data.education.map((education, index) => (
              <Block key={`drawer-education-${education.name}-${index}`}>
                <PointTitle>{education.name}</PointTitle>
                {!!education.speciality.length && <InlineText $italic >{education.speciality}</InlineText>}
                <InlineText>
                  {!!education.grade.length && <InlineText>{education.grade}{!!education.time.start.length && ', '}</InlineText>}
                  {formatTime(education.time)}
                </InlineText>
              </Block>
            ))}
          </Block>
        }
        {
          !!data.experience.length &&
          <Block $gap={1}>
            <Title>✍️ Experience</Title>
            {data.experience.map((experience, index) => (
              <Block key={`drawer-experience-${experience.companyName}-${index}`}>
                <PointTitle>
                  {!!experience.companyName.length && `${experience.companyName}${!!experience.time.start.length && ', '}`}
                  {formatTime(experience.time)}
                </PointTitle>
                {!!experience.position.length && <InlineText $italic>{experience.position}</InlineText>}
                {!!experience.description.length && <DescriptionText>{experience.description}</DescriptionText>}
              </Block>
            ))}
          </Block>
        }
      </SideWrapper>
      {reversed && <AvatarAndBio />}
    </Layout>
  )
}

const DescriptionText = styled.div`
  margin-top: 0.5em;
  text-align: left;
  color: #52575C;
`

const LocationText = styled.p`
  margin-bottom: 0;
  font-size: 1em;
  font-style: italic;
`

const InlineText = styled.span<{
  $italic?: boolean
}>`
  text-align: left;
  ${({ $italic }) => $italic && 'font-style: italic'};
`

const PointTitle = styled.p`
  margin-bottom: 0;
  font-weight: 700;
`

const LanguageName = styled.p`
  margin-bottom: 0;
  font-size: 0.9em;
`
const LanguageLevel = styled.p`
  margin-top: -0.4em;
  margin-bottom: 0;
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.7);
`

const Title = styled.p`
  text-transform: uppercase;
  font-size: 1.25em;
  margin-bottom: 0.25em;
  color: #136223;
  font-weight: 700;
`

const Skill = styled.p`
  margin-bottom: 0;
  font-size: 0.9em;
`

const Block = styled.div<{
  $gap?: number
  $horizontal?: boolean
}>`
  display: flex;
  flex-direction: ${({ $horizontal }) => $horizontal ? 'row' : 'column'};
  gap: ${({ $gap }) => $gap ?? 0}em;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`

const ContactsItem = styled.p`
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: 0;
  height: 1.5em;
  font-size: 1.1em;
  font-weight: 500;
`

const Name = styled.p`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0;
`

const Position = styled.p`
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.2em;
`

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const Layout = styled.div<{
  $reversed?: boolean
}>`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${({ $reversed }) => $reversed ? '2fr 1fr' : '1fr 2fr'};
  gap: 3%;
  height: 100%;
`

export default Classic;