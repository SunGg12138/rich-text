import Vue from 'vue';
import App from './App';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/icomoon/style.css';
import '@/assets/css/common.css';

Vue.config.productionTip = false;

Vue.use(elementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
