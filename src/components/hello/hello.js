import Handlebars from "handlebars/dist/handlebars";
import template from './hello.tmpl';
import './hello.scss'

Handlebars.registerPartial('hello', template);