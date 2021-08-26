import template from './test_block.hbs'
import './test_block.scss'
import '../button'

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = template({
        btn_name: 'Батон найм',
        test_name: 'Тест найм'
    });
});
