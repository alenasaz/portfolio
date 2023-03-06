import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    welcome: `Welcome to my portfolio`,
    switch_text: 'Russian',
    position_name: 'Frontend Developer',
    about_me:
      'Hello, my name is Alena. I work as a frontend-developer more than 1.5 years. In total in IT industry I work more than 4 years.',
    skills_header: 'Skills',
    skills_description: 'I can do such things',
    projects_header: 'My Projects',
  },
  [LOCALES.RUSSIAN]: {
    welcome: 'Добро пожаловать в мое портфолио',
    switch_text: 'Русский',
    position_name: 'Фронтенд разработчик',
    about_me:
      'Привет, меня зовут Алена! Я занимаюсь фронтенд-разработкой больше 1.5 года. В IT больше 4 лет. Я обожаю программирование.',
    skills_header: 'Навыки',
    skills_description:
      'На своем проекте я занималась разработкой системы бизнес-планирования. Я использовала React, Mobx, TypeScript, RestAPI, Sql, CSS. Сейчас ',
    projects_header: 'Мои проекты',
  },
};
