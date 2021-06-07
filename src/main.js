const {priceFormat} = require('@/js/format.js');
import '@/js/element.js';
import {createApp} from 'vue';
import App from '@/vue/app';

console.log(priceFormat());
const app = createApp(App);
app.mount('#app');
