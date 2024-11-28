import Handlebars from 'handlebars';
import './signIn.module.sass';
import { signInTmpl } from './signIn.tmpl';

export const signIn = () => Handlebars.compile(signInTmpl)({
  buttonText: 'Авторизоваться',
});
