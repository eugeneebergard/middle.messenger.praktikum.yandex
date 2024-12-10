import Handlebars from 'handlebars';
import './signUp.scss';
import { template } from './signUp.tmpl';

export const signUp = () => Handlebars.compile(template)({
  buttonText: 'Зарегистрироваться',
});
