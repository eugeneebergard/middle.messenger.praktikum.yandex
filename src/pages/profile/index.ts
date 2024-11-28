import Handlebars from 'handlebars';
import './profile.module.sass';
import { profileTmpl } from './profile.tmpl'

export const profile = () => Handlebars.compile(profileTmpl)({
  name: 'lampimampi',
});
