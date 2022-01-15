import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
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
  Error,
} from "./ContactElements";
import CodeVideo from "../../items/Home/matrix2.mp4";

export default function Contact() {
  const form = useRef();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  let history = useNavigate();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_arr827a",
        "template_5d0k09j",
        form.current,
        "user_wQneKgh9g8JJrZ7fdg0MI"
      )
      .then(history("/"));
    alert("Your email has been sent");
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
          <ContactHeading>Contact Form</ContactHeading>
          <ContactForm onSubmit={handleSubmit(sendEmail)} ref={form}>
            <ContactItemWrapper>
              <ContactLabel htmlFor="name">Name</ContactLabel>
              <ContactInput
                name="name"
                id="name"
                {...register("name", {
                  required: "Required",
                })}
              />
              <Error>{errors.name && errors.name.message}</Error>
            </ContactItemWrapper>
            <ContactItemWrapper>
              <ContactLabel htmlFor="email">Email</ContactLabel>
              <ContactInput
                type="email"
                name="email"
                id="email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <Error>{errors.email && errors.email.message}</Error>
            </ContactItemWrapper>

            <ContactItemWrapperMessage>
              <ContactLabelMessage htmlFor="message">
                Message
              </ContactLabelMessage>
              <ContactInputText
                name="message"
                id="message"
                {...register("message", {
                  required: "Required",
                  minLength: { value: 3, message: "Message too short" },
                })}
              ></ContactInputText>
              <Error>{errors.message?.message}</Error>
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
