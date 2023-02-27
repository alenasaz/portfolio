import { useState } from 'react';
import { IntlProvider } from 'react-intl'

import { NavBar } from './components/NavBar.jsx';
import {Banner } from './components/Banner.jsx';
import { Skills } from './components/Skills.jsx';
import {Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { LOCALES } from './locales.js';
import { messages } from './messages.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const locale = LOCALES.RUSSIAN;

  function getInitialLocale() {
    // получаем сохраненные данные
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value)
    // сохраняем локацию в хранилище
    localStorage.setItem('locale', value)
  }

  return (
    <IntlProvider locale={locale} defaultLocale={locale} messages={messages[locale]}>
    <div className="App">
    <NavBar currentLocale={currentLocale} handleChange={handleChange}/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </IntlProvider>
  );
}

export default App;
