import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './dialog-window.hbs';
import './dialog-window.scss';
import './__heading'
import './__content-container'
Handlebars.registerPartial('dialog-window', template);
