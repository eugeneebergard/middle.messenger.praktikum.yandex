import Handlebars from 'handlebars';
import { serverErrorTmpl } from './serverError.tmpl';

export const serverError = () => Handlebars.compile(serverErrorTmpl)({
  error: '500',
});
