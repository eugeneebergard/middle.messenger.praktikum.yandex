import Handlebars from 'handlebars';
import './notFound.scss';
import { notFoundTmpl } from './notFound.tmpl';

export const notFound = () =>  Handlebars.compile(notFoundTmpl)({});
