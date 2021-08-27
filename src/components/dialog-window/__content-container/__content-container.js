import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './__content-container.hbs';
import './__content-container.scss';

Handlebars.registerPartial('__content-container', template);