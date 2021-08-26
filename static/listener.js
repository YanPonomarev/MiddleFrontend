import template from "../src/components/button/button.hbs";

document.addEventListener('DOMContentLoaded', () => {
    // const preCompiled = Handlebars.compile(template);
    // const button_name = 'Зарегистрироваться';
    document.body.innerHTML = template();
});
