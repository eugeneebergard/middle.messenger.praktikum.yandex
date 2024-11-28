import Handlebars from 'handlebars';
import './notFound.module.sass';
import { notFoundTmpl } from './notFound.tmpl'

export const notFound = () =>  Handlebars.compile(notFoundTmpl)({});
