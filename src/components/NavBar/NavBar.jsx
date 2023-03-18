import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import telegramIcon from '../../assets/img/telegram.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import gitHubIcon from '../../assets/img/github.svg';
import catIcon from '../../assets/img/cat.svg';
import './NavBar.css';

export const NavBar = ({ checked, currentLocale, handleChange }) => {
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

  console.log(currentLocale, 'currentLocale');

  return (
    <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='/' className='logo'>
          <img src={catIcon} alt='Logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'> ggg</span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Form>
              <Form.Check
                type='switch'
                id='custom-switch'
                label='Russian'
                checked={checked}
                onChange={handleChange}
              />
            </Form>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
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
