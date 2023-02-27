import { LOCALES } from './locales'

export const messages = {
  [LOCALES.ENGLISH]: {
    welcome: `Welcome to my portfolio`,
    price_display:
      'How {n, number, ::currency/USD} is displayed in your selected language',
    number_display:
      'This is how {n, number} is formatted in the selected locale',
    start_today: 'Start Today: {d, date}',
    // меню
    about_project: 'About the project',
    contact_us: 'Contact us'
  },
  [LOCALES.RUSSIAN]: {
    welcome: 'Добро пожаловать в мое портфолио',
    price_display:
      'Как {n, number, ::currency/RUB} отображается на выбранном языке',
    number_display:
      'Вот как {n, number} форматируется на основе выбранной локации',
    start_today: 'Начни сегодня: {d, date}',
    // меню
    about_project: 'О проекте',
    contact_us: 'Свяжитесь с нами'
  },

}