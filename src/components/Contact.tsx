import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useRef(null);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const hasNameError = name.trim() === '';
    const hasEmailError = email.trim() === '' || !isValidEmail(email);
    const hasMessageError = message.trim() === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) return;

    const templateParams = {
      name,
      email,
      message
    };

    setIsSending(true);

    emailjs
      .send('Kbyn5EFZRf1xniKHt', 'foliocatch', templateParams, '19Dik-Dah02Waxz8r')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully! 🎉');
          setName('');
          setEmail('');
          setMessage('');
          setIsSending(false);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Oops! Something went wrong. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
