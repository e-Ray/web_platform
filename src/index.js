import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/pages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './main.css';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import { IntlProvider, addLocaleData, defineMessages } from 'react-intl';


import localeData from './locale.json';

addLocaleData([...en, ...de]);
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = defineMessages(localeData[languageWithoutRegionCode] || localeData[language] || localeData.en);



function test() {
  console.log(messages);
  return (

<IntlProvider locale={language} messages={messages}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
</IntlProvider>
  );
}

ReactDOM.render(


  		test(),

  document.getElementById('root'),

);
