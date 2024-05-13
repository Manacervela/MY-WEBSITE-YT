import React, { useRef } from 'react';
import Select from 'react-select';
import emailjs from '@emailjs/browser';

import {
  ContactContainer,
  ContactContent,
  ContactHeading,
  ContactParagraph,
  ContactWrapper,
  ContactRow,
  ContactColumn,
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  SubmitButton,
  SelectContainer,
} from './ContactusElements';

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'white',
    color: '#c7a2c2',
    borderRadius: '5px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#c7a2c2' : 'white',
    color: state.isSelected ? 'white' : '#c7a2c2',
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#c7a2c2',
  }),
};

const options = [
  { value: 'option1', label: 'Quotes and Special Events' },
  { value: 'option2', label: 'Order and Deliveries' },
  { value: 'option3', label: 'Complaints or Order Issues' },
  { value: 'option4', label: 'General Inquiries' },
  { value: 'option5', label: 'Other' },
];

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('message sent successfully');
    e.target.reset();

    emailjs
      .sendForm('service_kh6ql3o', 'template_75n7uq8', form.current, 'PkDWq5mtS7XnSy9Jp')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully")
        },
        (error) => {
          //console.log(error.text);
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <ContactContainer id="contact-us">
      <ContactContent>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactParagraph>
          Our contact form allows you to request quotes, make inquiries, file complaints,
          providing you with a direct way to communicate with us.
        </ContactParagraph>
      </ContactContent>
      <ContactWrapper>
        <ContactRow>
          <ContactColumn>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <ContactLabel>Subject</ContactLabel>
              <SelectContainer>
                <Select
                  options={options}
                  styles={customStyles}
                  placeholder="Select an option"
                />
              </SelectContainer>
              <ContactLabel htmlFor='fullname'>Full Name</ContactLabel>
              <ContactInput type="text" name="user_name" required /> 
              <ContactLabel htmlFor='email'>Email</ContactLabel>
              <ContactInput type="email" name="user_email" required /> 
              <ContactLabel htmlFor='textarea'>Message</ContactLabel>
              <ContactTextarea rows="6" name="message" required /> 
              <SubmitButton type="submit">Submit</SubmitButton>
            </ContactForm>
          </ContactColumn>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
