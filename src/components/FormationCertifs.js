
import styled from "@emotion/styled"

import {formationPage} from '../json'

import FormationItem from './formationItem'
import CertificationItem from './certificationItem'

import { Container, Section, theme } from '../styles'
import Header from "./header"
import Footer from "./footer"
import media from '../styles/media';

const Title = styled.h2`
  color: ${theme.colors.darkBlue};
  margin-bottom: 45px;
`;

const FormationCertifsContainer = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line; /* Giữ nguyên các ký tự xuống dòng trong văn bản */

`;

const ContainerHocVan = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidth};

  ${media.medium} {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  ${media.small} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;


const ContainerChungChi = styled.div`
  padding-bottom: 90px;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidth};

  ${media.medium} {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  ${media.small} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const FormationCertifs = (props) => {


  return (
    <>
    <Header headsData={formationPage} scrollDown={true} />

    <Section bgColor={theme.colors.light} id="experience">
      <ContainerHocVan>
        <Title>Học Vấn Và Thực Tập.</Title>
        <FormationCertifsContainer>
          {
            props.formations.map((formation, i) => {
              return <FormationItem
                {...formation}
                key={`${formation.company}`}
      
                 />
            })
          }
        </FormationCertifsContainer>
      </ContainerHocVan>
      

      <ContainerChungChi>
        <Title >Chứng Chỉ.</Title>
        <FormationCertifsContainer>
          {
            props.certifications.map((certif, i) => {
              return <CertificationItem
                {...certif}
                key={`${i}`}
 
                />
            })
          }
        </FormationCertifsContainer>
      </ContainerChungChi>
    </Section>
    <Footer></Footer>
    </>

  )
}

export default FormationCertifs
