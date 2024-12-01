import Handlebars from 'handlebars';
import './notFound.sass';
import { notFoundTmpl } from './notFound.tmpl'

export const notFound = () =>  Handlebars.compile(notFoundTmpl)({});
