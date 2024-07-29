import React  from "react"
import { info } from "../json"
import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconZalo from './images/twitter'
import styled from '@emotion/styled';

const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <ContainerSocialIcon>
          <a href={info.github} target="_blank" rel="noopener noreferrer">
            <IconGithub classes={`${iconClasses}`} />
          </a>
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedIn classes={`${iconClasses}`}  />
          </a>
          <a href={info.twitter} target="_blank" rel="noopener noreferrer">
            <IconZalo classes={`${iconClasses}`}  />
          </a>
      </ContainerSocialIcon>
    </>
  )
}

const ContainerSocialIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default SocialIconLinks
