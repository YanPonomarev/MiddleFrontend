import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './dialog-window.hbs';
import './dialog-window.scss';
import './__heading'

Handlebars.registerPartial('dialog-window', template);