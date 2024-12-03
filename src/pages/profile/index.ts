import Handlebars from 'handlebars';
import './profile.sass';
import { profileTmpl } from './profile.tmpl'

export const profile = () => Handlebars.compile(profileTmpl)({
  user: {
    name: 'Владимир',
    email: 'lampimampi@gmail.com',
    login: 'lampimampi',
    first_name: 'Владимир',
    second_name: 'Плутин',
    phone: '89999999999',
    nickname: 'Plutin'
  },
  buttonText: 'Сохранить'
});
