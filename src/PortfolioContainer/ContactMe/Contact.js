import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import {
  ContactContainer,
  ContactWrapper,
  ContactForm,
  ContactItemWrapper,
  ContactLabel,
  ContactInput,
  ContactItemWrapperMessage,
  ContactInputText,
  ContactHeading,
  ButtonsWrapper,
  Buttons,
  ContactLabelMessage,
  ButtonPageLink,
  ContactCancel,
  ContactCanceledWrapper,
} from "./ContactElements";
import CodeVideo from "../../items/Home/matrix2.mp4";
export default function Contact() {
  const form = useRef();
  let history = useNavigate();
  const [emailInfo, setEmailInfo] = useState({"name": "", "email":"","message":""})
  const handleSubmit=(e)=>{
    e.preventDefault();
    sendEmail()
  }


  const handleChange=(e)=>{
    if (e.target.value){
      setEmailInfo({...emailInfo, [e.target.name]: e.target.value})
    }
    else{ setEmailInfo({...emailInfo, [e.target.name]: ''}) }

  }
  const sendEmail = () => {
    var data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id:  process.env.REACT_APP_TEMPLATE_ID,
      user_id:  process.env.REACT_APP_PUBLIC_KEY,
      template_params: form.current
    }
    emailjs.sendForm(data.service_id, data.template_id, form.current, data.user_id)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
        alert("Your email has been sent");
        history("/reactPortfolio")
    }, function(error) {
       console.log('FAILED...', error);
       alert("Failed! Please reload page and retry.");
    });

  };
  return (
    <>
      <ContactContainer>
        <video autoPlay muted loop id="video" style={{ height: `100vh` }}>
        {window.innerWidth>=768 &&<source src={CodeVideo} type="video/mp4" />}
        </video>
        <ContactWrapper>
          <ContactCanceledWrapper>
            <ButtonPageLink to="/reactPortfolio">
              <ContactCancel>X</ContactCancel>
            </ButtonPageLink>
          </ContactCanceledWrapper>
          <ContactHeading>Contact Me</ContactHeading>
          <ContactForm onSubmit={handleSubmit} ref={form}>
            <ContactItemWrapper>
              <ContactLabel htmlFor="name">Name</ContactLabel>
              <ContactInput
                name="name"
                id="name"
                value={emailInfo.name}
                onChange={e=> handleChange(e)}
                required

              />

            </ContactItemWrapper>
            <ContactItemWrapper>
              <ContactLabel htmlFor="email">Email</ContactLabel>
              <ContactInput
                type="email"
                name="email"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                value={emailInfo.email}
                onChange={e=> handleChange(e)}
                required 
              />
            </ContactItemWrapper>

            <ContactItemWrapperMessage>
              <ContactLabelMessage htmlFor="message">
                Message
              </ContactLabelMessage>
              <ContactInputText
                name="message"
                id="message"
                pattern=".{3,}"
                value={emailInfo.message}
                onChange={e=> handleChange(e)}
                required
              ></ContactInputText>
            </ContactItemWrapperMessage>
            <ButtonsWrapper>
              <ButtonPageLink to="/reactPortfolio">
                {" "}
                <Buttons className="highlighted-button">Cancel</Buttons>
              </ButtonPageLink>
              <Buttons className="primary-button" type="submit">
                Submit
              </Buttons>
            </ButtonsWrapper>
          </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}
