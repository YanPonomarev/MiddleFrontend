import Handlebars from "handlebars/dist/handlebars.runtime";
import template from './hello.hbs';
import './hello.scss'

Handlebars.registerPartial('hello', template);