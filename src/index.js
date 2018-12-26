/*!
 * WCMS - WEX Simple CMS
 * https://github.com/vedees/wcms
 * Copyright (C) 2018 Evgenii Vedegis <vedegis@gmail.com>
 * https://github.com/vedees/wcms/blob/master/LICENSE
 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue & other libraries. It is a great starting
 * point when building robust, powerful web applications using Vue and WCMS.
 */

// CodeMirror
window.CodeMirror = require('codemirror/lib/codemirror.js');
// Mode:
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/javascript/javascript.js'
// Theme css in libs.styl

// Vue
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('text-component', require('./components/Text.vue').default);
Vue.component('modal-component', require('./components/UI/Modal.vue').default);
Vue.component('images-component', require('./components/Images.vue').default);
Vue.component('code-list-component', require('./components/CodeList.vue').default);
Vue.component('code-editor-component', require('./components/CodeEditor.vue').default);
Vue.component('chart-component', require('./components/dashboard/Chart.vue').default);

// Vue initial data
const app = new Vue({
    el: '#app',
});

//! Import common main files
// Main stylus
import './stylus/main.styl'
// Black Theme
import './stylus/theme/black.styl'
// Index.js
import './js'
