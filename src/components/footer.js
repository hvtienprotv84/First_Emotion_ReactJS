import React from "react"
import styled from "@emotion/styled"

import { Container, theme, media } from '../styles'
import bgUrl from '../images/space.png'


const StyledFooter = styled.footer`

background-image: url(${bgUrl});

  background-size: cover;
  background-position: center top;


  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background-color: ${props => props.bgColor ? props.bgColor : theme.colors.darkBlue};
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;

  ${media.medium} {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  ${media.small} {
    flex-direction: column;
  }

`

const FooterCopy = styled.h5`
  font-size: 25px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${theme.colors.light};
  text-align: center;

  &:first-of-type {
    ${media.small} {
      margin-bottom: 12px;
    }
  }

  ${media.medium} {
    font-size: 13px;
  }

  a {
    color: ${theme.colors.yellow};
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.light};
    }
  }
`


const Footer = ({ bgColor }) => {

  return (
    <StyledFooter bgColor={bgColor}>
      <StyledContainer>
        <FooterCopy> 
          &copy; Mọi Bản Quyền Thuộc Về Huỳnh Vĩnh Tiến
        </FooterCopy>
      </StyledContainer>
    </StyledFooter>
  )


}

export default Footer
