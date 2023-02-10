import i18n from 'i18next';
import {initReactI18next } from 'react-i18next';

import english from './en.json'
import tamil from './ta_in.json'

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: { translation: english },
            ta_in: { translation: tamil }
        }
    })

export default i18n