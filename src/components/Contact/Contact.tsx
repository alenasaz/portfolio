import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import './Contact.css';

const formInitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result?.code == 200) {
      setStatus({ success: true, message: 'Message sent' });
    } else {
      setStatus({ success: false, message: 'Something went wrong' });
    }
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact US' />
          </Col>
          <Col md={6}>
            <h2> Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.email}
                    placeholder='Email'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.phone}
                    placeholder='Phone'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  ></input>
                </Col>
                <Col sm={6} className='px-1'>
                  <textarea
                    // row='6'
                    type='text'
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status?.message && (
                  <Col>
                    <p
                      className={
                        status?.message === false ? 'danger' : 'success'
                      }
                    >
                      {status?.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
