import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './__heading.hbs';
import './__heading.scss';

Handlebars.registerPartial('__heading', template)