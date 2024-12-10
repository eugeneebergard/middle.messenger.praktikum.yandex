import Handlebars from 'handlebars';
import './serverError.scss';
import { serverErrorTmpl } from './serverError.tmpl';

export const serverError = () => Handlebars.compile(serverErrorTmpl)({
  error: '500',
});
