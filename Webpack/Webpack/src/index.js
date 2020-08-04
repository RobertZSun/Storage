import $ from 'jquery';
import './css/base.css';
import './css/base.less';
import './css/base.scss';






$(function () {
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'blue');
});


class Person {
    static info ='aaa';
}

console.log(Person.info);


// -----------------------------------
import Vue from 'vue';
import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    render: h => h(App),
});
