import Handlebars from "handlebars/dist/handlebars";
import template from './button.tmpl'
import './button.scss'
import '../hello'

document.addEventListener('DOMContentLoaded', () => {
    const preCompiled = Handlebars.compile(template);
    // const button_name = 'Зарегистрироваться';
    document.body.innerHTML = preCompiled();
});
