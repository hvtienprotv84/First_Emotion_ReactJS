import React, { useState } from "react";
import styled from "@emotion/styled";
import Formsy from "formsy-react";
import { Container, Section, theme, media } from "../styles";
import FormsyInput from "./formsyInput";
import FormsyTextArea from "./formsyTextArea";
import Header from "./header";
import axios from "axios";
import Footer from "./footer";
import { contactPage, info } from "../json";

const Socials = styled.ul`
  max-width: 500px;
  list-style-type: none;

  li {
    color: ${theme.colors.dark};
    margin-bottom: 10px;
    margin-left: -30px;
    position: relative;
    padding-left: 0px;

    transition: margin-left 0.2s ease-in-out;

    &::before {
      color: ${theme.colors.dark};
      position: absolute;
      left: 0;
      height: 12px;
      width: 12px;
      top: 0;
      bottom: 0;
      margin: auto;

      background-size: 12px;
      background-repeat: no-repeat;
      content: "";
    }
    a{
      text-decoration: none;
    color: ${theme.colors.dark};



      &:hover{
        text-decoration: none;
      }
    }
   
  }
  li:hover {
    color: #0c4d6b;
    cursor: pointer;

    transition: ${theme.transition};
    transform: translateX(15px);
    cursor: pointer;
  }

  ${media.small} {
  }
`;

const Title = styled.h3`
  color: ${theme.colors.dark};
  margin-bottom: 25px;
  margin-left: 2%;
`;
const ErrorMessage = styled.p`
  // color: ${theme.colors.dark};
  margin-bottom: 15px;
  margin-left: 2%;
  color: Brown;
`;

const Copy = styled.h5`
  color: ${theme.colors.dark};
  margin-left: 2%;
  font-size: 22px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: ${theme.colors.mayerPurple};
    text-decoration: underline;
  }

  ${media.medium} {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  margin-right: 5%;
  margin-top: 30px;
`;

const FormContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  // margin-top: 30px;

  div {
    width: 100%;
    display: column;
    flex-direction: row;
    margin-bottom: 15px;
  }

  label {
    color: ${theme.colors.darkLight};
    font-size: 12px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    max-width: 100%;
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.dark};
    margin-top: 5px;
    border-radius: ${theme.borderRadius};
    padding: 12px;
    font-size: 14px;
    resize: vertical;

    &.error {
      border: 1px solid red;
    }

    &:focus {
      outline: none;
    }
  }
  input {
    padding-right: 150px;
  }

  .error-message {
    position: absolute;
    font-size: 12px;
    height: 12px;
    color: red;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
  }

  button {
    display: block;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.darkLight};
    border-radius: ${theme.borderRadius};
    padding: 12px 20px;
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
    font-size: 16px;
    border: 0;
    width: 200px;
    margin-left: auto;
    &:hover {
      cursor: pointer;
      box-shadow: ${theme.boxShadowHover};
    }

    &:focus {
      outline: none;
    }

    ${media.medium} {
      margin-bottom: 20px;
    }

    ${media.small} {
      width: 100%;
    }
  }
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("huynhvinhtien@gmail.com");
  const [isEmailCopied, setIsEmailCopied] = useState(false);


  const handleSubmit = async (obj) => {
    setIsLoading(true);
    try {
      const response = await axios.post("https://masa3id.com/font/mail.php", obj);
      const data = response.data;
      console.log("resp: ", data);
      setIsLoading(false);

      setSubmitted(true);

      setErrorMessage("");
    } catch (error) {
      setIsLoading(false);

      console.error("err ", error);
      setErrorMessage(
        "Uh oh, the aliens seem to have taken off with our form. We're sending a rescue mission to retrieve it!"
      );
    }
  };


  const handleEmailClick = () => {
    navigator.clipboard.writeText(email);
    setIsEmailCopied(true);
  };

  const handleEmailMouseLeave = () => {
    if (isEmailCopied) {
      setEmail("huynhvinhtien@gmail.com");
      setIsEmailCopied(false);
    }
  };

  return (
    <>
      <Header headsData={contactPage} scrollDown={true} />

      <Section bgColor={theme.colors.light} id="contact">
        <Container>
          <Title>Contact.</Title>
          <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>

          <FlexRow>
            <div style={{ width: "100%" }}>
              {!submitted ? (
                <>
                  <FormContainer>
                    <Formsy
                      name="Contact Form"
                      onValidSubmit={handleSubmit}
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <div>
                        <label>Email</label>
                        <FormsyInput
                          name="email"
                          validations="isEmail"
                          validationError="This is not a valid email."
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div>
                        <label>Message</label>
                        <FormsyTextArea
                          name="message"
                          placeholder="Xin Chào Bạn, Tôi Thắc Mắc Vấn Đề Này!"
                          validationError="This is required"
                          required
                        />
                      </div>
                      <div style={{ display: "none" }}>
                        <label>
                          Don’t fill this out:
                          <FormsyInput name="bot-field" value="" />
                        </label>
                      </div>
                      <button type="submit">
                        {" "}
                        {isLoading ? "Đang Gửi Email..." : "Gửi Email"} ›
                      </button>
                    </Formsy>
                  </FormContainer>
                </>
              ) : (
                <>
                  <Title>Xin Cám Ơn, Tôi Đã Nhận Được Email Của Bạn!</Title>
                  <Copy>
                    {" "}
                    Xin Vui Lòng, Hãy Cho Tôi Thời Gian Để Trả Lời Email Của Bạn Nhé!
                  </Copy>
                </>
              )}
            </div>
            <TextContainer>
            Tôi đang tích cực tìm kiếm mối quan hệ hợp tác với các công ty, cơ quan và cá nhân tôi coi trọng việc hợp tác giải quyết vấn đề. Tận dụng kinh nghiệm hiểu biết của mình về phát triển trang web và công nghệ phần mềm, mục tiêu của tôi là cung cấp các giải pháp toàn diện nhằm giải quyết các thách thức kinh doanh trong thế giới thực.
              <br></br>
              {/* <br></br>
              Feel free to reach out through any platforms bellow:
              <br></br> */}
              <br></br>
              <Socials>
                <li
                  onClick={handleEmailClick}
                  onMouseLeave={handleEmailMouseLeave}
                >
                  {isEmailCopied ? "Copied to clipboard!" : email}
                </li>
                {/* <li><a href={info.instagram} target='blank'>Instagram</a></li> */}
                <li><a href={info.linkedin} target='blank'>Facebook</a></li>
                <li><a href={info.github} target='blank'>Github</a></li>
                <li><a href={info.twitter} target='blank'>Zalo</a></li>
                <br></br>
              </Socials>
            </TextContainer>
          </FlexRow>
        </Container>
      </Section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
