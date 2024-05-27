import React, { FC, useEffect, useState } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import catIcon from '../../assets/img/cat.svg';
import gitHubIcon from '../../assets/img/github.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import telegramIcon from '../../assets/img/telegram.svg';
import './NavBar.css';

export const NavBar: FC<{
  checked: boolean;
  handleChange: () => void;
}> = ({ checked, handleChange }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='' className='logo'>
          <img src={catIcon} alt='Logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Form>
            <Form.Check
              type='switch'
              id='custom-switch'
              label={<FormattedMessage id='switch_text' />}
              checked={!!checked}
              onChange={handleChange}
              className='navbar-switch'
            />
          </Form>
          <Nav className='ms-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              <FormattedMessage id='info_navbar' />
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              <FormattedMessage id='skills_header' />
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              <FormattedMessage id='projects_navbar' />
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://t.me/alenasaz'>
                <img src={telegramIcon} alt='' />
              </a>
              <a href='https://www.linkedin.com/in/alena-sazanova-23439721a/'>
                <img src={linkedinIcon} alt='' />
              </a>

              <a href='https://github.com/alenasaz'>
                <img src={gitHubIcon} alt='' />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
