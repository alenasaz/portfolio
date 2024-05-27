import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from './components/Banner/Banner.tsx';
import { NavBar } from './components/NavBar/NavBar.tsx';
import { Projects } from './components/Projects/Projects.tsx';
import { Skills } from './components/Skills/Skills.tsx';
import { LOCALES } from './locales.js';
import { messages } from './messages.js';

function App() {
  const locale = LOCALES.RUSSIAN;

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale');
    return savedLocale || locale;
  }

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
  const [isSwitchOn, setIsSwitchOn] = useState(
    currentLocale === 'ru-RU' ? true : false
  );

  console.log(!isSwitchOn, currentLocale, 'test');

  const handleChange = () => {
    setIsSwitchOn(!isSwitchOn);
    setCurrentLocale(!isSwitchOn ? 'ru-RU' : 'en-US');
    localStorage.setItem('locale', currentLocale);
  };

  return (
    <IntlProvider
      locale={currentLocale}
      defaultLocale={currentLocale}
      messages={messages[currentLocale]}
    >
      <div className='App'>
        <NavBar
          currentLocale={currentLocale}
          checked={isSwitchOn}
          handleChange={handleChange}
        />
        <Banner />
        <Skills />
        <Projects />
      </div>
    </IntlProvider>
  );
}

export default App;
