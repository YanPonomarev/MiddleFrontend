import tmpl from './test_block.tmpl'
import Handlebars from "handlebars";
import './test_block.scss'

const template = Handlebars.compile(tmpl);
const test_block_name = 'Зарегистрироваться';
const html = template(test_block_name);
document.body.innerHTML = html;