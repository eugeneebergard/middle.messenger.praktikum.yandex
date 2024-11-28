import Handlebars from 'handlebars';
import './chat.module.sass';
import { chatTmpl } from './chat.tmpl'

export const chat = () => Handlebars.compile(chatTmpl)({});
