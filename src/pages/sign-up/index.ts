import Handlebars from 'handlebars';
import './signUp.module.sass';
import { template } from './signUp.tmpl';

export const signUp = () => Handlebars.compile(template)({
  button: 'Зарегистрироваться',
});
